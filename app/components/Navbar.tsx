'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getCurrentUser, onAuthStateChange } from '@/lib/auth';
import type { User } from '@supabase/supabase-js';
import UserDropdown from './UserDropdown';

export default function Navbar() {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

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

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/product', label: 'Product' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="border-b backdrop-blur-sm sticky top-0 z-50 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-semibold tracking-tight hover:text-gray-600 transition-colors">
            Lumina Forge
          </Link>
          <nav className="flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative group transition-colors ${
                  isActive(link.href)
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}
            {loading ? (
              <div className="text-gray-400">...</div>
            ) : user ? (
              <UserDropdown user={user} />
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
  );
}
