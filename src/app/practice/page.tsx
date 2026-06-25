import React from 'react';
import PracticeSection from '@/components/PracticeSection';

const practiceCategories = [
  {
    title: "100 Days of Code",
    description: "Master coding with daily challenges for 100 days.",
    img: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/100-days-to-code-new.png",
    color: "bg-blue-50"
  },
  {
    title: "Mock Test",
    description: "Experience real exam scenarios with timed mock tests.",
    img: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mock-tests-new.png",
    color: "bg-yellow-50"
  },
  {
    title: "Company Prep",
    description: "Crack your dream company with tailored preparation.",
    img: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/company-prep-new.png",
    color: "bg-pink-50"
  },
  {
    title: "Skill Assessment",
    description: "Verify your skills and get certified by industry experts.",
    img: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/internships_new.png", // fallback
    color: "bg-green-50"
  }
];

export default function PracticePage() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1c4980] to-[#007aff] py-16 px-6 text-white">
        <div className="container-un">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black mb-6">Practice Your Way to <br/>Perfection</h1>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Sharpen your skills with curated practice modules, coding challenges, and mock assessments designed by industry veterans.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-[#1c4980] px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all">
                Explore Modules
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#1c4980] transition-all">
                View My Progress
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container-un px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceCategories.map((cat, idx) => (
            <div key={idx} className={`${cat.color} p-8 rounded-[32px] border border-white shadow-xl hover:shadow-2xl transition-all cursor-pointer group`}>
               <div className="w-16 h-16 mb-6 overflow-hidden">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
               </div>
               <h3 className="text-xl font-black text-grey-1300 mb-3">{cat.title}</h3>
               <p className="text-grey-800 text-sm font-medium leading-relaxed">
                 {cat.description}
               </p>
            </div>
          ))}
        </div>
      </div>

      {/* Reusing Home Sections */}
      <div className="mt-16">
        <PracticeSection />
      </div>

      <section className="py-20 px-6">
         <div className="container-un">
            <div className="bg-grey-50 rounded-[40px] p-10 md:p-20 text-center">
               <h2 className="text-3xl font-black text-grey-1300 mb-6">Want to assess your team?</h2>
               <p className="text-grey-800 max-w-2xl mx-auto mb-10 text-lg">
                 Join 800+ companies that use Unstop to assess and hire the best talent through our enterprise-grade assessment platform.
               </p>
               <button className="bg-blue-700 text-white px-10 py-4 rounded-full font-black text-lg hover:bg-blue-800 transition-all shadow-lg">
                 Explore Unstop For Business
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
