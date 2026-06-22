'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-white pt-16 pb-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.05] mb-8 tracking-tight">
              Unlock Your <span className="text-blue-600">Potential</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Explore opportunities from across the globe to learn, showcase your skills, and get hired by top companies.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <button className="px-10 py-4 bg-blue-600 text-white font-black rounded-full hover:bg-blue-700 transition shadow-xl shadow-blue-200 active:scale-95">
                Explore Now
              </button>
              <button className="px-10 py-4 bg-white text-blue-600 font-black border-2 border-blue-600 rounded-full hover:bg-blue-50 transition active:scale-95">
                Host Opportunity
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-black text-gray-900">10M+</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Users</p>
              </div>
              <div>
                <p className="text-3xl font-black text-gray-900">50K+</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Opportunities</p>
              </div>
              <div>
                <p className="text-3xl font-black text-gray-900">10K+</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Organizations</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full aspect-square bg-blue-50 rounded-[40px] flex items-center justify-center relative overflow-hidden">
               <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [3, 5, 3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-4/5 h-4/5 bg-blue-600/10 rounded-3xl border-2 border-blue-600/20 absolute -right-8 top-12"
               ></motion.div>
               <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [-3, -5, -3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="w-4/5 h-4/5 bg-white rounded-3xl shadow-2xl border border-gray-100 relative z-10 flex flex-col p-8"
               >
                  <div className="w-1/2 h-6 bg-gray-100 rounded-full mb-6"></div>
                  <div className="w-full h-48 bg-blue-50 rounded-2xl mb-8 flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="w-full h-4 bg-gray-100 rounded-full"></div>
                    <div className="w-3/4 h-4 bg-gray-100 rounded-full"></div>
                    <div className="w-1/2 h-4 bg-gray-100 rounded-full"></div>
                  </div>
                  <div className="mt-auto flex justify-between items-center">
                    <div className="w-32 h-12 bg-blue-600 rounded-2xl"></div>
                    <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                  </div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
