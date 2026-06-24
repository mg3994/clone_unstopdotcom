"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import MegaMenu from './mega-menu/MegaMenu';

interface NavSidebarProps {
  isExpanded: boolean;
}

const NavSidebar = ({ isExpanded }: NavSidebarProps) => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const mainNavItems = [
    { id: 'home', label: 'Home', path: '/', iconPos: '0 0' },
    { id: 'practice', label: 'Practice', path: '/practice', iconPos: '0 -34px', hasMenu: true },
    { id: 'internships', label: 'Internships', path: '/internships', iconPos: '0 -68px' },
    { id: 'jobs', label: 'Jobs', path: '/jobs', iconPos: '0 -136px', hasMenu: true },
    { id: 'competitions', label: 'Competitions', path: '/competitions', iconPos: '0 -102px' },
    { id: 'mentorship', label: 'Mentorship', path: '/mentor', iconPos: '0 -170px', hasMenu: true },
    { id: 'events', label: 'Events', path: '/events', iconPos: '0 -204px' },
    { id: 'courses', label: 'Courses', path: '/courses', iconPos: '0 -340px', hasMenu: true },
  ];

  const menuData: Record<string, any> = {
    practice: {
      title: "Practice",
      sections: [
        {
          title: "Assessments",
          items: [
            { label: "Mock Tests", description: "Practice with real exam scenarios", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mock-tests-new.png" },
            { label: "Adaptive Practice", description: "Personalized learning paths", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mock-interviews-new.png" }
          ]
        },
        {
          title: "Coding",
          items: [
            { label: "100 Days of Code", description: "Consistency is key", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/100-days-to-code-new.png" },
            { label: "Code Editor", description: "Write and run code online", icon: "https://cdn.unstop.com/assets/practice/project.svg" }
          ]
        }
      ]
    },
    jobs: {
      title: "Jobs",
      sections: [
        {
          title: "Explore",
          items: [
            { label: "Full Time Jobs", description: "Start your career", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/jobs-new.png" },
            { label: "Government Jobs", description: "Public sector opportunities", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/jobs-new.png" },
            { label: "Internships", description: "Professional experience", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/internships-new.png" }
          ]
        }
      ]
    },
    competitions: {
      title: "Competitions",
      sections: [
        {
          title: "Popular",
          items: [
            { label: "All Competitions", description: "Explore all opportunities", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/competitions-new.png" },
            { label: "Hackathons", description: "Solve real-world problems", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/hackathons-new.png" },
            { label: "Quizzes", description: "Test your knowledge", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/quizzes-new.png" }
          ]
        }
      ]
    },
    mentorship: {
      title: "Mentorship",
      sections: [
        {
          title: "Guidance",
          items: [
            { label: "Find a Mentor", description: "Book 1-on-1 sessions", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mentorship-new.png" },
            { label: "Mock Interview", description: "Prepare with experts", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mock-interviews-new.png" },
            { label: "Become a Mentor", description: "Guide the next generation", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mentorship-new.png" }
          ]
        }
      ]
    },
    courses: {
      title: "Courses",
      sections: [
        {
          title: "Learning",
          items: [
            { label: "Tech Courses", description: "Master technical skills", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/courses-new.png" },
            { label: "Non-Tech Courses", description: "Master business skills", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/courses-new.png" }
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

  const iconUrl = 'https://d8it4huxumps7.cloudfront.net/uploads/images/menu/menu-spirit-icons.svg';

  return (
    <div
      className="relative flex h-full"
      onMouseLeave={handleMouseLeave}
    >
      <nav className={`
        ${isExpanded ? 'w-[200px]' : 'w-[68px]'}
        border-r border-slate-100 flex flex-col pt-2 pb-4 flex-shrink-0 bg-white
        transition-all duration-300 ease-in-out h-full overflow-hidden z-50
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
            const isHovered = activeMenu === item.id;

            return (
              <Link
                key={item.id}
                href={item.path}
                onMouseEnter={() => handleMouseEnter(item.id)}
                className={`
                  h-11 rounded-2xl flex items-center transition-all duration-200 group relative
                  ${isExpanded ? 'px-3 gap-4 w-full' : 'justify-center w-11'}
                  ${(isActive || isHovered) ? 'bg-blue-50 text-[#0073e6]' : 'hover:bg-slate-50 text-slate-600'}
                `}
                title={isExpanded ? '' : item.label}
              >
                <div
                  className={`w-6 h-6 flex-shrink-0 transition-transform group-hover:scale-110 ${(isActive || isHovered) ? '' : 'opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0'}`}
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
