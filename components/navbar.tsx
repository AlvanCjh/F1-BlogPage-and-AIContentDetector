// src/components/Navbar.tsx
"use client"; // Required for Framer Motion animations

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Login', href: '/login' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-10 py-6 bg-black/50 backdrop-blur-md border-b border-white/10">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-bold text-2xl tracking-tighter"
      >
        MyBrand
      </motion.div>

      <div className="flex gap-8">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="relative group text-gray-400 hover:text-blue-500 transition-colors">
            {link.name}
            {/* Animated Underline */}
            <motion.span 
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"
              layoutId="underline"
            />
          </Link>
        ))}
      </div>
    </nav>
  );
}