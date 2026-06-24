"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavSidebarProps {
  isExpanded: boolean;
}

const NavSidebar = ({ isExpanded }: NavSidebarProps) => {
  const pathname = usePathname();

  const mainNavItems = [
    { id: 'home', label: 'Home', path: '/', iconPos: '0 0' },
    { id: 'practice', label: 'Practice', path: '/practice', iconPos: '0 -34px' },
    { id: 'internships', label: 'Internships', path: '/internships', iconPos: '0 -68px' },
    { id: 'jobs', label: 'Jobs', path: '/jobs', iconPos: '0 -136px' },
    { id: 'competitions', label: 'Competitions', path: '/competitions', iconPos: '0 -102px' },
    { id: 'mentorship', label: 'Mentorship', path: '/mentor', iconPos: '0 -170px' },
    { id: 'events', label: 'Events', path: '/events', iconPos: '0 -204px' },
    { id: 'courses', label: 'Courses', path: '/courses', iconPos: '0 -340px' },
  ];

  const iconUrl = 'https://d8it4huxumps7.cloudfront.net/uploads/images/menu/menu-spirit-icons.svg';

  return (
    <nav className={`
      ${isExpanded ? 'w-[200px]' : 'w-[68px]'}
      border-r border-slate-100 flex flex-col pt-2 pb-4 flex-shrink-0 bg-white
      transition-all duration-300 ease-in-out h-full overflow-hidden
    `}>
      {/* Host Button */}
      <div className={`flex items-center px-3 mb-8 mt-4 ${isExpanded ? 'justify-start' : 'justify-center'}`}>
         <div className={`
           h-11 bg-[#0073e6] rounded-2xl flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition-all shadow-lg shadow-blue-100/50
           ${isExpanded ? 'w-full gap-3 px-4' : 'w-11'}
         `}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            {isExpanded && <span className="font-black text-sm uppercase tracking-wider">Host</span>}
         </div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col gap-1.5 w-full overflow-y-auto no-scrollbar pb-10 px-3">
        {isExpanded && (
          <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-2">Workspace</p>
        )}
        {mainNavItems.map((item) => {
          const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
          return (
            <Link
              key={item.id}
              href={item.path}
              className={`
                h-11 rounded-2xl flex items-center transition-all duration-200 group relative
                ${isExpanded ? 'px-3 gap-4 w-full' : 'justify-center w-11'}
                ${isActive ? 'bg-blue-50 text-[#0073e6]' : 'hover:bg-slate-50 text-slate-600'}
              `}
              title={isExpanded ? '' : item.label}
            >
              <div
                className={`w-6 h-6 flex-shrink-0 transition-transform group-hover:scale-110 ${isActive ? '' : 'opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0'}`}
                style={{
                  backgroundImage: `url(${iconUrl})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: item.iconPos,
                  backgroundSize: '24px auto'
                }}
              />
              {isExpanded && <span className="font-semibold text-[14px] whitespace-nowrap">{item.label}</span>}

              {isActive && !isExpanded && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-[#0073e6] rounded-l-full" />
              )}
            </Link>
          )
        })}
      </div>

      {/* Search Trigger for small expanded */}
      {!isExpanded && (
        <div className="mt-auto px-3 flex justify-center">
           <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-slate-50 cursor-pointer transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
           </div>
        </div>
      )}
    </nav>
  );
};

export default NavSidebar;
