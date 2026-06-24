"use client";

import { MapPin, Users, Calendar, Filter, Briefcase, Clock, ChevronDown, Star, Eye, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function OpportunityCard({
  title,
  organization,
  company,
  location,
  type,
  registrations,
  views,
  logo,
  stipend,
  duration,
  postedAgo,
  isHot,
  category
}: any) {
  const org = organization || company;
  const secondaryInfo = stipend || (registrations ? `${registrations} Registered` : null);
  const pathname = usePathname();

  // Determine the base route for slug linking
  const getSlugLink = () => {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    if (pathname.includes('/competitions')) return `/competitions/${slug}`;
    if (pathname.includes('/jobs')) return `/jobs/${slug}`;
    if (pathname.includes('/internships')) return `/internships/${slug}`;
    if (pathname.includes('/mentor')) return `/mentor/${slug}`;
    if (pathname.includes('/events')) return `/events/${slug}`;
    if (pathname.includes('/courses')) return `/courses/${slug}`;
    if (pathname.includes('/practice')) return `/practice/${slug}`;
    return '#';
  };

  return (
    <Link href={getSlugLink()} className="bg-white border border-slate-100 rounded-[24px] p-4 lg:p-5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer group flex gap-4 lg:gap-5 items-start relative overflow-hidden">
      {isHot && (
        <div className="absolute top-0 right-0">
          <div className="bg-orange-500 text-white text-[9px] lg:text-[10px] font-black px-3 lg:px-4 py-1 rounded-bl-xl uppercase tracking-wider shadow-sm">
            🔥 Hot
          </div>
        </div>
      )}

      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-xl lg:rounded-2xl flex-shrink-0 border border-slate-100 flex items-center justify-center overflow-hidden shadow-sm">
        {logo ? (
          <img src={logo} alt={org} className="w-full h-full object-contain p-1.5 lg:p-2" />
        ) : (
          <Briefcase className="w-5 h-5 lg:w-6 lg:h-6 text-slate-300" />
        )}
      </div>

      <div className="flex-grow min-w-0">
        <div className="flex flex-col mb-1">
          <h3 className="font-black text-[16px] lg:text-[18px] text-slate-800 group-hover:text-blue-600 transition-colors truncate leading-tight mb-1">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-[13px] lg:text-[14px] font-bold text-slate-600">{org}</p>
            {category && (
               <>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span className="text-[10px] lg:text-[11px] font-black text-blue-600/70 uppercase tracking-tight">{category}</span>
               </>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 lg:gap-x-5 text-[12px] lg:text-[13px] text-slate-500 font-bold mt-3 lg:mt-4">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 lg:w-4 h-4 text-slate-400" />
            {location}
          </div>
          {secondaryInfo && (
            <div className="flex items-center gap-1.5">
              {stipend ? <Briefcase className="w-3.5 h-3.5 lg:w-4 h-4 text-slate-400" /> : <Users className="w-3.5 h-3.5 lg:w-4 h-4 text-slate-400" />}
              <span className="text-slate-700">{secondaryInfo}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-4 lg:mt-5 pt-3 lg:pt-4 border-t border-slate-50">
           <div className="flex items-center gap-3 lg:gap-4">
              <span className="text-[10px] lg:text-[11px] font-black text-slate-400 uppercase tracking-widest">{postedAgo || '2 days left'}</span>
              {views && (
                <div className="flex items-center gap-1 text-[10px] lg:text-[11px] font-black text-slate-400">
                  <Eye size={12} />
                  {views}
                </div>
              )}
           </div>
           <div className="flex items-center gap-2">
              <span className="text-[9px] lg:text-[10px] font-black bg-slate-100 text-slate-500 px-2.5 lg:px-3 py-1 rounded-full uppercase tracking-wider">
                {type}
              </span>
           </div>
        </div>
      </div>
    </Link>
  );
}

export function FilterSidebar({ isOpen, onClose }: { isOpen?: boolean, onClose?: () => void }) {
  const filterGroups = [
    { name: 'Status', options: ['Live', 'Ended', 'Upcoming'] },
    { name: 'Opportunities', options: ['Open for all', 'Engineering', 'MBA', 'Design'] },
    { name: 'Work Mode', options: ['In-Office', 'Remote', 'Hybrid'] }
  ];

  const content = (
    <div className="w-full bg-white lg:border border-slate-100 rounded-[32px] p-6 lg:p-8 h-full lg:h-fit shadow-sm">
      <div className="flex items-center justify-between mb-8 pb-5 border-b border-slate-50">
        <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
           <Filter size={20} className="text-blue-600" />
           Filters
        </h2>
        <div className="flex items-center gap-4">
          <button className="text-blue-600 text-sm font-black hover:underline">Clear All</button>
          <button onClick={onClose} className="lg:hidden p-2 text-slate-400"><X size={24} /></button>
        </div>
      </div>

      <div className="space-y-8 lg:space-y-10">
        {filterGroups.map((group) => (
          <div key={group.name} className="group">
            <div className="flex items-center justify-between mb-4 cursor-pointer">
              <h3 className="font-black text-[14px] text-slate-700 uppercase tracking-wider">{group.name}</h3>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
            <div className="space-y-3 lg:space-y-4">
              {group.options.map((opt) => (
                <label key={opt} className="flex items-center gap-3 cursor-pointer group/label">
                  <input type="checkbox" className="peer hidden" />
                  <div className="w-6 h-6 rounded-lg border-2 border-slate-200 peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all flex items-center justify-center">
                    <svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[14px] lg:text-[15px] text-slate-500 font-bold group-hover/label:text-slate-800 transition-colors">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="lg:hidden mt-10">
         <button onClick={onClose} className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl">Apply Filters</button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block w-[300px] sticky top-24">
        {content}
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed inset-0 z-[3000] transition-transform duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
         <div className="absolute inset-0 bg-black/50" onClick={onClose} />
         <div className="absolute inset-x-0 bottom-0 top-20 bg-white rounded-t-[40px] overflow-y-auto">
            {content}
         </div>
      </div>
    </>
  );
}

export function PageHeader({ title, description, count, stats }: { title: string, description: string, count?: number, stats?: {label: string, value: string}[] }) {
  return (
    <div className="bg-white border-b border-slate-100 mb-6 lg:mb-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-10">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 mb-4 lg:mb-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
               <span>Home</span>
               <ChevronDown size={10} className="-rotate-90" />
               <span className="text-blue-600">{title}</span>
            </nav>
            <h1 className="text-3xl lg:text-6xl font-black text-slate-800 mb-4 lg:mb-6 tracking-tight">{title}</h1>
            <p className="text-slate-500 font-bold text-[15px] lg:text-[19px] leading-relaxed">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:flex gap-3 lg:gap-8">
            {stats ? stats.map((stat, i) => (
              <div key={i} className="bg-[#f8fbff] px-4 lg:px-8 py-4 lg:py-6 rounded-[20px] lg:rounded-[24px] border border-blue-50 text-center lg:text-left min-w-0">
                <p className="text-[18px] lg:text-[24px] font-black text-blue-600 mb-0.5">{stat.value}</p>
                <p className="text-[9px] lg:text-[11px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap overflow-hidden text-ellipsis">{stat.label}</p>
              </div>
            )) : count !== undefined && (
              <div className="bg-[#f8fbff] px-6 py-4 rounded-[20px] border border-blue-50">
                <p className="text-[20px] font-black text-blue-600 mb-0.5">{count}</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Opportunities</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpportunityCard;
