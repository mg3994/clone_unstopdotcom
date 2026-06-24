import React from 'react';
import { Search, Menu } from 'lucide-react';
import Link from 'next/link';

interface TopBarProps {
  onToggleSidebar?: () => void;
}

const TopBar = ({ onToggleSidebar }: TopBarProps) => {
  return (
    <header className="h-[72px] bg-white border-b border-slate-100 flex items-center px-4 lg:px-8 sticky top-0 z-[999] w-full">
      <div className="flex items-center justify-between w-full">
        {/* Left Section: Logo & Toggle */}
        <div className="flex items-center gap-4">
           <button
             onClick={onToggleSidebar}
             id="mobile-menu-toggle"
             className="lg:hidden p-2 hover:bg-slate-50 rounded-lg transition-colors"
             aria-label="Open Menu"
           >
              <Menu size={24} className="text-slate-500" />
           </button>

           <Link href="/" className="flex items-center">
             <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
              alt="Unstop"
              className="h-[34px] w-auto cursor-pointer"
            />
           </Link>
        </div>

        {/* Middle Section: Search */}
        <div className="hidden lg:flex flex-grow max-w-[560px] mx-10 relative">
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500">
            <Search size={16} strokeWidth={2.5} />
          </div>
          <input
            type="text"
            placeholder="Search Opportunities"
            className="w-full h-[44px] bg-[#f0f5f9] border border-transparent rounded-full pl-12 pr-6 text-[14px] focus:outline-none focus:bg-white focus:border-blue-500 transition-all placeholder:text-slate-500 font-semibold"
          />
        </div>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-3 lg:gap-5">
          <Link href="/auth/login" className="hidden sm:flex px-8 h-[40px] bg-[#0073e6] text-white rounded-[10px] text-[15px] font-bold hover:bg-blue-700 transition-colors items-center justify-center">
            Login
          </Link>

          <button className="flex items-center gap-2 px-5 h-[42px] bg-[#f0f5f9] border border-[#0073e6] text-[#0073e6] rounded-full text-[14px] font-bold hover:bg-blue-50 transition-colors whitespace-nowrap">
            <img src="https://cdn.unstop.com/assets/icons/un_bag_for_business.svg" className="w-[18px] h-[18px]" alt="Business" />
            <span className="hidden xs:inline">For Business</span>
          </button>

          {/* Mobile Search Icon */}
          <div className="lg:hidden p-2 text-slate-600">
             <Search size={22} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
