'use client';

import React, { useState } from 'react';
import { PageHeader, FilterSidebar, OpportunityCard } from '@/components/shared/ListingComponents';
import { Filter } from 'lucide-react';

const jobs = [
  {
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/63e1f7c3272d5_microsoft.png",
    title: "Full Stack Developer",
    organization: "Atlassian",
    location: "Remote, India",
    type: "Full-time",
    stipend: "₹25L - ₹40L PA",
    duration: "Permanent",
    postedAgo: "1 day ago",
    views: "25K",
    category: "Engineering",
    isHot: true
  },
  {
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/63e1f7c3272d5_microsoft.png",
    title: "Senior Product Designer",
    organization: "Zomato",
    location: "Gurgaon, India",
    type: "In-office",
    stipend: "₹18L - ₹30L PA",
    duration: "Permanent",
    postedAgo: "3 days ago",
    views: "15K",
    category: "Design",
    isHot: true
  },
  {
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/63e1f7c3272d5_microsoft.png",
    title: "Marketing Manager",
    organization: "Airtel",
    location: "New Delhi, India",
    type: "Hybrid",
    stipend: "₹15L - ₹22L PA",
    duration: "Permanent",
    postedAgo: "1 week ago",
    views: "9K",
    category: "MBA",
    isHot: false
  }
];

export default function JobsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen pb-20 lg:pb-0">
      <PageHeader
        title="Jobs"
        description="Explore full-time career opportunities at top-tier companies."
        stats={[
          { label: "Open Vacancies", value: "12,000+" },
          { label: "Verified Recruiters", value: "2,500+" }
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
                 <h2 className="text-lg lg:text-xl font-black text-slate-800">12,431 Jobs</h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline text-sm text-slate-500 font-bold">Sort by:</span>
                <select className="bg-transparent text-sm font-black text-blue-600 focus:outline-none">
                  <option>Recent</option>
                  <option>Salary: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:gap-5">
              {jobs.map((job, index) => (
                <OpportunityCard key={index} {...job} />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <button className="w-full sm:w-auto px-10 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-2xl font-black hover:bg-blue-50 transition-colors">
                Explore More Jobs
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
