'use client';

import React from 'react';
import { PageHeader } from '@/components/shared/ListingComponents';
import { Code, Terminal, Brain, CheckCircle, ChevronRight, Play } from 'lucide-react';

const tracks = [
  { title: "100 Days of Code", icon: Code, color: "text-blue-500", bg: "bg-blue-50", desc: "Master logic building" },
  { title: "Data Structures", icon: Brain, color: "text-purple-500", bg: "bg-purple-50", desc: "Ace technical rounds" },
  { title: "Algorithm Masters", icon: Terminal, color: "text-green-500", bg: "bg-green-50", desc: "Optimize your code" },
  { title: "SQL Practice", icon: CheckCircle, color: "text-orange-500", bg: "bg-orange-50", desc: "Manage databases" },
];

export default function PracticePage() {
  return (
    <div className="flex flex-col min-h-screen pb-20 lg:pb-0 bg-[#F0F5F9]">
      <PageHeader
        title="Practice"
        description="Practice with thousands of coding problems and assessment tests to ace your next interview."
        stats={[
          { label: "Coding Problems", value: "2,000+" },
          { label: "Mock Tests", value: "500+" }
        ]}
      />

      <div className="max-w-[1440px] mx-auto w-full px-4 lg:px-10 py-8">
        <h2 className="text-xl lg:text-2xl font-black text-slate-800 mb-8">Popular Tracks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tracks.map((track) => (
            <div key={track.title} className="bg-white p-6 lg:p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group">
              <div className={`w-14 h-14 ${track.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <track.icon className={`w-7 h-7 ${track.color}`} />
              </div>
              <h3 className="text-lg font-black text-slate-800 mb-2">{track.title}</h3>
              <p className="text-[13px] font-bold text-slate-400 mb-6">{track.desc}</p>
              <div className="flex items-center gap-2 text-blue-600 text-sm font-black group-hover:gap-3 transition-all">
                Practice Now
                <ChevronRight size={18} />
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl lg:text-2xl font-black text-slate-800 mb-8">Preparation Kits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "SDE Kickstart Kit", level: "Beginner", topics: 12, q: 120 },
              { title: "Interview Prep Pro", level: "Advanced", topics: 25, q: 350 }
            ].map((kit, i) => (
              <div key={i} className="bg-white rounded-[32px] border border-slate-100 p-6 lg:p-8 flex flex-col lg:flex-row gap-8 shadow-sm hover:shadow-xl transition-all group cursor-pointer">
                <div className="w-full lg:w-48 aspect-square bg-slate-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                   <Play size={40} className="text-blue-600" />
                   <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-black text-slate-800">{kit.title}</h4>
                    <span className="bg-green-50 text-green-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{kit.level}</span>
                  </div>
                  <p className="text-slate-500 font-bold text-sm mb-8">Comprehensive track covering all the fundamentals needed for top tech companies.</p>
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                    <div className="flex items-center gap-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                      <span>{kit.topics} Topics</span>
                      <span>{kit.q}+ Questions</span>
                    </div>
                    <button className="text-blue-600 font-black text-sm">Start Learning</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
