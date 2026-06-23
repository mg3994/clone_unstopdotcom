import React from 'react';
import { Search } from 'lucide-react';

const TopBar = () => {
  return (
    <header className="h-16 bg-white border-b border-grey-200 flex items-center px-4 lg:px-10 sticky top-0 z-[999] w-full">
      <div className="flex items-center gap-6 w-full max-w-[1600px] mx-auto">
        <div className="flex items-center gap-4">
           {/* Sidebar toggle button (Mobile/Tablet) */}
           <div className="lg:hidden p-2 bg-blue-100 rounded-full">
              <img src="https://cdn.unstop.com/assets/icons/squarehalf_dualtone.svg" className="w-5 h-5" alt="Toggle" />
           </div>

           <img
            src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
            alt="Unstop"
            className="h-8 w-auto cursor-pointer"
          />
        </div>

        {/* Global Search */}
        <div className="hidden md:flex flex-grow max-w-[500px] relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-700/80">
            <Search size={16} />
          </div>
          <input
            type="text"
            placeholder="Search Opportunities"
            className="w-full h-9 bg-primary-50/50 border border-primary-100 rounded-lg pl-10 pr-4 text-sm focus:outline-none focus:border-blue-700 transition-colors placeholder:text-primary-700/80"
          />
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <button className="flex items-center gap-2 px-4 h-9 bg-blue-100 border border-blue-400 text-primary-700 rounded-full text-xs font-semibold hover:bg-blue-200 transition-colors whitespace-nowrap">
            <img src="https://cdn.unstop.com/assets/icons/un_bag_for_business.svg" className="w-5 h-5" alt="Business" />
            <span>For Business</span>
          </button>

          <div className="md:hidden p-2">
             <Search size={20} className="text-primary-700" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
