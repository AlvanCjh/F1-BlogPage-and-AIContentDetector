// src/app/page.tsx
"use client";
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {

  // Auto Scroll to Content
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (

    <>

    <main className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      {/* Animated Heading with Blue Glow */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-black text-blue-600 drop-shadow-[0_0_25px_rgba(37,99,235,0.5)]"
      >
        Welcome to my Website!
      </motion.h1>

      {/* Subtext with slight delay */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-xl text-gray-400 max-w-lg"
      >
        Built with React, Next.js, and Tailwind CSS for a premium, high-performance experience.
      </motion.p>

      {/* Animated Button */}
      <motion.button
        onClick={scrollToContent}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 px-8 py-3 bg-blue-600 rounded-full font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20"
      >
        Get Started
      </motion.button>
    </main>

    {/* Features */}
    <section 
        ref={contentRef} 
        className="min-h-screen py-20 px-10 bg-black/50"
      >
        <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Example Feature Card */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center text-xl font-bold">1</div>
            <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
            <p className="text-gray-400">Optimized by Next.js App Router for 2026 speed standards.</p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center text-xl font-bold">2</div>
            <h3 className="text-xl font-semibold mb-2">Smooth Motion</h3>
            <p className="text-gray-400">Powered by Framer Motion for high-end user interactions.</p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center text-xl font-bold">3</div>
            <h3 className="text-xl font-semibold mb-2">Modern UI</h3>
            <p className="text-gray-400">Clean glassmorphism design with Tailwind CSS.</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto overflow-hidden rounded-3xl relative p-12 text-center"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient opacity-90" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Us Today!
            </h2>

          { /* Floating Image */ }
            <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut"}}
            className="flex justify-center mb-10"
            >
              <div className="w-64 h-40 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="p-4 text-left">
                  <div className="w-10 h-2 bg-blue-400 rounded-full mb-2 opacity-50"></div>
                  <div className="w-20 h-2 bg-white rounded-full mb-4 opacity-30"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-10 bg-white/5 rounded-md"></div>
                    <div className="h-10 bg-white/5 rounded-md"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Experience the future of web applications with cutting-edge technology and design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-xl">
                Get Started
              </button>
              <button className="px-8 py-4 bg-black/30 text-white font-bold rounded-xl border border-white/20 hover:bg-black/50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </motion.div> 
      </section>

    </>
  );
}
