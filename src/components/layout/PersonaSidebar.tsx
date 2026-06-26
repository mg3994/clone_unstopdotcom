"use client";

import React from 'react';
import { Bell, MessageSquare } from 'lucide-react';
import { useSidebar } from '@/context/SidebarContext';
import { motion } from 'framer-motion';

const personas = [
  {
    id: 'talent',
    name: 'Talent',
    icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-color.svg",
  },
  {
    id: 'mentor',
    name: 'Mentor',
    icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/mentor-color.svg",
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/recruiter-color.svg",
  },
];

const PersonaSidebar = () => {
  const { activePersona, setActivePersona } = useSidebar();

  return (
    <aside className="w-[72px] bg-[#eff2f6] flex flex-col flex-shrink-0 z-[1001] h-full relative border-r border-[#E2E2E2]">
      {/* Sidebar Header */}
      <div className="h-16 px-4 py-3 flex items-center justify-center flex-shrink-0">
        <img
          src="https://d8it4huxumps7.cloudfront.net/assets/icons/un-logo.svg"
          alt="Unstop"
          className="w-8 h-8 cursor-pointer"
        />
      </div>

      {/* Persona Rail */}
      <div className="relative flex flex-col items-end pt-2 gap-1 flex-grow overflow-y-auto no-scrollbar w-full">
        {personas.map((persona) => {
          const isActive = activePersona === persona.id;
          return (
            <div key={persona.id} className="relative w-full flex justify-end">
              {isActive && (
                <motion.div
                  layoutId="activePersonaIndicator"
                  className="absolute right-[-1px] top-0 bottom-0 w-[calc(100%-12px)] bg-white rounded-tl-[16px] rounded-bl-[16px] z-0"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                >
                  {/* SVG Top Concave Curve */}
                  <div className="absolute -top-[16px] right-0 w-4 h-4 text-white">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 16C16 7.16344 8.83656 0 0 0H16V16Z" fill="currentColor"/>
                    </svg>
                  </div>
                  {/* SVG Bottom Concave Curve */}
                  <div className="absolute -bottom-[16px] right-0 w-4 h-4 text-white">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 0C16 8.83656 8.83656 16 0 16H16V0Z" fill="currentColor"/>
                    </svg>
                  </div>
                </motion.div>
              )}

              <button
                onClick={() => setActivePersona(persona.id)}
                className={`
                  relative z-10 w-[calc(100%-12px)] py-3 flex flex-col items-center transition-all duration-300
                  ${isActive ? 'text-[#1C4980]' : 'text-[#383838] opacity-70 hover:opacity-100 mr-1.5 hover:bg-black/5 rounded-xl'}
                `}
                aria-label={persona.name}
              >
                <div className={`w-6 h-6 mb-1 transition-transform duration-300 ${isActive ? 'scale-110' : 'grayscale'}`}>
                  <img src={persona.icon} alt={persona.name} className="w-full h-full object-contain" />
                </div>
                <span className={`text-[10px] font-bold tracking-tight`}>
                  {persona.name}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Footer Actions */}
      <div className="mt-auto flex flex-col items-center gap-2 pb-4 flex-shrink-0 w-full">
        <div className="w-full px-2">
           <button className="w-full py-2.5 flex flex-col items-center text-[#383838] hover:bg-black/5 transition-colors rounded-xl group relative">
             <div className="relative">
                <Bell size={24} strokeWidth={1.5} className="opacity-70 group-hover:opacity-100" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D63500] text-white text-[9px] flex items-center justify-center rounded-full border-2 border-[#eff2f6] font-black">3</span>
             </div>
             <span className="text-[10px] font-bold tracking-tight mt-1 opacity-70 group-hover:opacity-100">Inbox</span>
           </button>
        </div>

        <div className="w-full px-2">
          <button className="w-full py-2.5 flex flex-col items-center text-[#383838] hover:bg-black/5 transition-colors rounded-xl group">
            <MessageSquare size={24} strokeWidth={1.5} className="opacity-70 group-hover:opacity-100" />
            <span className="text-[10px] font-bold tracking-tight mt-1 opacity-70 group-hover:opacity-100">Chat</span>
          </button>
        </div>

        <div className="mt-2 px-2">
          <div className="w-10 h-10 rounded-full border border-[#E2E2E2] overflow-hidden cursor-pointer hover:border-[#1C4980] transition-all duration-200">
            <img
              src="https://avatar.iran.liara.run/public/boy?username=Jules"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default PersonaSidebar;
