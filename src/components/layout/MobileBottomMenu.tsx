'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileBottomMenu = () => {
  const pathname = usePathname();

  const menuItems = [
    { id: 'Home', label: 'Home', path: '/', position: '0 0' },
    { id: 'Internships', label: 'Internships', path: '/internships', position: '0 -34px' },
    { id: 'Jobs', label: 'Jobs', path: '/jobs', position: '0 -136px' },
    { id: 'Compete', label: 'Compete', path: '/competitions', position: '0 -102px' },
    { id: 'More', label: 'More', path: '/more', position: '0 -170px' },
  ];

  const iconUrl = 'https://d8it4huxumps7.cloudfront.net/uploads/images/menu/menu-spirit-icons.svg';

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full h-[65px] bg-white border-t border-grey-200 z-[1001] flex items-center justify-around px-2 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      {menuItems.map((item) => {
        const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));

        return (
          <Link
            key={item.id}
            href={item.path}
            className="flex flex-col items-center justify-center flex-1 py-1"
          >
            <div
              className={`w-6 h-6 mb-1 ${isActive ? 'filter-none' : 'opacity-60 grayscale'}`}
              style={{
                backgroundImage: `url(${iconUrl})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: item.position,
                backgroundSize: '24px auto'
              }}
            >
            </div>
            <span className={`text-[10px] font-medium ${isActive ? 'text-blue-700' : 'text-grey-1100'}`}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileBottomMenu;
