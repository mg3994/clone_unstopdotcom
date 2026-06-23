'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import MobileBottomMenu from './MobileBottomMenu';
import { usePathname } from 'next/navigation';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar on route change
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen overflow-hidden bg-[#e5effa]">
      {/* Desktop Sidebar (Permanent) */}
      <Sidebar />

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-[2000] transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <div className={`
        lg:hidden fixed inset-y-0 left-0 w-[280px] bg-white z-[2001] transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
         <div className="p-4 border-b border-slate-200 flex items-center justify-between">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
              alt="Unstop"
              className="h-7 w-auto"
            />
            <button onClick={() => setIsSidebarOpen(false)} className="p-2">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
         </div>
         <div className="overflow-y-auto h-[calc(100%-64px)]">
            {/* We can reuse Sidebar logic here but styled for mobile drawer if needed */}
            <div className="p-4">
               <nav className="flex flex-col gap-2">
                  <Link href="/" className="p-3 hover:bg-blue-50 rounded-lg font-medium">Home</Link>
                  <Link href="/practice" className="p-3 hover:bg-blue-50 rounded-lg font-medium">Practice</Link>
                  <Link href="/internships" className="p-3 hover:bg-blue-50 rounded-lg font-medium">Internships</Link>
                  <Link href="/jobs" className="p-3 hover:bg-blue-50 rounded-lg font-medium">Jobs</Link>
                  <Link href="/competitions" className="p-3 hover:bg-blue-50 rounded-lg font-medium">Competitions</Link>
                  <Link href="/mentor" className="p-3 hover:bg-blue-50 rounded-lg font-medium">Mentorship</Link>
               </nav>
            </div>
         </div>
      </div>

      <div className="flex flex-col flex-1 min-w-0 h-full overflow-hidden relative">
        <TopBar onToggleSidebar={toggleSidebar} />
        <main id="app-main-container" className="flex-1 overflow-y-auto bg-white rounded-tl-[24px] lg:rounded-tl-[32px] shadow-inner">
          {children}
        </main>
        <MobileBottomMenu />
      </div>
    </div>
  );
}

// Small helper to avoid circular imports or missing Link in this context
import Link from 'next/link';
