// src/app/login/page.tsx
"use client";
import { motion } from 'framer-motion';

export default function LoginPage() {
    return (
        <main className="flex min-h-screen items-center justify-center px-4">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md p-8 rounded-2xl bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl"
                >
                    <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Email</label>
                            <input type="email" className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:border-blue-500 outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Password</label>
                            <input type="password" className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:border-blue-500 outline-none transition-all" />
                        </div>
                        <button className="w-full py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-500 transition-all">
                            Sign In
                        </button>
                    </form>
                </motion.div>
        </main>
    )
} 