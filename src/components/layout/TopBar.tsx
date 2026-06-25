"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface TopBarProps {
  onToggleSidebar: () => void;
  isSidebarExpanded: boolean;
}

const mockSearchResults = [
  { title: 'Google SDE Intern', type: 'Job', category: 'Engineering' },
  { title: 'Unstop Engineering Challenge', type: 'Competition', category: 'Coding' },
  { title: '100 Days of Code', type: 'Practice', category: 'Skill' },
  { title: 'Microsoft PM Role', type: 'Job', category: 'Management' },
  { title: 'Flipkart GRiD 6.0', type: 'Competition', category: 'Business' },
];

const TopBar = ({ onToggleSidebar, isSidebarExpanded }: TopBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredResults = searchQuery.length > 0
    ? mockSearchResults.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <div className="flex-grow flex items-center h-16 px-4">
      {/* Sidebar Toggle (Desktop) */}
      <div className="hidden lg:flex mr-4 items-center">
        <button
          onClick={onToggleSidebar}
          aria-label="Toggle Sidebar"
          className="p-2.5 bg-[#DEEDFC] hover:bg-[#BFDCF9] rounded-full transition-all cursor-pointer"
        >
          <img
            src="https://cdn.unstop.com/assets/icons/squarehalf_dualtone.svg"
            className={`w-5 h-5 transition-transform duration-300 ${isSidebarExpanded ? '' : 'scale-x-[-1]'}`}
            alt="Toggle"
          />
        </button>
      </div>

      <div className="flex items-center justify-between w-full">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-3">
           <Link href="/" className="flex items-center">
             <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
              alt="Unstop"
              className="h-8 w-auto cursor-pointer"
            />
           </Link>
        </div>

        {/* Middle Section: Search */}
        <div ref={searchRef} className="hidden lg:flex flex-grow max-w-[500px] mx-4 relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#383838]/90 z-10">
            <Search size={16} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            placeholder="Search Opportunities"
            className="w-full h-10 bg-[#f4f6f9]/50 border border-[#1c4980]/10 rounded-lg pl-10 pr-10 text-[14px] focus:outline-none focus:border-[#0073e6] focus:bg-white transition-all placeholder:text-[#383838]/90 font-normal relative z-10"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#727272] hover:text-black z-10"
            >
              <X size={14} />
            </button>
          )}

          <AnimatePresence>
            {isSearchFocused && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.15)] border border-[#E2E2E2] overflow-hidden z-50"
              >
                {searchQuery.length === 0 ? (
                  <div className="p-4">
                    <p className="text-[12px] font-medium text-[#727272] mb-3 uppercase tracking-wider">Trending Searches</p>
                    <div className="flex flex-wrap gap-2">
                      {['Hackathons', 'Jobs', 'Quizzes', 'Internships'].map((term) => (
                        <button
                          key={term}
                          onClick={() => setSearchQuery(term)}
                          className="px-3 py-1.5 bg-[#f4f6f9] hover:bg-[#DEEDFC] rounded-full text-[13px] text-[#383838] transition-colors"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="py-2">
                    {filteredResults.length > 0 ? (
                      filteredResults.map((result, idx) => (
                        <div key={idx} className="px-4 py-3 hover:bg-black/5 cursor-pointer flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#DEEDFC] rounded-lg flex items-center justify-center text-[#0073e6]">
                              <Search size={14} />
                            </div>
                            <div>
                              <p className="text-[14px] font-medium text-[#383838]">{result.title}</p>
                              <p className="text-[11px] text-[#727272]">{result.type} • {result.category}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-6 text-center">
                        <p className="text-[14px] text-[#727272]">No results found for "{searchQuery}"</p>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
             {/* Host/Business Button */}
             <button className="flex items-center gap-2 px-4 h-10 bg-[#DEEDFC] border border-[#73B2F1] text-[#1C4980] rounded-full text-[14px] font-semibold hover:bg-[#BFDCF9] transition-all whitespace-nowrap">
                <img src="https://cdn.unstop.com/assets/icons/un_bag_for_business.svg" className="w-5 h-5" alt="" />
                <span className="font-normal">For</span> Business
             </button>

             {/* Login Button */}
             <Link href="/auth/login" className="hidden sm:flex px-5 h-10 bg-[#0073e6] text-white rounded-full text-[14px] font-normal hover:bg-[#005CB8] transition-all items-center justify-center">
               Login
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
