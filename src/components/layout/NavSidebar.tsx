"use client";

import React, { useState, useRef } from 'react';
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
            { label: "Mock Tests", description: "Practice with real exam scenarios", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mock-tests-new.png", href: "/practice" },
            { label: "Adaptive Practice", description: "Personalized learning paths", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mock-interviews-new.png", href: "/practice" },
            { label: "Skill Assessment", description: "Get certified by experts", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/internships-new.png", href: "/practice" }
          ]
        },
        {
          title: "Coding",
          items: [
            { label: "100 Days of Code", description: "Consistency is key", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/100-days-to-code-new.png", href: "/practice" },
            { label: "Code Editor", description: "Write and run code online", icon: "https://cdn.unstop.com/assets/practice/project.svg", href: "/practice" },
            { label: "Projects", description: "Build real-world projects", icon: "https://cdn.unstop.com/assets/practice/project.svg", href: "/practice" }
          ]
        },
        {
          title: "Quizzes",
          items: [
            { label: "Daily Quiz", description: "Win rewards every day", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/courses-new.png", href: "/practice" },
            { label: "Topic-wise Quiz", description: "Master specific topics", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/courses-new.png", href: "/practice" }
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
            { label: "Government Jobs", description: "Public sector opportunities", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/jobs-new.png", href: "/jobs" },
            { label: "Work from Home", description: "Flexible opportunities", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/jobs-new.png", href: "/jobs" }
          ]
        },
        {
          title: "Internships",
          items: [
            { label: "Paid Internships", description: "Earn while you learn", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/internships-new.png", href: "/internships" },
            { label: "Internships with PPO", description: "Gateway to full-time roles", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/internships-new.png", href: "/internships" },
            { label: "Virtual Internships", description: "Work remotely", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/internships-new.png", href: "/internships" }
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
            { label: "Find a Mentor", description: "Book 1-on-1 sessions", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mentorship-new.png", href: "/mentor" },
            { label: "Mock Interview", description: "Prepare with experts", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mock-interviews-new.png", href: "/mentor" },
            { label: "Career Guidance", description: "Talk to industry leaders", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mentorship-new.png", href: "/mentor" }
          ]
        },
        {
          title: "For Mentors",
          items: [
            { label: "Become a Mentor", description: "Guide the next generation", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mentorship-new.png", href: "/mentor" }
          ]
        }
      ]
    },
    courses: {
      title: "Courses",
      sections: [
        {
          title: "Explore Courses",
          items: [
            { label: "Tech Courses", description: "Master technical skills", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/courses-new.png", href: "/courses" },
            { label: "Non-Tech Courses", description: "Master business skills", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/courses-new.png", href: "/courses" },
            { label: "Free Courses", description: "Learn at no cost", icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/courses-new.png", href: "/courses" }
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
        ${isExpanded ? 'w-[230px]' : 'w-[72px]'}
        border-r border-[#E2E2E2] flex flex-col pt-0 flex-shrink-0 bg-white
        transition-all duration-200 h-full overflow-hidden z-50
      `}>
        {/* Profile Wrapper Section */}
        <div className="profile-wrapper sticky top-0 left-0 z-10 px-3 py-2 bg-white min-h-[64px] max-h-[64px] flex items-center border-b border-[#E2E2E2]">
          <div className="active-profile w-full p-2.5 rounded-xl hover:bg-black/5 transition-all cursor-pointer flex items-center gap-3">
             <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-color.svg" className="w-5 h-5" alt="user" />
             </div>
             {isExpanded && <span className="font-semibold text-[18px] text-[#383838] leading-[130%]">Talent</span>}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-0.5 w-full overflow-y-auto no-scrollbar px-3 flex-grow pb-4 mt-2">
          <div className="nav-group mb-2">
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
                        menu-item h-10 rounded-xl flex items-center transition-all duration-200 group relative
                        ${isExpanded ? 'px-3 gap-2 w-full' : 'justify-center w-10'}
                        ${(isActive || isHovered) ? 'bg-[#DEEDFC] text-[#002C58]' : 'hover:bg-black/5 text-[#383838]'}
                      `}
                      title={isExpanded ? '' : item.label}
                    >
                      <div
                        className={`w-5 h-5 flex-shrink-0 transition-all ${(isActive || isHovered) ? '' : 'opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0'}`}
                        style={{
                          backgroundImage: `url(${iconUrl})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: item.iconPos,
                          backgroundSize: '20px auto'
                        }}
                      />
                      {isExpanded && <span className={`text-[14px] whitespace-nowrap leading-[130%] ${isActive || isHovered ? 'font-medium' : 'font-normal'}`}>{item.label}</span>}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="nav-group">
            {isExpanded && <div className="group-title text-[12px] font-medium text-[#727272] px-3 mb-2">Other</div>}
            <ul className="sidebar-menu m-0 p-0 list-none flex flex-col gap-0.5">
               <li className="relative group">
                  <div className={`menu-item h-10 rounded-xl flex items-center transition-all duration-200 group relative ${isExpanded ? 'px-3 gap-2 w-full' : 'justify-center w-10'} hover:bg-black/5 text-[#383838] cursor-pointer`}>
                    <img src="https://cdn.unstop.com/assets/icons/un_bag_for_business.svg" className="w-5 h-5 opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0" alt="" />
                    {isExpanded && <span className="text-[14px] font-normal">For Business</span>}
                  </div>
               </li>
            </ul>
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
