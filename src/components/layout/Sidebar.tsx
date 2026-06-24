"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
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
    <aside className={`bg-white h-screen sticky top-0 flex-shrink-0 z-[1001] flex transition-all duration-300 ${isCollapsed ? 'w-[68px]' : 'w-[128px]'}`}>
      {/* Persona Column */}
      <div className="w-[68px] border-r border-slate-100 flex flex-col items-center py-5 flex-shrink-0">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="mb-8 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors outline-none"
        >
          <img src="https://cdn.unstop.com/assets/icons/squarehalf_dualtone.svg" className={`w-[22px] h-[22px] opacity-70 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} alt="Toggle" />
        </button>

        <div className="flex flex-col items-center gap-8 w-full">
          {/* Talent */}
          <div className="flex flex-col items-center gap-1 cursor-pointer group">
            <div className="w-[42px] h-[42px] rounded-xl bg-white flex items-center justify-center border-2 border-[#0073e6] shadow-sm">
              <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-color.svg" className="w-6 h-6" alt="Talent" />
            </div>
            {!isCollapsed && <span className="text-[10px] font-extrabold text-[#0073e6] uppercase tracking-wider mt-1">Talent</span>}
          </div>

          {/* Mentor */}
          <div className="flex flex-col items-center gap-1 cursor-pointer group opacity-50 hover:opacity-100 transition-all">
            <div className="w-[42px] h-[42px] rounded-xl flex items-center justify-center">
              <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/mentor-color.svg" className="w-6 h-6 grayscale group-hover:grayscale-0" alt="Mentor" />
            </div>
            {!isCollapsed && <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mt-1 group-hover:text-[#0073e6]">Mentor</span>}
          </div>

          {/* Recruiter */}
          <div className="flex flex-col items-center gap-1 cursor-pointer group opacity-50 hover:opacity-100 transition-all">
            <div className="w-[42px] h-[42px] rounded-xl flex items-center justify-center">
              <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/recruiter-color.svg" className="w-6 h-6 grayscale group-hover:grayscale-0" alt="Recruiter" />
            </div>
            {!isCollapsed && <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mt-1 group-hover:text-[#0073e6]">Recruiter</span>}
          </div>
        </div>

        <div className="mt-auto mb-4 cursor-pointer opacity-50 hover:opacity-100 p-2 rounded-lg transition-all">
           <img src="https://cdn.unstop.com/assets/icons/logout_icon.svg" className="w-6 h-6" alt="Logout" />
        </div>
      </div>

      {/* Nav Column */}
      {!isCollapsed && (
        <div className="w-[60px] border-r border-slate-100 flex flex-col items-center pt-2 pb-4 flex-shrink-0 bg-white animate-in slide-in-from-left-2 duration-300">
          <div className="w-10 h-10 bg-[#0073e6] rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100 mb-8 mt-4">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </div>

          <div className="flex flex-col items-center gap-4 w-full overflow-y-auto no-scrollbar pb-10 px-2">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 group ${isActive ? 'bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-slate-50' : 'hover:bg-slate-50'}`}
                  title={item.label}
                >
                  <div
                    className={`w-6 h-6 transition-transform group-hover:scale-105 ${isActive ? '' : 'opacity-50 grayscale'}`}
                    style={{
                      backgroundImage: `url(${iconUrl})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: item.iconPos,
                      backgroundSize: '24px auto'
                    }}
                  />
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
