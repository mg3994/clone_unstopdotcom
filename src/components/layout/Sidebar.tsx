"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Plus, Bell, MessageSquare } from 'lucide-react';
import { useSidebar } from '@/context/SidebarContext';
import { AnimatePresence } from 'framer-motion';
import MegaMenu from './mega-menu/MegaMenu';

const personas = [
  { id: 'talent', name: 'Talent', icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-color.svg" },
  { id: 'mentor', name: 'Mentor', icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/mentor-color.svg" },
  { id: 'recruiter', name: 'Recruiter', icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/recruiter-color.svg" },
];

const mainNavItems = [
  { id: 'home', label: 'Home', path: '/', iconPos: '0 0' },
  { id: 'practice', label: 'Practice', path: '/practice', iconPos: '0 -68px', hasMenu: true },
  { id: 'internships', label: 'Internships', path: '/internships', iconPos: '0 -34px' },
  { id: 'jobs', label: 'Jobs', path: '/jobs', iconPos: '0 -68px', hasMenu: true },
  { id: 'competitions', label: 'Competitions', path: '/competitions', iconPos: '0 -102px' },
  { id: 'mentorship', label: 'Mentorship', path: '/mentor', iconPos: '0 -136px', hasMenu: true },
  { id: 'events', label: 'Events', path: '/events', iconPos: '0 -102px' },
  { id: 'courses', label: 'Courses', path: '/courses', iconPos: '0 -170px', hasMenu: true },
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
      }
    ]
  },
  // ... other menu data
};

interface SidebarProps {
  isExpanded: boolean;
}

const Sidebar = ({ isExpanded }: SidebarProps) => {
  const pathname = usePathname();
  const { activePersona, setActivePersona } = useSidebar();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  };

  return (
    <div className="flex h-full relative" onMouseLeave={handleMouseLeave}>
      {/* Primary Sidebar (Rail) */}
      <aside className="w-[72px] bg-[#eff2f6] flex flex-col flex-shrink-0 z-[1001] border-r border-[#E2E2E2] h-full">
        <div className="h-16 px-4 py-3 flex items-center justify-center flex-shrink-0">
          <img src="https://d8it4huxumps7.cloudfront.net/assets/icons/un-logo.svg" alt="Unstop" className="w-8 h-8" />
        </div>
        <ul className="flex flex-col items-center pt-2 gap-1 flex-grow overflow-y-auto no-scrollbar w-full">
          {personas.map((persona) => {
            const isActive = activePersona === persona.id;
            return (
              <li key={persona.id} className="relative w-full">
                <button
                  onClick={() => setActivePersona(persona.id)}
                  className={`relative w-[calc(100%-12px)] ml-auto py-3 flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? 'bg-white text-[#1C4980] rounded-tl-2xl rounded-bl-2xl concave-active' : 'text-[#383838] hover:bg-black/5 rounded-xl mr-1.5'}`}
                >
                  <div className={`w-6 h-6 ${isActive ? 'scale-110' : 'opacity-70 grayscale'}`}>
                    <img src={persona.icon} alt={persona.name} className="w-full h-full object-contain" />
                  </div>
                  <span className={`text-[10px] font-bold ${isActive ? '' : 'opacity-70'}`}>{persona.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
        <div className="mt-auto flex flex-col items-center gap-2 pb-4 flex-shrink-0 w-full px-2">
           <button className="w-full py-2 flex flex-col items-center hover:bg-black/5 rounded-xl group relative">
             <div className="relative">
                <Bell size={24} strokeWidth={1.5} className="opacity-70" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D63500] text-white text-[9px] flex items-center justify-center rounded-full border-2 border-[#eff2f6] font-black">3</span>
             </div>
             <span className="text-[10px] font-bold opacity-70">Inbox</span>
           </button>
           <button className="w-full py-2 flex flex-col items-center hover:bg-black/5 rounded-xl">
             <MessageSquare size={24} strokeWidth={1.5} className="opacity-70" />
             <span className="text-[10px] font-bold opacity-70">Chat</span>
           </button>
           <div className="mt-2 w-10 h-10 rounded-full border border-[#E2E2E2] overflow-hidden">
             <img src="https://avatar.iran.liara.run/public/boy?username=Jules" alt="User" className="w-full h-full object-cover" />
           </div>
        </div>
      </aside>

      {/* Navigation Sidebar (Panel) */}
      <nav className={`${isExpanded ? 'w-[230px]' : 'w-[72px]'} border-r border-[#E2E2E2] flex flex-col pt-0 flex-shrink-0 bg-white transition-all duration-200 h-full overflow-hidden z-[1000]`}>
        <div className="profile-wrapper sticky top-0 left-0 z-10 px-4 py-3 bg-white min-h-[64px] max-h-[64px] flex items-center border-b border-[#E2E2E2]">
          <div className="active-profile w-full p-2 rounded-xl hover:bg-black/5 transition-all cursor-pointer flex items-center gap-3">
             <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white rounded-xl border border-[#E2E2E2] shadow-sm">
                <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-color.svg" className="w-5 h-5" alt="user" />
             </div>
             {isExpanded && <span className="font-semibold text-[18px] text-[#383838]">Talent</span>}
          </div>
        </div>

        <div className="flex flex-col gap-0.5 w-full overflow-y-auto no-scrollbar px-3 flex-grow pb-4 mt-2">
          {isExpanded && (
            <div className="workspace-header flex items-center justify-between px-3 py-2 mb-1">
               <span className="text-[12px] font-black uppercase tracking-[0.1em] text-[#727272]">Workspace</span>
               <button className="w-8 h-8 flex items-center justify-center bg-[#0073E6] text-white rounded-full shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">
                  <Plus size={18} strokeWidth={3} />
               </button>
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
                    className={`menu-item h-10 rounded-xl flex items-center transition-all duration-200 ${isExpanded ? 'px-3 gap-2 w-full' : 'justify-center w-10 mx-auto'} ${(isActive || isHovered) ? 'bg-[#DEEDFC] text-[#002C58]' : 'hover:bg-black/5 text-[#383838]'}`}
                  >
                    <div
                      className={`w-5 h-5 flex-shrink-0 transition-all ${(isActive || isHovered) ? '' : 'opacity-70 grayscale'}`}
                      style={{
                        backgroundImage: `url(https://d8it4huxumps7.cloudfront.net/uploads/images/66fe39b03a78d_mobile_menu_spirit_icons.svg)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: item.iconPos,
                        backgroundSize: '24px auto'
                      }}
                    />
                    {isExpanded && <span className={`text-[14px] whitespace-nowrap ${isActive || isHovered ? 'font-medium' : 'font-normal'}`}>{item.label}</span>}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="nav-group border-t border-slate-100 pt-4 mt-2">
            {isExpanded && <div className="group-title text-[12px] font-medium text-[#727272] px-3 mb-2">Other</div>}
            <div className={`menu-item h-10 rounded-xl flex items-center transition-all duration-200 ${isExpanded ? 'px-3 gap-2 w-full' : 'justify-center w-10 mx-auto'} hover:bg-black/5 text-[#383838] cursor-pointer`}>
              <img src="https://cdn.unstop.com/assets/icons/un_bag_for_business.svg" className="w-5 h-5 opacity-70 grayscale" alt="" />
              {isExpanded && <span className="text-[14px] font-normal">For Business</span>}
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {activeMenu && menuData[activeMenu] && (
          <div onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}>
            <MegaMenu id={activeMenu} data={menuData[activeMenu]} isVisible={true} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
