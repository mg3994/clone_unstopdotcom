'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import MobileBottomMenu from './MobileBottomMenu';
import Footer from './Footer';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const navItems = [
    { label: 'Home', path: '/', iconPos: '0 0' },
    { label: 'Practice', path: '/practice', iconPos: '0 -34px' },
    { label: 'Internships', path: '/internships', iconPos: '0 -68px' },
    { label: 'Jobs', path: '/jobs', iconPos: '0 -136px' },
    { label: 'Competitions', path: '/competitions', iconPos: '0 -102px' },
    { label: 'Mentorship', path: '/mentor', iconPos: '0 -170px' },
    { label: 'Events', path: '/events', iconPos: '0 -204px' },
    { label: 'Courses', path: '/courses', iconPos: '0 -340px' },
  ];

  const iconUrl = 'https://d8it4huxumps7.cloudfront.net/uploads/images/menu/menu-spirit-icons.svg';

  return (
    <div className="flex h-screen overflow-hidden bg-[#e5effa]">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-[2000] transition-opacity animate-in fade-in duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className={`
        lg:hidden fixed inset-y-0 left-0 w-[300px] bg-white z-[2001] transform transition-transform duration-300 ease-in-out shadow-2xl
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
         <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
              alt="Unstop"
              className="h-7 w-auto"
            />
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 hover:bg-slate-50 rounded-full text-slate-400 transition-colors"
            >
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
         </div>

         <div className="overflow-y-auto h-[calc(100%-73px)] pb-10">
            <div className="p-4 space-y-6">
               <div className="space-y-1">
                 <p className="px-3 text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3">Main Menu</p>
                 <nav className="flex flex-col gap-1">
                    {navItems.map((item) => {
                      const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
                      return (
                        <Link
                          key={item.label}
                          href={item.path}
                          className={`flex items-center gap-4 p-3 rounded-2xl transition-all font-bold text-[15px] ${isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
                        >
                           <div
                              className={`w-6 h-6 flex-shrink-0 ${isActive ? '' : 'opacity-60 grayscale'}`}
                              style={{
                                backgroundImage: `url(${iconUrl})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: item.iconPos,
                                backgroundSize: '24px auto'
                              }}
                           />
                           {item.label}
                        </Link>
                      );
                    })}
                 </nav>
               </div>

               <div className="pt-6 border-t border-slate-100">
                  <p className="px-3 text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">Switch Role</p>
                  <div className="grid grid-cols-1 gap-3">
                     <button className="flex items-center gap-3 p-4 rounded-2xl border-2 border-blue-600 bg-blue-50">
                        <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-color.svg" className="w-6 h-6" alt="" />
                        <span className="font-bold text-blue-700">Talent</span>
                     </button>
                     <button className="flex items-center gap-3 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
                        <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/mentor-color.svg" className="w-6 h-6 grayscale" alt="" />
                        <span className="font-bold text-slate-500">Mentor</span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="flex flex-col flex-1 min-w-0 h-full overflow-hidden relative">
        <TopBar onToggleSidebar={toggleSidebar} />
        <main id="app-main-container" className="flex-1 overflow-y-auto bg-white rounded-tl-[24px] lg:rounded-tl-[32px] shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
          {children}
          <Footer />
        </main>
        <MobileBottomMenu />
      </div>
    </div>
  );
}
