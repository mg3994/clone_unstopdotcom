"use client";

import React from 'react';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0F5F9] p-4">
      <div className="w-full max-w-[1000px] bg-white rounded-[40px] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
        {/* Left */}
        <div className="lg:w-1/2 bg-slate-900 p-10 lg:p-16 text-white flex flex-col justify-between">
           <div>
              <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo-white.svg" className="h-10 mb-12" alt="Unstop" />
              <h1 className="text-4xl font-black mb-6">Create Your <span className="text-blue-400">Account</span></h1>
              <p className="text-slate-400 font-bold">Start your journey with the world's most innovative platform for students and recruiters.</p>
           </div>

           <div className="grid grid-cols-1 gap-6">
              {[
                { title: "Compete", desc: "Showcase your skills" },
                { title: "Get Hired", desc: "At top-tier companies" }
              ].map(item => (
                <div key={item.title} className="flex items-center gap-4 p-5 bg-white/5 rounded-3xl border border-white/10">
                   <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-sm" />
                   </div>
                   <div>
                      <p className="font-black text-sm">{item.title}</p>
                      <p className="text-xs font-bold text-slate-500">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Right */}
        <div className="lg:w-1/2 p-10 lg:p-16">
           <div className="max-w-sm mx-auto">
              <h2 className="text-3xl font-black text-slate-800 mb-2">Register</h2>
              <p className="text-slate-500 font-bold text-sm mb-10">Already have an account? <Link href="/auth/login" className="text-blue-600">Login</Link></p>

              <form className="space-y-5">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">First Name</label>
                       <input type="text" className="w-full h-14 bg-slate-50 rounded-2xl px-6 font-bold text-slate-800 outline-none focus:bg-white border-2 border-transparent focus:border-blue-600" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Last Name</label>
                       <input type="text" className="w-full h-14 bg-slate-50 rounded-2xl px-6 font-bold text-slate-800 outline-none focus:bg-white border-2 border-transparent focus:border-blue-600" />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input type="email" className="w-full h-14 bg-slate-50 rounded-2xl px-6 font-bold text-slate-800 outline-none focus:bg-white border-2 border-transparent focus:border-blue-600" />
                 </div>

                 <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Password</label>
                    <input type="password" className="w-full h-14 bg-slate-50 rounded-2xl px-6 font-bold text-slate-800 outline-none focus:bg-white border-2 border-transparent focus:border-blue-600" />
                 </div>

                 <button className="w-full h-14 bg-blue-600 text-white font-black rounded-2xl mt-4">Create Account</button>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
}
