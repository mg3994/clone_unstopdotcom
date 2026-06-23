"use client";

import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0F5F9] p-4">
      <div className="w-full max-w-[1000px] bg-white rounded-[40px] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
        {/* Left: Branding & Info */}
        <div className="lg:w-1/2 bg-blue-600 p-10 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
           <div className="relative z-10">
              <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo-white.svg" className="h-10 mb-12" alt="Unstop" />
              <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">Unlock Your <span className="text-blue-200">Career!</span></h1>
              <p className="text-lg font-bold text-blue-100/80 max-w-md">Join the community of 8M+ students and professionals across the globe.</p>
           </div>

           <div className="mt-12 space-y-6 relative z-10">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-white.svg" className="w-6 h-6" alt="" />
                 </div>
                 <div>
                    <p className="font-black text-sm uppercase tracking-widest">Personalized</p>
                    <p className="text-sm font-bold text-blue-100/60">Opportunity matching for you</p>
                 </div>
              </div>
           </div>

           <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>

        {/* Right: Login Form */}
        <div className="lg:w-1/2 p-10 lg:p-16">
          <div className="max-w-sm mx-auto">
            <h2 className="text-3xl font-black text-slate-800 mb-2">Login</h2>
            <p className="text-slate-500 font-bold text-sm mb-10">New to Unstop? <Link href="/auth/signup" className="text-blue-600">Register</Link></p>

            <form className="space-y-6">
               <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Username or Email</label>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-full h-14 bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl px-6 font-bold text-slate-800 transition-all outline-none"
                  />
               </div>

               <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Password</label>
                    <a href="#" className="text-[11px] font-black text-blue-600 uppercase tracking-widest">Forgot?</a>
                  </div>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full h-14 bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl px-6 font-bold text-slate-800 transition-all outline-none"
                  />
               </div>

               <button className="w-full h-14 bg-blue-600 text-white font-black rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
                  Login to Unstop
               </button>
            </form>

            <div className="my-10 flex items-center gap-4">
               <div className="h-px bg-slate-100 flex-1" />
               <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest">Or login with</span>
               <div className="h-px bg-slate-100 flex-1" />
            </div>

            <div className="grid grid-cols-2 gap-4">
               <button className="h-14 border-2 border-slate-100 rounded-2xl flex items-center justify-center gap-3 font-bold text-slate-600 hover:border-slate-200 transition-all">
                  <img src="https://cdn.unstop.com/assets/icons/google.svg" className="w-5 h-5" alt="Google" />
                  Google
               </button>
               <button className="h-14 border-2 border-slate-100 rounded-2xl flex items-center justify-center gap-3 font-bold text-slate-600 hover:border-slate-200 transition-all">
                  <img src="https://cdn.unstop.com/assets/icons/linkedin.svg" className="w-5 h-5" alt="LinkedIn" />
                  LinkedIn
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
