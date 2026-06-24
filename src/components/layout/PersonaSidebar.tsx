"use client";

import React from 'react';

interface PersonaSidebarProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const PersonaSidebar = ({ isExpanded, onToggle }: PersonaSidebarProps) => {
  const personas = [
    { id: 'talent', label: 'Talent', icon: 'https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-color.svg', active: true },
    { id: 'mentor', label: 'Mentor', icon: 'https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/mentor-color.svg', active: false },
    { id: 'recruiter', label: 'Recruiter', icon: 'https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/recruiter-color.svg', active: false },
  ];

  return (
    <div className={`
      ${isExpanded ? 'w-[180px]' : 'w-[68px]'}
      border-r border-slate-100 flex flex-col items-center py-5 flex-shrink-0 bg-white h-full
      transition-all duration-300 ease-in-out
    `}>
      <button
        onClick={onToggle}
        className="mb-8 cursor-pointer hover:bg-slate-50 p-2 rounded-xl transition-colors outline-none flex items-center justify-center"
      >
        <img
          src="https://cdn.unstop.com/assets/icons/squarehalf_dualtone.svg"
          className={`w-[22px] h-[22px] opacity-70 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}
          alt="Toggle"
        />
      </button>

      <div className="flex flex-col gap-8 w-full px-3">
        {personas.map((persona) => (
          <div
            key={persona.id}
            className={`
              flex items-center gap-3 cursor-pointer group transition-all
              ${isExpanded ? 'justify-start' : 'justify-center'}
              ${!persona.active ? 'opacity-40 hover:opacity-100' : ''}
            `}
          >
            <div className={`
              w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 flex-shrink-0
              ${persona.active ? 'bg-white border-2 border-[#0073e6] shadow-lg shadow-blue-100' : 'bg-transparent border border-transparent'}
              group-hover:scale-105
            `}>
              <img src={persona.icon} className={`w-6 h-6 ${!persona.active ? 'grayscale' : ''}`} alt={persona.label} />
            </div>
            {isExpanded && (
              <span className={`text-[11px] font-black uppercase tracking-widest transition-colors ${persona.active ? 'text-[#0073e6]' : 'text-slate-500'}`}>
                {persona.label}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className={`mt-auto px-3 w-full flex ${isExpanded ? 'justify-start' : 'justify-center'}`}>
         <div className={`
           h-11 rounded-2xl flex items-center transition-all opacity-40 hover:opacity-100 cursor-pointer
           ${isExpanded ? 'gap-3 px-3 w-full hover:bg-red-50 hover:text-red-600' : 'w-11 justify-center'}
         `}>
            <img src="https://cdn.unstop.com/assets/icons/logout_icon.svg" className="w-6 h-6 flex-shrink-0" alt="Logout" />
            {isExpanded && <span className="text-[11px] font-black uppercase tracking-widest">Logout</span>}
         </div>
      </div>
    </div>
  );
};

export default PersonaSidebar;
