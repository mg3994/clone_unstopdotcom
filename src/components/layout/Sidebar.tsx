'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { id: 'Home', label: 'Home', path: '/', position: '0 0' },
    { id: 'Internships', label: 'Internships', path: '/internships', position: '0 -34px' },
    { id: 'Jobs', label: 'Jobs', path: '/jobs', position: '0 -136px' },
    { id: 'Competitions', label: 'Competitions', path: '/competitions', position: '0 -102px' },
    { id: 'Mentorship', label: 'Mentorship', path: '/mentor', position: '0 -170px' },
    { id: 'Courses', label: 'Courses', path: '/courses', position: '0 -340px' },
  ];

  const iconUrl = 'https://d8it4huxumps7.cloudfront.net/uploads/images/menu/menu-spirit-icons.svg';

  return (
    <aside className="hidden lg:flex flex-col w-[72px] bg-white border-r border-grey-200 h-screen sticky top-0 flex-shrink-0 z-[1001]">
      <div className="flex flex-col items-center py-4 gap-4 overflow-y-auto no-scrollbar flex-grow">
        <div className="flex flex-col items-center gap-1 mb-4">
           <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center cursor-pointer">
              <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-color.svg" className="w-6 h-6" alt="Talent" />
           </div>
           <span className="text-[10px] font-bold text-blue-700 uppercase tracking-tighter">Talent</span>
        </div>

        <ul className="w-full flex flex-col items-center gap-1 px-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));

            return (
              <li key={item.id} className="w-full">
                <Link
                  href={item.path}
                  className={`flex flex-col items-center justify-center py-3 rounded-xl transition-all duration-200 group ${isActive ? 'bg-blue-50 text-blue-700 shadow-sm' : 'hover:bg-grey-50 text-grey-1100'}`}
                >
                  <div
                    className={`w-6 h-6 mb-1.5 transition-transform group-hover:scale-110 ${isActive ? 'filter-none' : 'opacity-70 grayscale'}`}
                    style={{
                      backgroundImage: `url(${iconUrl})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: item.position,
                      backgroundSize: '24px auto'
                    }}
                  >
                  </div>
                  <span className="text-[10px] text-center font-bold leading-tight px-1 line-clamp-2">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="p-2 border-t border-grey-100 flex flex-col items-center gap-4 py-4">
          <div className="w-10 h-10 rounded-full border border-grey-200 overflow-hidden cursor-pointer hover:border-blue-400 transition-colors">
             <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg" className="w-full h-full object-cover p-1" alt="Profile" />
          </div>
      </div>
    </aside>
  );
};

export default Sidebar;
