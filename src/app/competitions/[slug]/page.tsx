'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Users,
  Calendar,
  Share2,
  Award,
  Briefcase,
  Info,
  ChevronRight,
  Clock,
  Globe,
  Trophy,
  CheckCircle2,
  Heart,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';

export default function CompetitionDetail({ params }: { params: { slug: string } }) {
  const [activeTab, setActiveTab] = useState('description');
  const slug = params.slug;
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  const stats = [
    { label: "Registered", value: "1,24,532", icon: Users },
    { label: "Impressions", value: "5.2 Lakh+", icon: Globe },
    { label: "Days Left", value: "12 Days", icon: Clock },
    { label: "Team Size", value: "1 - 3 Members", icon: Users },
  ];

  return (
    <div className="bg-[#f0f5f9] min-h-screen pb-20">
      {/* Top Breadcrumb & Actions */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-4 flex items-center justify-between">
          <nav className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <Link href="/">Home</Link>
            <ChevronRight size={10} />
            <Link href="/competitions">Competitions</Link>
            <ChevronRight size={10} />
            <span className="text-blue-600 truncate max-w-[100px] sm:max-w-none">{title}</span>
          </nav>
          <div className="flex items-center gap-4">
             <button className="p-2 hover:bg-slate-50 rounded-full text-slate-400 transition-colors">
                <Heart size={20} />
             </button>
             <button className="p-2 hover:bg-slate-50 rounded-full text-slate-400 transition-colors">
                <Share2 size={20} />
             </button>
          </div>
        </div>
      </div>

      {/* Main Banner Section */}
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-8">
        <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-100">
          <div className="h-48 sm:h-64 bg-gradient-to-r from-blue-600 to-indigo-700 relative">
             {/* Decorative Elements */}
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Trophy size={160} className="text-white" />
             </div>
             <div className="absolute bottom-6 left-8 bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-white text-[10px] font-black uppercase tracking-widest border border-white/20">
                Engineering
             </div>
          </div>

          <div className="p-6 lg:p-10 flex flex-col lg:flex-row gap-8 lg:items-end">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-3xl border-4 border-white shadow-xl -mt-20 sm:-mt-24 flex items-center justify-center overflow-hidden flex-shrink-0 relative z-10">
               <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/6928262b69bec_amazon_logo.png" className="w-full h-full object-contain p-4" alt="Logo" />
            </div>

            <div className="flex-grow">
              <h1 className="text-2xl lg:text-4xl font-black text-slate-800 mb-2 leading-tight">{title}</h1>
              <p className="text-blue-600 font-bold text-lg mb-6 flex items-center gap-2">
                Amazon <CheckCircle2 size={18} fill="currentColor" className="text-white" />
              </p>

              <div className="grid grid-cols-2 md:flex flex-wrap gap-4 lg:gap-8">
                 {stats.map((stat, i) => (
                   <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                         <stat.icon size={20} />
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{stat.label}</p>
                         <p className="text-sm font-black text-slate-700">{stat.value}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 min-w-[200px]">
               <button className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95 text-[15px]">
                  Register Now
               </button>
               <p className="text-center text-[11px] font-black text-slate-400 uppercase tracking-widest">Free Registration</p>
            </div>
          </div>
        </div>

        {/* Content Tabs & Sidebar */}
        <div className="grid lg:grid-cols-3 gap-8 mt-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-100">
               <div className="flex border-b border-slate-100 px-6 lg:px-10">
                  {['description', 'timeline', 'rewards'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-6 font-black text-[13px] uppercase tracking-wider transition-all relative ${activeTab === tab ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      {tab}
                      {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-full" />}
                    </button>
                  ))}
               </div>

               <div className="p-8 lg:p-12">
                  {activeTab === 'description' && (
                    <div className="prose max-w-none text-slate-600 font-medium leading-relaxed space-y-6">
                      <h3 className="text-2xl font-black text-slate-800">About the Opportunity</h3>
                      <p>
                        Amazon is back with its annual ML Summer School, a program designed to provide students with the opportunity to learn from the best ML scientists at Amazon. This year, we're taking things to the next level with a comprehensive curriculum covering deep learning, natural language processing, and computer vision.
                      </p>
                      <h4 className="text-xl font-black text-slate-800">What to expect:</h4>
                      <ul className="list-disc pl-5 space-y-3">
                        <li>Intensive learning sessions with Amazon scientists</li>
                        <li>Hands-on projects using real-world datasets</li>
                        <li>Networking opportunities with tech leaders</li>
                        <li>Potential interview opportunities for ML roles at Amazon</li>
                      </ul>
                      <p>
                        The program is open to students currently pursuing their B.Tech/M.Tech/Ph.D. in Computer Science or related fields.
                      </p>
                    </div>
                  )}

                  {activeTab === 'timeline' && (
                    <div className="space-y-8">
                       <h3 className="text-2xl font-black text-slate-800 mb-8">Important Dates</h3>
                       {[
                         { date: "15 Oct '24", event: "Registration Opens", desc: "Start applying for the summer school" },
                         { date: "10 Nov '24", event: "Registration Deadline", desc: "Applications close at 11:59 PM IST" },
                         { date: "20 Nov '24", event: "Selection Announcement", desc: "Shortlisted candidates will be notified" },
                         { date: "01 Dec '24", event: "Program Commencement", desc: "Orientation and first session" }
                       ].map((item, i) => (
                         <div key={i} className="flex gap-6 items-start">
                            <div className="w-24 flex-shrink-0">
                               <p className="text-sm font-black text-blue-600">{item.date}</p>
                            </div>
                            <div className="flex-grow pt-1 pb-8 border-l-2 border-slate-100 pl-8 relative">
                               <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-blue-600" />
                               <h4 className="font-black text-slate-800 mb-1">{item.event}</h4>
                               <p className="text-sm text-slate-400 font-bold">{item.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                  )}

                  {activeTab === 'rewards' && (
                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="bg-orange-50 border border-orange-100 p-8 rounded-3xl">
                          <Trophy size={40} className="text-orange-500 mb-6" />
                          <h4 className="text-xl font-black text-orange-900 mb-2">Cash Prizes</h4>
                          <p className="text-orange-700 font-bold mb-6">Total prize pool of ₹5,00,000 for top performing students.</p>
                          <div className="flex items-center gap-2 text-xs font-black text-orange-800 uppercase tracking-widest">
                             <CheckCircle2 size={14} />
                             Direct Entry to ML Challenge
                          </div>
                       </div>
                       <div className="bg-blue-50 border border-blue-100 p-8 rounded-3xl">
                          <Award size={40} className="text-blue-500 mb-6" />
                          <h4 className="text-xl font-black text-blue-900 mb-2">Certification</h4>
                          <p className="text-blue-700 font-bold mb-6">Recognized certificate from Amazon upon successful completion.</p>
                          <div className="flex items-center gap-2 text-xs font-black text-blue-800 uppercase tracking-widest">
                             <CheckCircle2 size={14} />
                             LinkedIn Badge
                          </div>
                       </div>
                    </div>
                  )}
               </div>
            </div>

            <div className="bg-white rounded-[32px] p-8 lg:p-10 shadow-sm border border-slate-100 flex items-center justify-between">
               <div>
                  <h3 className="text-xl font-black text-slate-800 mb-2">Have any questions?</h3>
                  <p className="text-slate-500 font-bold">Connect with the organizers for any queries.</p>
               </div>
               <button className="flex items-center gap-3 px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-2xl font-black hover:bg-blue-50 transition-all">
                  <MessageSquare size={20} />
                  Contact Us
               </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 sticky top-24">
               <h3 className="text-lg font-black text-slate-800 mb-6 uppercase tracking-wider text-[12px]">Eligibility & Criteria</h3>

               <div className="space-y-6">
                  {[
                    { label: "Eligible Degrees", value: "B.Tech, M.Tech, Ph.D." },
                    { label: "Year of Graduation", value: "2024, 2025, 2026" },
                    { label: "Specialization", value: "CS, IT, Data Science" }
                  ].map((item, i) => (
                    <div key={i} className="pb-6 border-b border-slate-50 last:border-0 last:pb-0">
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                       <p className="font-black text-slate-700">{item.value}</p>
                    </div>
                  ))}
               </div>

               <div className="mt-10 p-6 bg-slate-50 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                     <Info size={18} className="text-blue-600" />
                     <span className="text-sm font-black text-slate-800">Registration Details</span>
                  </div>
                  <p className="text-xs font-bold text-slate-500 leading-relaxed mb-4">
                     Shortlisting will be based on academic performance and previous experience in ML.
                  </p>
                  <Link href="/auth/login" className="text-blue-600 text-xs font-black hover:underline uppercase tracking-widest">Login to Apply</Link>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
