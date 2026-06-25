"use client";

import React, { useState } from 'react';
import OpportunityCard, { FilterSidebar, PageHeader } from "@/components/shared/ListingComponents";
import { Filter, Star, Clock, PlayCircle } from 'lucide-react';

const courses = [
  {
    title: "Full Stack Development BootCamp",
    organization: "Unstop",
    location: "Online",
    type: "Certification",
    registrations: "15,000",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg",
    category: "Engineering",
    isHot: true,
    price: "₹4,999",
    duration: "6 Months"
  },
  {
    title: "Advanced Data Structures & Algorithms",
    organization: "Unstop",
    location: "Online",
    type: "Self-Paced",
    registrations: "25,000",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/63e1f7c3272d5_microsoft.png",
    category: "Coding",
    isHot: true,
    price: "₹2,499",
    duration: "3 Months"
  }
];

export default function CoursesPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase()) ||
    course.organization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen pb-20 lg:pb-0">
      <PageHeader
        title="Courses"
        description="Learn new skills with curated courses from industry experts and get certified."
        stats={[
          { label: "Active Courses", value: "500+" },
          { label: "Students", value: "1M+" }
        ]}
      />

      <div className="max-w-[1440px] mx-auto w-full px-4 lg:px-10 py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

          <main className="flex-1">
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses by name or category..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full h-14 bg-white border border-slate-200 rounded-2xl pl-6 pr-12 text-[15px] focus:outline-none focus:border-blue-500 font-medium shadow-sm"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
               <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsFilterOpen(true)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 shadow-sm"
                  >
                     <Filter size={18} />
                  </button>
                  <h2 className="text-lg lg:text-xl font-black text-slate-800">Available Courses</h2>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course, i) => (
                  <div key={i} className="bg-white border border-slate-100 rounded-[24px] overflow-hidden hover:shadow-xl transition-all group">
                   <div className="aspect-video bg-slate-100 relative group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <PlayCircle size={48} className="text-white" />
                      </div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-blue-600 uppercase">
                         {course.category}
                      </div>
                   </div>
                   <div className="p-6">
                      <h3 className="font-black text-lg text-slate-800 mb-2 line-clamp-1">{course.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-slate-500 font-bold mb-6">
                         <div className="flex items-center gap-1">
                            <Star size={14} className="text-orange-400 fill-current" />
                            4.8
                         </div>
                         <div className="flex items-center gap-1">
                            <Clock size={14} />
                            {course.duration}
                         </div>
                      </div>
                      <div className="flex items-center justify-between">
                         <span className="text-xl font-black text-slate-900">{course.price}</span>
                         <button className="px-6 py-3 bg-blue-600 text-white font-black rounded-xl text-sm">Enroll Now</button>
                      </div>
                   </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center bg-white rounded-[32px] border border-slate-100">
                  <p className="text-xl font-black text-slate-800">No courses found matching "{search}"</p>
                  <button onClick={() => setSearch("")} className="mt-4 text-blue-600 font-bold hover:underline">Clear search</button>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
