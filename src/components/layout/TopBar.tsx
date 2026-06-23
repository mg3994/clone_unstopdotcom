import React from 'react';
import { Search, Menu } from 'lucide-react';

interface TopBarProps {
  onToggleSidebar?: () => void;
}

const TopBar = ({ onToggleSidebar }: TopBarProps) => {
  return (
    <header className="h-[72px] bg-white border-b border-slate-200 flex items-center px-4 lg:px-6 sticky top-0 z-[999] w-full">
      <div className="flex items-center justify-between w-full">
        {/* Left Section: Logo & Toggle */}
        <div className="flex items-center gap-3">
           <button
             onClick={onToggleSidebar}
             className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
           >
              <Menu size={24} className="text-slate-600" />
           </button>

           <img
            src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
            alt="Unstop"
            className="h-8 lg:h-9 w-auto cursor-pointer"
          />
        </div>

        {/* Middle Section: Search */}
        <div className="hidden lg:flex flex-grow max-w-[600px] mx-8 relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search Opportunities"
            className="w-full h-[42px] bg-[#f0f5f9] border border-transparent rounded-full pl-12 pr-4 text-[15px] focus:outline-none focus:bg-white focus:border-blue-500 transition-all placeholder:text-slate-500 font-medium"
          />
        </div>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-3 lg:gap-4">
          <button className="hidden sm:block px-6 lg:px-8 h-10 bg-blue-600 text-white rounded-lg text-[15px] font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-100">
            Login
          </button>

          <button className="flex items-center gap-2 px-4 lg:px-5 h-[42px] bg-white border border-blue-600 text-blue-700 rounded-full text-[14px] font-bold hover:bg-blue-50 transition-colors whitespace-nowrap">
            <img src="https://cdn.unstop.com/assets/icons/un_bag_for_business.svg" className="w-5 h-5" alt="Business" />
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
