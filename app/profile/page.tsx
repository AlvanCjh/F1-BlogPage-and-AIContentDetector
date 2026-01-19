"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ProfilePage() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('Loading...');
    const [newName, setNewName] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const storedEmail = localStorage.getItem('userEmail');
        if (storedEmail) {
            setEmail(storedEmail);
            fetchProfile(storedEmail);
        }
    }, []);

    const fetchProfile = async (userEmail: string) => {
        try {
            // FIX: Use backticks for template literals
            const res = await fetch(`http://localhost/api/user/get_profile.php?email=${userEmail}`);
            const result = await res.json();

            if (result.status === 'success') {
                const fetchedName = result.data.name || 'No name set';
                setName(fetchedName);
                if (result.data.name) {
                    localStorage.setItem('userName', result.data.name);
                }
            }
        } catch (error) {
            console.error("Failed to fetch profile: ", error);
            setName('Error loading name');
        }
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('Saving...');

        try {
            const res = await fetch('http://localhost/api/user/update_profile.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, newName }),
            });
            const data = await res.json();

            if (data.status === 'success') {
                setName(newName); // Update UI immediately
                localStorage.setItem('userName', newName);
                setMessage('Profile updated successfully!');
                
                // Notify the Navbar to update the name instantly
                window.dispatchEvent(new Event("profileUpdate")); 
                
                // Optional: Clear the input after success
                setNewName('');
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            setMessage('Error connecting to server.');
        }
    };

    return (
        <main className="flex min-h-screen items-center justify-center pt-20">
            <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="w-full max-w-lg p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
                <h2 className="text-3xl font-bold mb-2">User Profile</h2>
                
                <div className="mb-8 p-4 bg-white/5 rounded-lg border border-white/5">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Current Info</p>
                    <p className="text-white font-semibold">Name: <span className="text-blue-400">{name}</span></p>
                    <p className="text-white font-semibold">Email: <span className="text-blue-400">{email}</span></p>
                </div>

                <form onSubmit={handleUpdate} className="space-y-6">
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Update Display Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter new name"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:border-blue-500 outline-none text-white transition-all" 
                        />
                    </div>
                    <button className="w-full py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-500 transition-all text-white shadow-lg shadow-blue-500/20">
                        Update Profile
                    </button>
                    
                    {message && (
                        <motion.p 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            className="text-center text-sm text-blue-400"
                        >
                            {message}
                        </motion.p>
                    )}
                </form>
            </motion.div>
        </main>
    );
}