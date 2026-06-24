'use client';

import React from 'react';
import {
  MapPin,
  Briefcase,
  Calendar,
  DollarSign,
  Clock,
  Users,
  Share2,
  Heart,
  CheckCircle2,
  Building2,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';

export default function JobDetail({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  const jobInfo = [
    { label: "Salary", value: "₹25L - ₹40L PA", icon: DollarSign },
    { label: "Experience", value: "2 - 5 Years", icon: Briefcase },
    { label: "Job Type", value: "Full-time", icon: Clock },
    { label: "Work Mode", value: "Remote", icon: Building2 },
  ];

  return (
    <div className="bg-[#f0f5f9] min-h-screen pb-20">
      {/* Top Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-4 flex items-center justify-between">
          <nav className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <Link href="/">Home</Link>
            <ChevronRight size={10} />
            <Link href="/jobs">Jobs</Link>
            <ChevronRight size={10} />
            <span className="text-blue-600 truncate max-w-[150px]">{title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Column: Job Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[32px] p-8 lg:p-10 shadow-sm border border-slate-100">
              <div className="flex flex-col sm:flex-row items-start gap-8 mb-10">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-3xl border border-slate-100 flex items-center justify-center p-4 shadow-sm">
                  <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/63e1f7c3272d5_microsoft.png" alt="Company" />
                </div>
                <div className="flex-grow">
                  <h1 className="text-2xl lg:text-3xl font-black text-slate-800 mb-2 leading-tight">{title}</h1>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-blue-600 font-bold text-lg">Atlassian</span>
                    <CheckCircle2 size={16} fill="currentColor" className="text-white text-blue-600" />
                    <span className="w-1.5 h-1.5 bg-slate-200 rounded-full mx-1"></span>
                    <span className="text-slate-400 font-bold text-sm">Posted 2 days ago</span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                     <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[11px] font-black uppercase tracking-wider">Engineering</span>
                     <span className="px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-[11px] font-black uppercase tracking-wider">High Growth</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-slate-50">
                 {jobInfo.map((info, i) => (
                   <div key={i}>
                      <div className="flex items-center gap-2 text-slate-400 mb-2">
                         <info.icon size={14} />
                         <span className="text-[10px] font-black uppercase tracking-widest">{info.label}</span>
                      </div>
                      <p className="font-black text-slate-700 text-sm">{info.value}</p>
                   </div>
                 ))}
              </div>

              <div className="pt-10">
                 <h2 className="text-xl font-black text-slate-800 mb-6">Job Description</h2>
                 <div className="prose max-w-none text-slate-600 font-medium leading-relaxed space-y-6">
                    <p>
                      At Atlassian, we're on a mission to help unleash the potential of every team. We're looking for a Full Stack Developer who is passionate about building products that teams love to use. You'll be working on some of our most critical services, impacting millions of users.
                    </p>
                    <h3 className="text-lg font-black text-slate-800">What you'll do:</h3>
                    <ul className="list-disc pl-5 space-y-3">
                      <li>Design, develop, and maintain robust web applications using React and Node.js.</li>
                      <li>Collaborate with cross-functional teams to define and ship new features.</li>
                      <li>Optimize applications for maximum speed and scalability.</li>
                      <li>Write clean, maintainable, and well-tested code.</li>
                    </ul>
                    <h3 className="text-lg font-black text-slate-800">Basic Qualifications:</h3>
                    <ul className="list-disc pl-5 space-y-3">
                      <li>Bachelor's degree in Computer Science or related field.</li>
                      <li>3+ years of experience in full stack development.</li>
                      <li>Proficiency in modern JavaScript/TypeScript, React, and GraphQL.</li>
                      <li>Experience with cloud platforms like AWS or Azure.</li>
                    </ul>
                 </div>
              </div>
            </div>

            <div className="bg-white rounded-[32px] p-8 lg:p-10 shadow-sm border border-slate-100">
               <h2 className="text-xl font-black text-slate-800 mb-6">About the Company</h2>
               <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center p-3">
                     <Building2 size={32} className="text-slate-300" />
                  </div>
                  <div>
                     <h3 className="font-black text-slate-800">Atlassian</h3>
                     <p className="text-sm text-slate-400 font-bold">Unleashing the potential in every team.</p>
                  </div>
               </div>
               <p className="text-slate-600 font-medium leading-relaxed mb-8">
                 Atlassian provides tools like Jira, Confluence, and Trello that help teams around the world stay organized and efficient. We're a global company with a focus on innovation and culture.
               </p>
               <button className="flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-widest hover:gap-3 transition-all">
                  Visit Website <ExternalLink size={14} />
               </button>
            </div>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 sticky top-24">
               <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Applicants</p>
                    <p className="text-lg font-black text-slate-800">1,250+</p>
                  </div>
                  <div className="flex -space-x-2">
                     {[1,2,3,4].map(i => (
                       <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?u=${i}`} alt="" />
                       </div>
                     ))}
                  </div>
               </div>

               <div className="space-y-4 mb-10">
                  <button className="w-full h-14 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95">
                     Apply Now
                  </button>
                  <button className="w-full h-14 border-2 border-slate-100 text-slate-600 font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-50 transition-all">
                     <Heart size={20} />
                     Save for Later
                  </button>
               </div>

               <div className="space-y-6 pt-8 border-t border-slate-50">
                  <div>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Location</p>
                     <div className="flex items-center gap-2 text-slate-700 font-bold">
                        <MapPin size={16} className="text-slate-400" />
                        Remote, India
                     </div>
                  </div>
                  <div>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Deadline</p>
                     <div className="flex items-center gap-2 text-slate-700 font-bold">
                        <Calendar size={16} className="text-slate-400" />
                        25 Dec 2024
                     </div>
                  </div>
               </div>

               <button className="w-full mt-10 flex items-center justify-center gap-2 text-slate-400 font-bold text-sm hover:text-blue-600 transition-colors">
                  <Share2 size={16} />
                  Share Opportunity
               </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
