"use client";

import React from 'react';
import OpportunityCard from '@/components/home/OpportunityCard';

const jobFilters = [
  "All", "Full Time", "Internship", "Remote", "Engineering", "Business", "Design"
];

const allJobs = [
  {
    title: "SDE I - Backend",
    organization: "Google",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6a3a33409bc5d_zycus_infotech_private_limited.png",
    location: "Bangalore",
    link: "#",
    prizes: "₹ 25 LPA"
  },
  {
    title: "Product Manager",
    organization: "Microsoft",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/6a2b97761bb8c_Unstop-Logo-Blue-Large.png",
    location: "Hyderabad",
    link: "#",
    prizes: "₹ 30 LPA"
  },
  {
    title: "Frontend Lead",
    organization: "Netflix",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6a3a2c911e0e9_stayvista.jpg",
    location: "Remote",
    link: "#",
    prizes: "₹ 40 LPA"
  },
  {
    title: "UX Designer",
    organization: "Adobe",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6a395591f3d3a_01.jpeg",
    location: "Noida",
    link: "#",
    prizes: "₹ 18 LPA"
  },
  {
    title: "Data Scientist",
    organization: "Meta",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6a3a33409bc5d_zycus_infotech_private_limited.png",
    location: "Mumbai",
    link: "#",
    prizes: "₹ 35 LPA"
  },
  {
    title: "Marketing Lead",
    organization: "Amazon",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/6a2b97761bb8c_Unstop-Logo-Blue-Large.png",
    location: "Bangalore",
    link: "#",
    prizes: "₹ 22 LPA"
  }
];

export default function JobsPage() {
  const [search, setSearch] = React.useState("");
  const filteredJobs = allJobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.organization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pb-20">
      <section className="bg-[#f8faff] py-12 px-6">
        <div className="container-un">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h1 className="text-3xl font-black text-grey-1300 mb-2">Explore Jobs & Internships</h1>
              <p className="text-grey-800 font-medium">Find the perfect role to kickstart or advance your career.</p>
            </div>
            <div className="flex bg-white p-2 rounded-full border border-grey-200 w-full md:w-auto shadow-sm focus-within:border-blue-700 transition-colors">
              <input
                type="text"
                placeholder="Search jobs, companies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-6 py-2 outline-none flex-grow bg-transparent font-medium"
              />
              <button className="bg-blue-700 text-white px-8 py-2 rounded-full font-bold">Search</button>
            </div>
          </div>

          <div className="flex gap-4 mt-10 overflow-x-auto pb-4 no-scrollbar">
            {jobFilters.map((filter, idx) => (
              <button
                key={idx}
                className={`px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all border ${
                  idx === 0 ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-grey-800 border-grey-200 hover:border-blue-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container-un">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, idx) => (
                <OpportunityCard key={idx} {...job} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-xl font-bold text-grey-1300">No jobs found matching "{search}"</p>
                <button onClick={() => setSearch("")} className="mt-4 text-blue-700 font-bold underline">Clear search</button>
              </div>
            )}
          </div>

          <div className="mt-16 text-center">
            <button className="border-2 border-blue-700 text-blue-700 px-12 py-3 rounded-full font-black hover:bg-blue-50 transition-all">
              Load More Jobs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
