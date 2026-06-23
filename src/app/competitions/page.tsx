'use client';

import React, { useState } from 'react';
import OpportunityCard, { FilterSidebar, PageHeader } from "@/components/shared/ListingComponents";
import { ChevronDown, Grid, List, Filter } from 'lucide-react';

const ALL_COMPETITIONS = [
  {
    title: "ML Summer School 2024",
    organization: "Amazon",
    location: "Online",
    type: "Workshop",
    registrations: "1.2 Lakh+",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/6928262b69bec_amazon_logo.png",
    category: "Engineering",
    isHot: true
  },
  {
    title: "Google Girl Hackathon 2024",
    organization: "Google",
    location: "Online",
    type: "Hackathon",
    registrations: "85,000+",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/63e1f7c3272d5_microsoft.png",
    category: "Engineering",
    isHot: false
  },
  {
    title: "Samsung E.D.G.E. Season 9",
    organization: "Samsung",
    location: "Hybrid",
    type: "Case Study",
    registrations: "45,000+",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/6928274382f7a_samsung_logo.png",
    category: "MBA",
    isHot: true
  },
  {
    title: "Flipkart GRiD 6.0 - Robotics",
    organization: "Flipkart",
    location: "Bangalore",
    type: "Coding",
    registrations: "2.5 Lakh+",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/692826742f537_flipkar_logo.png",
    category: "Engineering",
    isHot: true
  },
  {
    title: "L'Oréal Brandstorm 2025",
    organization: "L'Oréal",
    location: "Global",
    type: "Case Study",
    registrations: "95,000+",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/692827fc103fa_loreal_logo.png",
    category: "MBA",
    isHot: false
  }
];

export default function CompetitionsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = ALL_COMPETITIONS.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen pb-20 lg:pb-0">
      <PageHeader
        title="Competitions"
        description="Participate in various competitions, hackathons, and quizzes hosted by top brands and universities."
        stats={[
          { label: "Live Competitions", value: "240+" },
          { label: "Prize Money", value: "₹50 Cr+" }
        ]}
      />

      <div className="max-w-[1440px] mx-auto w-full px-4 lg:px-10 py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

          <main className="flex-1">
            <div className="mb-8">
               <input
                 type="text"
                 placeholder="Search by competition name or brand..."
                 className="w-full h-14 bg-white border border-slate-200 rounded-2xl px-6 font-bold text-slate-700 outline-none focus:border-blue-600 transition-all shadow-sm"
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
               />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
              <div className="flex items-center gap-4 self-start sm:self-center overflow-x-auto no-scrollbar w-full sm:w-auto">
                {['All', 'Engineering', 'MBA', 'Design'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`${activeCategory === cat ? 'text-blue-600 border-blue-600' : 'text-slate-400 border-transparent'} font-black text-[12px] lg:text-sm uppercase tracking-wider border-b-2 pb-1 flex-shrink-0 transition-all`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 shadow-sm"
                >
                   <Filter size={18} />
                   Filters
                </button>

                <div className="flex items-center gap-2 bg-white border border-slate-100 rounded-xl px-4 py-2 cursor-pointer hover:bg-slate-50 transition-all shadow-sm">
                   <span className="text-sm font-bold text-slate-600">Recent</span>
                   <ChevronDown className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            </div>

            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 lg:gap-5">
                {filteredItems.map((comp, index) => (
                  <OpportunityCard key={index} {...comp} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                 <img src="https://cdn.unstop.com/assets/illustrations/no-result.svg" className="h-40 mx-auto mb-6" alt="" />
                 <h3 className="text-xl font-black text-slate-800 mb-2">No Competitions Found</h3>
                 <p className="text-slate-500 font-bold">Try adjusting your filters or search term</p>
              </div>
            )}

            <div className="mt-10 flex justify-center">
              <button className="w-full sm:w-auto px-10 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-2xl font-black">
                Load More
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
