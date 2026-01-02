'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, signOut, onAuthStateChange } from '@/lib/auth';
import type { User } from '@supabase/supabase-js';
import Link from 'next/link';

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getCurrentUser().then((user) => {
      setUser(user);
      setLoading(false);
    });

    const { data: { subscription } } = onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await signOut();
    router.refresh();
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b backdrop-blur-sm sticky top-0 z-10" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-semibold tracking-tight">Lumina Forge</div>
            <nav className="flex gap-8 items-center">
              <a href="#" className="relative group transition-colors hover:text-gray-600">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full"></span>
              </a>
              <a href="#" className="relative group transition-colors hover:text-gray-600">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full"></span>
              </a>
              {loading ? (
                <div className="text-gray-400">...</div>
              ) : user ? (
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">{user.email}</span>
                  <button
                    onClick={handleSignOut}
                    className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                  >
                    退出
                  </button>
                </div>
              ) : (
                <Link
                  href="/auth/login"
                  className="px-4 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-colors"
                >
                  登录
                </Link>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center py-20 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">Welcome to Lumina Forge</h1>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
            A minimal content platform for your ideas
          </p>
        </div>

        {/* Content Grid Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[1, 2, 3].map((i) => (
            <div 
              key={i}
              className="p-8 rounded-lg border transition-all hover:shadow-md hover:-translate-y-1"
              style={{ 
                borderColor: 'var(--border)',
                backgroundColor: 'var(--card-bg)'
              }}
            >
              <div className="h-32 flex items-center justify-center text-gray-400">
                <span className="text-4xl font-light">Content {i}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
