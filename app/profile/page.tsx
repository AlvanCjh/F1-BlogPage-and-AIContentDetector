"use client";
import { useState, useEffect, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { motion } from 'framer-motion';

export default function ProfilePage() {
  const [email, setEmail] = useState('');
  const [pfp, setPfp] = useState<string | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
      fetchProfile(storedEmail);
    }
  }, []);

  const fetchProfile = async (userEmail: string) => {
    const res = await fetch(`http://localhost/api/user/get_profile.php?email=${userEmail}`);
    const result = await res.json();
    if (result.status === 'success' && result.data.profile_pic) {
      setPfp(result.data.profile_pic);
      localStorage.setItem('userPfp', result.data.profile_pic);
      window.dispatchEvent(new Event("profileUpdate"));
    }
  };

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener('load', () => setImageSrc(reader.result as string));
      reader.readAsDataURL(file);
    }
  };

  const onCropComplete = useCallback((_area: any, pixels: any) => {
    setCroppedAreaPixels(pixels);
  }, []);

  const handleUpload = async () => {
   
    const fileInput = document.getElementById('pfpInput') as HTMLInputElement;
    if (!fileInput.files?.[0]) return;

    const formData = new FormData();
    formData.append('email', email);
    formData.append('image', fileInput.files[0]);

    const res = await fetch('http://localhost/api/user/upload_pfp.php', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    if (data.status === 'success') {

      setPfp(data.image_path);
      localStorage.setItem('userPfp', data.image_path);
      window.dispatchEvent(new Event("profileUpdate"));
      setImageSrc(null);
      alert("Profile picture updated!");
    }
  };

  return (
    <main className="min-h-screen pt-32 bg-black text-white px-6">
      <div className="max-w-xl mx-auto bg-white/5 p-8 rounded-3xl border border-white/10">
        <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>

        <div className="flex flex-col items-center gap-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-blue-600">
            {pfp ? (
              <img src={`http://localhost/api/user/pfp/${pfp}`} className="object-cover w-full h-full" alt="Profile" />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">?</div>
            )}
          </div>

          <input type="file" id="pfpInput" accept="image/*" onChange={onFileChange} className="hidden" />
          <button onClick={() => document.getElementById('pfpInput')?.click()} className="text-sm text-blue-500 font-bold hover:underline">
            Change Photo
          </button>
        </div>

        {/* Crop Modal */}
        {imageSrc && (
          <div className="fixed inset-0 z-[100] bg-black p-10 flex flex-col items-center">
            <div className="relative w-full h-64 md:h-96">
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>
            <div className="mt-6 flex gap-4">
              <button onClick={handleUpload} className="px-8 py-2 bg-blue-600 rounded-lg">Save Crop</button>
              <button onClick={() => setImageSrc(null)} className="px-8 py-2 bg-white/10 rounded-lg">Cancel</button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}