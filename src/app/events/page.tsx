"use client";

import React, { useState } from 'react';
import OpportunityCard, { FilterSidebar, PageHeader } from "@/components/shared/ListingComponents";
import { Search, Calendar, MapPin, Grid, List, Filter } from 'lucide-react';

const events = [
  {
    title: "Unstop Clubverse 2026",
    organization: "Unstop",
    location: "Online",
    type: "Webinar",
    registrations: "45,000+",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg",
    isHot: true
  },
  {
    title: "Tech Career Fair 2024",
    organization: "Global Tech",
    location: "Bangalore",
    type: "Conference",
    registrations: "12,000+",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/63e1f7c3272d5_microsoft.png",
    isHot: false
  },
  {
    title: "Product Summit 2024",
    organization: "Product Folks",
    location: "Mumbai",
    type: "Workshop",
    registrations: "8,500+",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/63e1f7c3272d5_microsoft.png",
    isHot: false
  }
];

export default function EventsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen pb-20 lg:pb-0">
      <PageHeader
        title="Events"
        description="Join workshops, webinars, and conferences to learn from the best and network with industry leaders."
        stats={[
          { label: "Upcoming Events", value: "150+" },
          { label: "Speakers", value: "500+" }
        ]}
      />

      <div className="max-w-[1440px] mx-auto w-full px-4 lg:px-10 py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

          <main className="flex-1">
            <div className="bg-slate-900 rounded-[24px] lg:rounded-[32px] p-6 lg:p-10 mb-10 text-white relative overflow-hidden">
               <div className="relative z-10">
                  <h2 className="text-2xl lg:text-3xl font-black mb-6">Upcoming Global Events</h2>
                  <div className="flex flex-col sm:flex-row gap-6 lg:gap-10">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center">
                           <Calendar className="text-blue-400 w-5 h-5" />
                        </div>
                        <div>
                           <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Next Event</p>
                           <p className="font-bold text-sm lg:text-base">25th Oct, 2024</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-600/20 rounded-xl flex items-center justify-center">
                           <MapPin className="text-red-400 w-5 h-5" />
                        </div>
                        <div>
                           <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Location</p>
                           <p className="font-bold text-sm lg:text-base">Virtual & On-site</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-600/20 to-transparent" />
            </div>

            <div className="flex items-center justify-between mb-8">
               <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsFilterOpen(true)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 shadow-sm"
                  >
                     <Filter size={18} />
                  </button>
                  <h2 className="text-lg lg:text-xl font-black text-slate-800">Discover Events</h2>
               </div>
               <div className="flex items-center gap-2">
                  <button className="p-2 bg-slate-100 rounded-lg text-blue-600"><List size={18}/></button>
                  <button className="p-2 text-slate-400"><Grid size={18}/></button>
               </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:gap-5">
              {events.map((event, index) => (
                <OpportunityCard key={index} {...event} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
