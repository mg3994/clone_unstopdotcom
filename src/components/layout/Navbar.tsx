'use client';

import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Practice', href: '/practice' },
    { name: 'Compete', href: '/competitions' },
    { name: 'Mentorship', href: '/mentor' },
    { name: 'Jobs', href: '/job' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-black text-blue-600 tracking-tighter uppercase italic">unstop</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-1.5 w-64 border border-transparent focus-within:border-blue-300 focus-within:bg-white transition-all">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search opportunities"
                className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full outline-none"
              />
            </div>

            <button className="hidden md:flex items-center gap-2 px-6 py-2 text-sm font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg active:scale-95">
              Login
            </button>

            <button className="md:hidden p-2 text-gray-600" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-b border-gray-200 absolute w-full left-0 shadow-xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-base font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl">Login</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
