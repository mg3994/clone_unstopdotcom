'use client';

import { Trophy, Briefcase, GraduationCap, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Competitions', icon: Trophy, color: 'text-orange-500', bg: 'bg-orange-50' },
  { name: 'Jobs', icon: Briefcase, color: 'text-blue-500', bg: 'bg-blue-50' },
  { name: 'Courses', icon: GraduationCap, color: 'text-purple-500', bg: 'bg-purple-50' },
  { name: 'Coding', icon: Code, color: 'text-green-500', bg: 'bg-green-50' },
];

export default function CategoryGrid() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-gray-900 mb-16 text-center tracking-tight">What are you looking for?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col items-center group border border-transparent hover:border-blue-100"
            >
              <div className={`w-20 h-20 ${cat.bg} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <cat.icon className={`w-10 h-10 ${cat.color}`} />
              </div>
              <span className="font-bold text-lg text-gray-700 group-hover:text-blue-600 transition-colors">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
