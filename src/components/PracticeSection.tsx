import React from 'react';
import Link from 'next/link';

interface PracticeItem {
  title: string;
  subtitle?: string;
  img?: string;
  color: string;
}

const practiceData: PracticeItem[] = [
  {
    title: "100 Days of Code",
    subtitle: "Solve 100 problems in 100 days to win big!",
    img: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/100-days-to-code-new.png",
    color: "bg-[#F4F1FE]"
  },
  {
    title: "Mock Test",
    subtitle: "Skill Based Mock Assessments to ace your prep.",
    img: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mock-tests-new.png",
    color: "bg-[#FFF9E5]"
  },
  {
    title: "Company Preparation",
    subtitle: "Prepare for your dream company with our curation.",
    img: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mock-interviews-new.png",
    color: "bg-[#E5F3FF]"
  },
  {
    title: "Coding Practice",
    subtitle: "Solve coding problems of different difficulty levels.",
    img: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/100-days-to-code-new.png",
    color: "bg-[#E6F9F0]"
  }
];

const PracticeSection = () => {
  return (
    <section className="py-10 px-6">
      <div className="container-un">
        <div className="flex justify-between items-end mb-8">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-8 bg-blue-700 rounded-full"></div>
            <div>
              <h2 className="text-2xl font-bold text-grey-1300">Practice</h2>
              <p className="text-grey-800 text-sm mt-1">Solve quality problems and crack your dream company.</p>
            </div>
          </div>
          <Link href="/practice" className="text-blue-700 font-semibold text-sm hover:underline">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] border border-grey-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col group overflow-hidden"
            >
              <div className={`h-[140px] ${item.color} flex items-center justify-center relative px-8`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-24 w-auto object-contain z-10 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                   <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/69450295983d9_home_page_card_bg_element.svg" className="w-full h-full object-cover" alt="" />
                </div>
              </div>
              <div className="p-5 flex-grow">
                <h3 className="font-bold text-grey-1300 text-lg mb-2">{item.title}</h3>
                <p className="text-xs text-grey-800 leading-relaxed line-clamp-2">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeSection;
