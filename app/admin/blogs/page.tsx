"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AdminNavbar from '@/components/AdminNavbar';

export default function AdminBlogManager() {
    const [blogs, setBlogs] = useState([]);
    const [search, setSearch] = useState('');
    const [flagReports, setFlagReports] = useState<{ [key: number]: any }>({});
    const [loadingId, setLoadingId] = useState<number | null>(null);

    useEffect(() => { fetchBlogs(); }, []);

    const fetchBlogs = async () => {
        const res = await fetch('http://localhost/api/user/get_blogs.php');
        const result = await res.json();
        setBlogs(result.data);
    };

    const scanWithAI = async (id: number, text: string) => {
        setLoadingId(id);
        try {
            const res = await fetch('http://localhost/api/admin/check_content.php', {
                method: 'POST',
                body: JSON.stringify({ text }),
            });
            const result = await res.json();

            if (result.flagged) {
                setFlagReports(prev => ({ ...prev, [id]: result }));
            } else {
                alert("✅ Content Cleared.");
                setFlagReports(prev => {
                    const newReports = { ...prev };
                    delete newReports[id];
                    return newReports;
                });
            }
        } catch (e) { alert("AI connection failed."); }
        finally { setLoadingId(null); }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure want to permanenetly delete this post?")) return;

        try {
            const res = await fetch('http://localhost/api/admin/delete_blog.php', {
                method: 'POST',
                body: JSON.stringify({ id }),
            });
            const result = await res.json();

            if (result.status === 'success') {
                setBlogs(prev => prev.filter((b: any) => b.id !== id));
                setFlagReports(prev => {
                    const newReports = { ...prev };
                    delete newReports[id];
                    return newReports;
                });
            } else {
                alert("Error: " + result.message);
            }
        } catch (e) {
            alert("Server connection failed.")
        }
    } 


    return (
        <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
            <AdminNavbar />

            <div className="max-w-5xl mx-auto">
                <header className="flex justify-between items-end mb-16 border-l-4 border-emerald-500 pl-6">
                    <div>
                        <h1 className="text-5xl font-black italic tracking-tighter">BLOG <span className="text-emerald-500">MODERATION</span></h1>
                        <p className="text-gray-500 text-sm mt-2">Zero-tolerance paddock enforcement.</p>
                    </div>
                    <input
                        placeholder="Filter Keywords by title and author..."
                        onChange={(e) => setSearch(e.target.value)}
                        className="p-3 bg-white/5 border border-white/10 rounded-xl w-72 text-sm outline-none focus:border-emerald-500 transition-all"
                    />
                </header>

                <div className="grid gap-6">
                    {blogs.filter((b: any) => b.title.toLowerCase().includes(search.toLowerCase()) || b.author_name.toLowerCase().includes(search.toLowerCase())).map((blog: any) => (
                        <motion.div
                            layout
                            key={blog.id}
                            className={`p-8 bg-white/5 border rounded-[2rem] transition-all ${
                                flagReports[blog.id] ? 'border-red-500/30 bg-red-500/5' : 'border-white/5'
                            }`}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h3 className="font-bold text-2xl tracking-tight mb-1">{blog.title}</h3>
                                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">Author: {blog.author_name}</p>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => scanWithAI(blog.id, `${blog.title} ${blog.content}`)}
                                        disabled={loadingId === blog.id}
                                        className="px-6 py-2 bg-emerald-500 text-black rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all"
                                    >
                                        {loadingId === blog.id ? "Analyzing..." : "AI Scan"}
                                    </button>
                                    <button onClick={() => handleDelete(blog.id)} className="px-6 py-2 bg-white/5 text-red-500 border border-red-500/20 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all">
                                        Delete
                                    </button>
                                </div>
                            </div>

                            {/* Structured AI Report Card */}
                            <AnimatePresence>
                                {flagReports[blog.id] && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-12"
                                    >
                                        <div className="min-w-[140px]">
                                            <p className="text-[9px] text-red-500 uppercase font-black mb-2 tracking-widest">Violation</p>
                                            <p className="text-white font-bold text-sm leading-tight">{flagReports[blog.id].category}</p>
                                        </div>
                                        <div className="min-w-[140px]">
                                            <p className="text-[9px] text-gray-500 uppercase font-black mb-2 tracking-widest">Target</p>
                                            <p className="text-white font-bold text-sm leading-tight">{flagReports[blog.id].targets}</p>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[9px] text-gray-500 uppercase font-black mb-2 tracking-widest">Evidence</p>
                                            <p className="text-gray-400 italic text-sm leading-relaxed">"{flagReports[blog.id].evidence}"</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}