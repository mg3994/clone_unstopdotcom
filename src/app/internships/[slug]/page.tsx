'use client';

import React from 'react';
import {
  MapPin,
  Briefcase,
  Calendar,
  Clock,
  Users,
  Share2,
  Heart,
  CheckCircle2,
  Building2,
  ChevronRight,
  Zap,
  GraduationCap
} from 'lucide-react';
import Link from 'next/link';

export default function InternshipDetail({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  const internInfo = [
    { label: "Stipend", value: "₹80,000 /month", icon: Zap },
    { label: "Duration", value: "3 Months", icon: Clock },
    { label: "Eligibility", value: "Students / Freshers", icon: GraduationCap },
    { label: "Work Mode", value: "Hybrid", icon: Building2 },
  ];

  return (
    <div className="bg-[#f0f5f9] min-h-screen pb-20">
      {/* Top Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-4 flex items-center justify-between">
          <nav className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <Link href="/">Home</Link>
            <ChevronRight size={10} />
            <Link href="/internships">Internships</Link>
            <ChevronRight size={10} />
            <span className="text-blue-600 truncate max-w-[150px]">{title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[32px] p-8 lg:p-10 shadow-sm border border-slate-100">
              <div className="flex flex-col sm:flex-row items-start gap-8 mb-10">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-3xl border border-slate-100 flex items-center justify-center p-4 shadow-sm">
                  <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/6928274382f7a_samsung_logo.png" alt="Company" />
                </div>
                <div className="flex-grow">
                  <h1 className="text-2xl lg:text-3xl font-black text-slate-800 mb-2 leading-tight">{title}</h1>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-blue-600 font-bold text-lg">Samsung</span>
                    <CheckCircle2 size={16} fill="currentColor" className="text-white text-blue-600" />
                  </div>

                  <div className="flex flex-wrap gap-3">
                     <span className="px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-[11px] font-black uppercase tracking-wider">Fast-track Hiring</span>
                     <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[11px] font-black uppercase tracking-wider">Engineering</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-slate-50">
                 {internInfo.map((info, i) => (
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
                 <h2 className="text-xl font-black text-slate-800 mb-6">Internship Highlights</h2>
                 <div className="prose max-w-none text-slate-600 font-medium leading-relaxed space-y-6">
                    <p>
                      Join Samsung's world-class engineering team for a summer of innovation and learning. As an intern, you'll contribute to live projects that impact millions of users worldwide.
                    </p>
                    <h3 className="text-lg font-black text-slate-800">Responsibilities:</h3>
                    <ul className="list-disc pl-5 space-y-3">
                      <li>Assist in the development of next-generation mobile applications.</li>
                      <li>Conduct thorough testing and bug fixing.</li>
                      <li>Participate in design reviews and brainstorming sessions.</li>
                      <li>Learn and apply modern software development methodologies.</li>
                    </ul>
                 </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 sticky top-24">
               <div className="mb-8">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Registration Ends In</p>
                  <p className="text-2xl font-black text-red-500">2 Days : 14h : 30m</p>
               </div>

               <button className="w-full h-14 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95 mb-4">
                  Apply Now
               </button>

               <div className="p-4 bg-slate-50 rounded-2xl flex items-center gap-3">
                  <Users size={20} className="text-slate-400" />
                  <p className="text-sm font-bold text-slate-600">850 Students already applied</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
