"use client";

import React from 'react';
import {
  Bell,
  MessageSquare
} from 'lucide-react';
import { useSidebar } from '@/context/SidebarContext';

const personas = [
  {
    id: 'talent',
    name: 'Talent',
    icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-color.svg",
    activeIcon: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-color.svg"
  },
  {
    id: 'mentor',
    name: 'Mentor',
    icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/mentor-color.svg",
    activeIcon: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/mentor-color.svg"
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/recruiter-color.svg",
    activeIcon: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/recruiter-color.svg"
  },
];

const PersonaSidebar = () => {
  const { activePersona, setActivePersona } = useSidebar();

  return (
    <aside className="w-[72px] bg-[var(--color-sidebar-primary-bg)] flex flex-col flex-shrink-0 z-50 border-r border-slate-200/50">
      <div className="flex flex-col items-center pt-4 gap-2">
        {personas.map((persona) => {
          const isActive = activePersona === persona.id;
          return (
            <div key={persona.id} className="relative w-full px-2">
              <button
                onClick={() => setActivePersona(persona.id)}
                className={`relative w-full py-3 flex flex-col items-center gap-1 group transition-all duration-300 rounded-xl ${
                  isActive
                    ? 'bg-white text-[var(--color-primary-700)] shadow-sm'
                    : 'text-slate-500 hover:text-[var(--color-primary-700)] hover:bg-white/50'
                }`}
              >
                {/* Concave cut-out effect - only on active */}
                {isActive && (
                  <>
                    <div className="absolute -top-4 -right-2 w-4 h-4 overflow-hidden pointer-events-none">
                      <div className="w-full h-full rounded-br-full shadow-[4px_4px_0_0_#fff]"></div>
                    </div>
                    <div className="absolute -bottom-4 -right-2 w-4 h-4 overflow-hidden pointer-events-none">
                      <div className="w-full h-full rounded-tr-full shadow-[4px_-4px_0_0_#fff]"></div>
                    </div>
                  </>
                )}

                <div className={`w-6 h-6 transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100'}`}>
                  <img src={persona.icon} alt={persona.name} className="w-full h-full object-contain" />
                </div>
                <span className={`text-[10px] font-bold tracking-tight transition-opacity duration-200 mt-1 ${isActive ? 'opacity-100 text-[#1C4980]' : 'opacity-70 group-hover:opacity-100'}`}>
                  {persona.name}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Footer Actions */}
      <div className="mt-auto flex flex-col items-center gap-5 pb-6">
        <button className="relative text-slate-500 hover:text-[var(--color-primary-700)] transition-colors group">
          <Bell size={22} strokeWidth={1.5} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-[var(--color-sidebar-primary-bg)] group-hover:border-white transition-colors font-bold">3</span>
        </button>
        <button className="text-slate-500 hover:text-[var(--color-primary-700)] transition-colors">
          <MessageSquare size={22} strokeWidth={1.5} />
        </button>
        <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden cursor-pointer hover:border-[var(--color-primary-700)] transition-all duration-200 shadow-sm">
          <img
            src="https://avatar.iran.liara.run/public/boy?username=Jules"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </aside>
  );
};

export default PersonaSidebar;
