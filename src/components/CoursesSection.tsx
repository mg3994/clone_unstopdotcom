import React from 'react';
import Link from 'next/link';

const courses = [
  {
    title: "A-Z UI/UX Design Course",
    provider: "Unstop",
    price: "₹1,999",
    originalPrice: "₹4,999",
    img: "https://d8it4huxumps7.cloudfront.net/uploads/images/courses/6548773950b4e_ui_ux.png",
    duration: "40+ Hours"
  },
  {
    title: "Mastering Data Structures & Algorithms",
    provider: "Unstop",
    price: "₹2,499",
    originalPrice: "₹6,999",
    img: "https://d8it4huxumps7.cloudfront.net/uploads/images/courses/6548773950b4e_ui_ux.png",
    duration: "60+ Hours"
  },
  {
    title: "Complete Product Management Boot Camp",
    provider: "Unstop",
    price: "₹2,999",
    originalPrice: "₹7,999",
    img: "https://d8it4huxumps7.cloudfront.net/uploads/images/courses/6548773950b4e_ui_ux.png",
    duration: "35+ Hours"
  }
];

const CoursesSection = () => {
  return (
    <section className="py-10 px-6">
      <div className="container-un">
        <div className="flex justify-between items-end mb-8">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-8 bg-blue-700 rounded-full"></div>
            <div>
              <h2 className="text-2xl font-bold text-grey-1300">Courses</h2>
              <p className="text-grey-800 text-sm mt-1">Upskill yourself with world-class curriculum.</p>
            </div>
          </div>
          <Link href="/courses" className="text-blue-700 font-semibold text-sm hover:underline">View All</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white rounded-[24px] border border-grey-200 overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group">
              <div className="h-40 overflow-hidden">
                <img
                  src="https://d8it4huxumps7.cloudfront.net/uploads/images/avif/courses-new.png"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={course.title}
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-bold text-blue-700 uppercase mb-2">{course.provider}</p>
                <h3 className="font-bold text-grey-1300 line-clamp-2 mb-4 h-12">{course.title}</h3>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="text-lg font-bold text-grey-1300">{course.price}</span>
                    <span className="text-xs text-grey-500 line-through ml-2">{course.originalPrice}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-grey-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
