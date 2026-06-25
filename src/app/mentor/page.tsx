'use client';

import React from 'react';
import { Star, MessageSquare, Briefcase, Award, Search, Filter } from 'lucide-react';
import { PageHeader } from '@/components/shared/ListingComponents';

const mentors = [
  {
    name: "Anish Kumar",
    role: "SDE 3 @ Google",
    rating: "5.0",
    sessions: "150+",
    price: "Free",
    image: "https://d8it4huxumps7.cloudfront.net/uploads/images/63f47e30d7b27_anish.png",
    skills: ["DSA", "System Design", "Backend"]
  },
  {
    name: "Priya Singh",
    role: "Product Manager @ Amazon",
    rating: "4.9",
    sessions: "280+",
    price: "₹499",
    image: "https://d8it4huxumps7.cloudfront.net/uploads/images/63f47e30d7b27_anish.png",
    skills: ["Product Strategy", "Growth", "Case Study"]
  },
  {
    name: "Rahul Sharma",
    role: "Data Scientist @ Meta",
    rating: "5.0",
    sessions: "95+",
    price: "Free",
    image: "https://d8it4huxumps7.cloudfront.net/uploads/images/63f47e30d7b27_anish.png",
    skills: ["Machine Learning", "Python", "SQL"]
  },
  {
    name: "Sneha Patel",
    role: "UX Lead @ Microsoft",
    rating: "4.8",
    sessions: "120+",
    price: "₹299",
    image: "https://d8it4huxumps7.cloudfront.net/uploads/images/63f47e30d7b27_anish.png",
    skills: ["UI/UX Design", "Figma", "Research"]
  },
];

export default function MentorPage() {
  const [search, setSearch] = React.useState("");

  const filteredMentors = mentors.filter(mentor =>
    mentor.name.toLowerCase().includes(search.toLowerCase()) ||
    mentor.role.toLowerCase().includes(search.toLowerCase()) ||
    mentor.skills.some(skill => skill.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#F0F5F9]">
      <PageHeader
        title="Mentorship"
        description="Book 1:1 mentorship sessions with top industry professionals to accelerate your career growth."
        stats={[
          { label: "Top Mentors", value: "2,000+" },
          { label: "Sessions Hosted", value: "50,000+" }
        ]}
      />

      <div className="max-w-[1440px] mx-auto w-full px-4 lg:px-10 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
           <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search mentors by name, company or skills..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-14 bg-white border border-slate-200 rounded-2xl pl-12 pr-4 text-[15px] focus:outline-none focus:border-blue-500 font-medium shadow-sm"
              />
           </div>
           <button className="h-14 px-8 bg-white border border-slate-200 rounded-2xl flex items-center gap-2 font-bold text-slate-700 hover:bg-slate-50 transition-colors">
              <Filter size={18} />
              Filters
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMentors.length > 0 ? (
            filteredMentors.map((mentor, i) => (
              <div key={i} className="bg-white rounded-3xl border border-slate-100 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all group">
               <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-50">
                    <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-md">
                     <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                        <Star size={14} fill="currentColor" />
                     </div>
                  </div>
               </div>

               <h3 className="text-lg font-black text-slate-800 mb-1">{mentor.name}</h3>
               <p className="text-[13px] font-bold text-blue-600 mb-4">{mentor.role}</p>

               <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {mentor.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-500 text-[11px] font-bold rounded-full border border-slate-100">
                      {skill}
                    </span>
                  ))}
               </div>

               <div className="w-full pt-6 border-t border-slate-50 flex items-center justify-between mb-6">
                  <div className="text-left">
                     <p className="text-[10px] font-black text-slate-400 uppercase">Rating</p>
                     <div className="flex items-center gap-1">
                        <span className="text-[14px] font-black text-slate-800">{mentor.rating}</span>
                        <Star size={12} className="text-orange-400 fill-current" />
                     </div>
                  </div>
                  <div className="text-right">
                     <p className="text-[10px] font-black text-slate-400 uppercase">Price</p>
                     <span className="text-[14px] font-black text-blue-600">{mentor.price}</span>
                  </div>
               </div>

               <button className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-blue-600 transition-all text-[14px]">
                  Book 1:1 Session
               </button>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-slate-100">
               <p className="text-xl font-black text-slate-800">No mentors found matching "{search}"</p>
               <button onClick={() => setSearch("")} className="mt-4 text-blue-600 font-bold hover:underline">Clear search</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
