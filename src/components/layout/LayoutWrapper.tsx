"use client";

import React from 'react';
import PersonaSidebar from './PersonaSidebar';
import NavSidebar from './NavSidebar';
import TopBar from './TopBar';
import MobileBottomMenu from './MobileBottomMenu';
import Footer from './Footer';
import { usePathname } from 'next/navigation';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const pathname = usePathname();

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <div className="flex h-screen overflow-hidden bg-[#e5effa] main-wrapper-container">
      {/* Primary Sidebar (Fixed Left Rail) */}
      <div className="hidden lg:block h-full flex-shrink-0 relative z-[1001]">
        <PersonaSidebar />
      </div>

      {/* Navigation & Content Area */}
      <main className="flex-grow max-h-full overflow-hidden w-full">
        <div className="main-content-container relative flex flex-col h-screen overflow-hidden">
          {/* Main Header */}
          <div className="main-header flex items-center bg-white border-b border-[#E2E2E2]">
             <TopBar onToggleSidebar={toggleExpanded} isSidebarExpanded={isExpanded} />
          </div>

          <div className="container-wrapper flex flex-1 overflow-hidden relative">
            {/* Navigation Sidebar */}
            <div className="hidden lg:block h-full flex-shrink-0">
              <NavSidebar isExpanded={isExpanded} />
            </div>

            {/* Actual Page Content */}
            <div id="app-main-container" className="main-content flex-1 overflow-y-auto bg-white relative">
              <div className="min-h-[calc(100vh-64px)]">
                {children}
              </div>
              <Footer />
            </div>
          </div>
        </div>

        <MobileBottomMenu />
      </main>
    </div>
  );
}
