"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Interface of the blog
interface Blog {
    id: number;
    title: string;
    content: string;
    author_name: string;
    image_path: string;
    created_at: string;
}

export default function BlogFeed() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('http://localhost/api/user/get_blogs.php');
        const result = await res.json();
        if (result.status === 'success') {
          setBlogs(result.data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-600"></div>
    </div>
  );

  return (
    <main className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-white tracking-tighter">COMMUNITY <span className="text-blue-600">FEED</span></h1>
            <p className="text-gray-400 mt-2">Latest insights from the Mercedes AMG Petronas fans.</p>
          </div>
          <Link href="/blog/create" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20">
            Create Post
          </Link>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl">
            <p className="text-gray-500 italic">No posts yet. Be the first to share your F1 story!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all"
              >
                {/* Image Placeholder or Actual Image */}
                <div className="h-52 relative bg-gray-900">
                  {blog.image_path ? (
                    <Image 
                      src={`http://localhost/api/user/uploads/${blog.image_path}`} 
                      alt={blog.title} 
                      fill 
                      unoptimized={true}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-white/10 font-black italic text-2xl">MERCEDES F1</div>
                  )}
                </div>

                <div className="p-6">
                  <span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">
                    {new Date(blog.created_at).toLocaleDateString()}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3 line-clamp-1">{blog.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-3 mb-6 leading-relaxed">
                    {blog.content}
                  </p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold">
                        {blog.author_name[0]}
                      </div>
                      <span className="text-xs text-gray-300">By {blog.author_name}</span>
                    </div>
                    <Link 
                        href={`/blog/${blog.id}`}
                        className="text-xs text-blue-500 front-bold hover:underline"
                    >
                        Read More
                    </Link>            
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}


