// src/components/Navbar.tsx
"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null); // Track admin and user 
  const router = useRouter();

  // Check login status on mount
  useEffect(() => {
    const checkUser = () => {
      const storedEmail = localStorage.getItem('userEmail');
      const storedName = localStorage.getItem('userName');
      const storedRole = localStorage.getItem('userRole'); // Capture user role 

      setUser(storedEmail);
      setUserName(storedName);
      setRole(storedRole);
    };

    checkUser();
    window.addEventListener('storage', checkUser);
    window.addEventListener('profileUpdate', checkUser);
    window.addEventListener('loginUpdate', checkUser);

    return () => {
      window.removeEventListener('storage', checkUser);
      window.removeEventListener('profileUpdate', checkUser);
      window.removeEventListener('loginUpdate', checkUser);
    };

  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    setUserName(null);
    setRole(null);
    setIsOpen(false);
    window.location.href = '/login';
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    ...(user ? [{ name: 'Feed', href: '/blog' }] : []),
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-10 py-6 bg-black/50 backdrop-blur-md border-b border-white/10">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-bold text-2xl tracking-tighter">
        MyBrand
      </motion.div>

      <div className="flex gap-8 items-center">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="text-gray-400 hover:text-blue-500 transition-colors">
            {link.name}
          </Link>
        ))}

        {/* Dynamic Dropdown */}
        <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
          <button className="px-5 py-2 bg-blue-600 rounded-full text-sm font-medium hover:bg-blue-500 transition-all">
            {user ? (role === 'admin' ? "👑 Admin" : "Account") : "Sign In"}
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl"
              >
                {/* Check if user exists */}
                {user ? (
                  <>
                    <div className="px-4 py-3 text-[10px] text-gray-500 border-b border-white/5 uppercase tracking-widest bg-white/5">
                      {role === 'admin' ? 'ADMIN' : 'USER'}: {userName}
                    </div>

                    { /* Admin Login */ }
                    {role === 'admin' && (
                      <Link href="/admin/dashboard" className="block px-4 py-3 text-sm text-emerald-400 hover:bg-emerald-500/10 transition-colors">
                        Admin Dashboard
                      </Link>
                    )}

                    <Link href="/profile" className="block px-4 py-3 text-sm text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                      Profile Settings
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left block px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 transition-colors border-t border-white/5"
                    >
                      Log Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="block px-4 py-3 text-sm text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                      Login
                    </Link>
                    <Link href="/signup" className="block px-4 py-3 text-sm text-gray-300 border-t border-white/5 hover:bg-blue-600 hover:text-white transition-colors">
                      Sign Up
                    </Link>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}