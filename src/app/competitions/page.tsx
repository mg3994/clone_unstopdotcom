"use client";

import React from 'react';
import OpportunityCard from '@/components/home/OpportunityCard';

const competitionCategories = [
  { label: "All", count: 1240 },
  { label: "Hackathons", count: 320 },
  { label: "Business Case", count: 150 },
  { label: "Quizzes", count: 450 },
  { label: "Coding", count: 210 },
  { label: "Design", count: 110 }
];

const competitions = [
  {
    title: "National Engineering Challenge 2026",
    organization: "Unstop",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/6a2b97761bb8c_Unstop-Logo-Blue-Large.png",
    location: "Online",
    link: "#",
    prizes: "₹ 1,00,000"
  },
  {
    title: "Innovate for Future Hackathon",
    organization: "Microsoft",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6a3a33409bc5d_zycus_infotech_private_limited.png",
    location: "Hyderabad",
    link: "#",
    prizes: "₹ 5,00,000"
  },
  {
    title: "Business Strategy Summit",
    organization: "IIM Ahmedabad",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6a367356c5568_whatsapp_image_2026-06-05_at_23.41.59.jpeg",
    location: "Online",
    link: "#",
    prizes: "Prizes worth ₹ 2 Lakhs"
  },
  {
    title: "Global AI Challenge",
    organization: "Google Cloud",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6a3a3700520e6_zycus_infotech_private_limited.png",
    location: "Online",
    link: "#",
    prizes: "₹ 3,50,000"
  }
];

export default function CompetitionsPage() {
  const [search, setSearch] = React.useState("");
  const filteredCompetitions = competitions.filter(comp =>
    comp.title.toLowerCase().includes(search.toLowerCase()) ||
    comp.organization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pb-20">
      {/* Banner */}
      <section className="px-6 py-10">
        <div className="container-un">
          <div className="bg-[#fff1bf] rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-5xl font-black text-grey-1300 mb-6">Compete with the <br/>Best in the World</h1>
              <p className="text-grey-800 text-lg font-medium leading-relaxed mb-8">
                Showcase your skills, win rewards, and get noticed by top recruiters through national and international competitions.
              </p>
              <button className="bg-blue-700 text-white px-10 py-4 rounded-full font-black text-lg hover:bg-blue-800 transition-all">
                Find Competitions
              </button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
               <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/avif/home_page_card_bg_element.svg" className="w-full max-w-sm opacity-20 absolute" alt="" />
               <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/avif/internships_new.png" className="w-full max-w-xs relative z-10" alt="Competitions" />
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Content */}
      <section className="px-6 py-12">
        <div className="container-un">
          <div className="flex flex-col lg:flex-row gap-12">
             {/* Sidebar Filters */}
             <div className="w-full lg:w-64 flex-shrink-0">
                <div className="bg-white rounded-3xl border border-grey-100 p-6 sticky top-24">
                   <h3 className="text-lg font-black text-grey-1300 mb-6">Categories</h3>
                   <div className="space-y-2">
                      {competitionCategories.map((cat, idx) => (
                        <div key={idx} className={`flex justify-between items-center p-3 rounded-xl cursor-pointer transition-all ${idx === 0 ? 'bg-blue-50 text-blue-700 font-bold' : 'hover:bg-grey-50 text-grey-800 font-medium'}`}>
                           <span>{cat.label}</span>
                           <span className="text-xs opacity-60">({cat.count})</span>
                        </div>
                      ))}
                   </div>

                   <div className="mt-8 pt-8 border-t border-grey-50">
                      <h3 className="text-lg font-black text-grey-1300 mb-6">Status</h3>
                      <div className="space-y-4">
                         {["Open", "Closed", "Ending Soon"].map((status) => (
                           <label key={status} className="flex items-center gap-3 cursor-pointer group">
                              <input type="checkbox" className="w-5 h-5 rounded border-grey-300 text-blue-700 focus:ring-blue-500" />
                              <span className="text-sm font-bold text-grey-800 group-hover:text-blue-700 transition-colors">{status}</span>
                           </label>
                         ))}
                      </div>
                   </div>
                </div>
             </div>

             {/* Competition Grid */}
             <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                   <h2 className="text-2xl font-black text-grey-1300">Trending Competitions</h2>
                   <div className="relative w-full md:w-64">
                      <input
                        type="text"
                        placeholder="Search competitions..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full h-10 pl-4 pr-10 rounded-full border border-grey-200 focus:border-blue-700 outline-none text-sm font-medium"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-grey-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {filteredCompetitions.length > 0 ? (
                     filteredCompetitions.map((comp, idx) => (
                       <OpportunityCard key={idx} {...comp} />
                     ))
                   ) : (
                     <div className="col-span-full py-20 text-center">
                        <p className="text-xl font-bold text-grey-1300">No competitions found matching "{search}"</p>
                        <button onClick={() => setSearch("")} className="mt-4 text-blue-700 font-bold underline">Clear search</button>
                     </div>
                   )}
                </div>

                <div className="mt-16 flex justify-center">
                   <button className="bg-white border-2 border-grey-200 text-grey-800 px-10 py-3 rounded-full font-black hover:border-blue-700 hover:text-blue-700 transition-all">
                      Load More
                   </button>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
