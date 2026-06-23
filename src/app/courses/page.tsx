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
              {courses.map((course, i) => (
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
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
