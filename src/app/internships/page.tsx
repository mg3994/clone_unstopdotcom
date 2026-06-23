'use client';

import React, { useState } from 'react';
import { PageHeader, FilterSidebar, OpportunityCard } from '@/components/shared/ListingComponents';
import { Filter } from 'lucide-react';

const internships = [
  {
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/63e1f7c3272d5_microsoft.png",
    title: "Software Engineering Intern",
    organization: "Microsoft",
    location: "Hyderabad, India",
    type: "In-office",
    stipend: "₹1,00,000 /month",
    duration: "2 Months",
    postedAgo: "2 days ago",
    views: "12K",
    category: "Engineering",
    isHot: true
  },
  {
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/63e1f7c3272d5_microsoft.png",
    title: "Product Management Intern",
    organization: "Google",
    location: "Bangalore, India",
    type: "Remote",
    stipend: "₹80,000 /month",
    duration: "3 Months",
    postedAgo: "5 hours ago",
    views: "5K",
    category: "MBA",
    isHot: false
  },
  {
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/63e1f7c3272d5_microsoft.png",
    title: "Data Science Intern",
    organization: "Amazon",
    location: "Pune, India",
    type: "In-office",
    stipend: "₹60,000 /month",
    duration: "6 Months",
    postedAgo: "1 day ago",
    views: "8K",
    category: "Engineering",
    isHot: true
  }
];

export default function InternshipsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen pb-20 lg:pb-0">
      <PageHeader
        title="Internships"
        description="Find the best internships from top companies and startups."
        stats={[
          { label: "Active Internships", value: "5,000+" },
          { label: "Top Companies", value: "500+" }
        ]}
      />

      <div className="max-w-[1440px] mx-auto w-full px-4 lg:px-10 py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                 <button
                   onClick={() => setIsFilterOpen(true)}
                   className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 shadow-sm"
                 >
                    <Filter size={18} />
                    Filters
                 </button>
                 <h2 className="text-lg lg:text-xl font-black text-slate-800">5,432 Internships</h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline text-sm text-slate-500 font-bold">Sort by:</span>
                <select className="bg-transparent text-sm font-black text-blue-600 focus:outline-none">
                  <option>Recent</option>
                  <option>Popular</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:gap-5">
              {internships.map((internship, index) => (
                <OpportunityCard key={index} {...internship} />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <button className="w-full sm:w-auto px-10 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-2xl font-black hover:bg-blue-50 transition-colors">
                Load More Internships
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
