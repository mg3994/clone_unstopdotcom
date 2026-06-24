import React from 'react';
import Link from 'next/link';

interface PracticeItem {
  title: string;
  subtitle?: string;
  img?: string;
}

const practiceData: PracticeItem[] = [
  {
    title: "100 Days of Code",
    subtitle: "Coding Sprint",
    img: "https://cdn.unstop.com/assets/practice/100-days-of-code.svg"
  },
  {
    title: "Mock Test",
    subtitle: "Skill Based Mock Assessments",
    img: "https://cdn.unstop.com/assets/practice/mock-test.svg"
  },
  {
    title: "Company Preparation",
    subtitle: "Crack Your Dream Company",
    img: "https://cdn.unstop.com/assets/practice/company-prep.svg"
  },
  {
    title: "Project",
    subtitle: "Machine Learning Projects",
    img: "https://cdn.unstop.com/assets/practice/project.svg"
  }
];

const PracticeSection = () => {
  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1c4980]">Practice</h2>
            <p className="text-[#8692a4] text-sm mt-1">Solve quality problems and crack your dream company.</p>
          </div>
          <Link href="/practice" className="text-[#007aff] font-semibold text-sm hover:underline">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-[20px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#f0f6ff] rounded-2xl group-hover:scale-110 transition-transform">
                <img src={item.img} alt={item.title} className="w-10 h-10 object-contain" />
              </div>
              <h3 className="font-bold text-[#1c4980] mb-1">{item.title}</h3>
              <p className="text-xs text-[#8692a4] leading-relaxed">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeSection;
