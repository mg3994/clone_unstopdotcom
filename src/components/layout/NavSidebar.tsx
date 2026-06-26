"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import MegaMenu from './mega-menu/MegaMenu';
import { Plus } from 'lucide-react';
import { useSidebar } from '@/context/SidebarContext';

interface NavSidebarProps {
  isExpanded: boolean;
}

const personas = {
  talent: { name: 'Talent', icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-color.svg" },
  mentor: { name: 'Mentor', icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/mentor-color.svg" },
  recruiter: { name: 'Recruiter', icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/recruiter-color.svg" },
};

const NavSidebar = ({ isExpanded }: NavSidebarProps) => {
  const pathname = usePathname();
  const { activePersona } = useSidebar();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentPersona = personas[activePersona as keyof typeof personas] || personas.talent;

  // Exact icon positions from Unstop's sprite sheet (34px steps)
  const mainNavItems = [
    { id: 'home', label: 'Home', path: '/', iconPos: '0 0' },
    { id: 'practice', label: 'Practice', path: '/practice', iconPos: '0 -136px', hasMenu: true },
    { id: 'competitions', label: 'Compete', path: '/competitions', iconPos: '0 -102px' },
    { id: 'mentorship', label: 'Mentorship', path: '/mentor', iconPos: '0 -170px', hasMenu: true },
    { id: 'jobs', label: 'Jobs', path: '/jobs', iconPos: '0 -68px', hasMenu: true },
    { id: 'internships', label: 'Internships', path: '/internships', iconPos: '0 -34px' },
    { id: 'courses', label: 'Courses', path: '/courses', iconPos: '0 -204px', hasMenu: true },
  ];

  const menuData: Record<string, any> = {
    practice: {
      title: "Practice",
      sections: [
        {
          title: "Assessments",
          items: [
            { label: "Mock Tests", description: "Practice with real exam scenarios", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mock-tests-new.png", href: "/practice" },
            { label: "Adaptive Practice", description: "Personalized learning paths", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mock-interviews-new.png", href: "/practice" }
          ]
        },
        {
          title: "Coding",
          items: [
            { label: "100 Days of Code", description: "Consistency is key", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/100-days-to-code-new.png", href: "/practice" },
            { label: "Code Editor", description: "Write and run code online", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/coding-practice-new.png", href: "/practice" }
          ]
        }
      ]
    },
    jobs: {
      title: "Jobs",
      sections: [
        {
          title: "Jobs",
          items: [
            { label: "Full Time Jobs", description: "Start your career", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/jobs-new.png", href: "/jobs" },
            { label: "Government Jobs", description: "Public sector opportunities", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/jobs-new.png", href: "/jobs" }
          ]
        }
      ]
    }
  };

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  };

  const iconUrl = 'https://d8it4huxumps7.cloudfront.net/uploads/images/66fe39b03a78d_mobile_menu_spirit_icons.svg';

  return (
    <div
      className="relative flex h-full"
      onMouseLeave={handleMouseLeave}
    >
      <nav className={`
        ${isExpanded ? 'w-[240px]' : 'w-[72px]'}
        border-r border-[#E2E2E2] flex flex-col pt-0 flex-shrink-0 bg-white
        transition-all duration-300 ease-in-out h-full overflow-hidden z-50
      `}>
        {/* Profile Section */}
        <div className="sticky top-0 left-0 z-10 px-4 py-3 bg-white min-h-[64px] max-h-[64px] flex items-center border-b border-[#E2E2E2]">
          <div className="active-profile w-full p-1.5 rounded-xl hover:bg-black/5 transition-all cursor-pointer flex items-center gap-3">
             <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white rounded-xl border border-[#E2E2E2] shadow-sm">
                <img src={currentPersona.icon} className="w-6 h-6" alt="user" />
             </div>
             {isExpanded && (
               <div className="flex flex-col overflow-hidden">
                 <span className="font-bold text-[16px] text-[#383838] leading-tight truncate">{currentPersona.name}</span>
                 <span className="text-[11px] text-[#727272] font-semibold tracking-wide uppercase">Workspace</span>
               </div>
             )}
          </div>
        </div>

        {/* Navigation Content */}
        <div className="flex flex-col gap-0.5 w-full overflow-y-auto no-scrollbar px-3 flex-grow pb-4 mt-2">
          {isExpanded && (
            <div className="workspace-header flex items-center justify-between px-3 py-2 mb-1">
               <span className="text-[11px] font-black uppercase tracking-[0.1em] text-[#727272]">Main Menu</span>
               <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-[#0073E6]">Host</span>
                  <button className="w-8 h-8 flex items-center justify-center bg-[#0073E6] text-white rounded-full shadow-[0_4px_12px_rgba(0,115,230,0.25)] hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200">
                    <Plus size={18} strokeWidth={3} />
                  </button>
               </div>
            </div>
          )}

          <ul className="sidebar-menu m-0 p-0 list-none flex flex-col gap-0.5">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
              const isHovered = activeMenu === item.id;

              return (
                <li key={item.id} className="relative group">
                  <Link
                    href={item.path}
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    className={`
                      menu-item h-10 rounded-xl flex items-center transition-all duration-200
                      ${isExpanded ? 'px-3 gap-3 w-full' : 'justify-center w-11 mx-auto'}
                      ${(isActive || isHovered) ? 'bg-[#DEEDFC] text-[#1C4980]' : 'hover:bg-[#f4f6f9] text-[#383838]'}
                    `}
                  >
                    <div
                      className={`w-6 h-6 flex-shrink-0 transition-all ${(isActive || isHovered) ? 'scale-110' : 'opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0'}`}
                      style={{
                        backgroundImage: `url(${iconUrl})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: item.iconPos,
                        backgroundSize: '24px auto'
                      }}
                    />
                    {isExpanded && <span className={`text-[14px] whitespace-nowrap leading-tight ${isActive || isHovered ? 'font-bold' : 'font-medium'}`}>{item.label}</span>}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="nav-group border-t border-[#E2E2E2] pt-4 mt-4">
            {isExpanded && <div className="group-title text-[11px] font-black uppercase tracking-[0.1em] text-[#727272] px-3 mb-2">Others</div>}
            <div className={`menu-item h-10 rounded-xl flex items-center transition-all duration-200 ${isExpanded ? 'px-3 gap-3 w-full' : 'justify-center w-11 mx-auto'} hover:bg-[#f4f6f9] text-[#383838] cursor-pointer group`}>
              <div className="w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="https://cdn.unstop.com/assets/icons/un_bag_for_business.svg" className="w-5 h-5 opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0" alt="" />
              </div>
              {isExpanded && <span className="text-[14px] font-medium">For Business</span>}
            </div>

            <div className={`menu-item h-10 rounded-xl flex items-center mt-1 transition-all duration-200 ${isExpanded ? 'px-3 gap-3 w-full' : 'justify-center w-11 mx-auto'} hover:bg-[#f4f6f9] text-[#383838] cursor-pointer group`}>
              <div className="w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              {isExpanded && <span className="text-[14px] font-medium">Contact Support</span>}
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {activeMenu && menuData[activeMenu] && (
          <div
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }}
          >
            <MegaMenu
              id={activeMenu}
              data={menuData[activeMenu]}
              isVisible={true}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavSidebar;
