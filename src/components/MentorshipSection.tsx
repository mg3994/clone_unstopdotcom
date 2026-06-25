import React from 'react';
import Link from 'next/link';

const mentorships = [
  {
    title: "SDE Mentor - Top Product Companies",
    name: "Ankit Sharma",
    company: "Google",
    img: "https://d8it4huxumps7.cloudfront.net/uploads/images/mentor/656461972167d_ankit.png",
    rating: "4.9",
    reviews: "120+"
  },
  {
    title: "Product Management Guide",
    name: "Sneha Reddy",
    company: "Microsoft",
    img: "https://d8it4huxumps7.cloudfront.net/uploads/images/mentor/656461972167d_ankit.png", // Using same for placeholder if needed
    rating: "5.0",
    reviews: "85+"
  },
  {
    title: "Consulting Expert",
    name: "Rahul Verma",
    company: "McKinsey",
    img: "https://d8it4huxumps7.cloudfront.net/uploads/images/mentor/656461972167d_ankit.png",
    rating: "4.8",
    reviews: "200+"
  }
];

const MentorshipSection = () => {
  return (
    <section className="py-10 px-6 bg-[#f8faff]">
      <div className="container-un">
        <div className="flex justify-between items-end mb-8">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-8 bg-blue-700 rounded-full"></div>
            <div>
              <h2 className="text-2xl font-bold text-grey-1300">Mentorship</h2>
              <p className="text-grey-800 text-sm mt-1">Guided by the best to make you the best.</p>
            </div>
          </div>
          <Link href="/mentor" className="text-blue-700 font-semibold text-sm hover:underline">View All</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mentorships.map((mentor, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[24px] border border-grey-200 shadow-sm hover:shadow-md transition-all cursor-pointer group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-50 bg-blue-50">
                   <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mentorships-new.png" className="w-full h-full object-contain" alt={mentor.name} />
                </div>
                <div>
                  <h3 className="font-bold text-grey-1300">{mentor.name}</h3>
                  <p className="text-xs text-blue-700 font-medium">{mentor.company}</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-grey-1100 mb-4 group-hover:text-blue-700">{mentor.title}</p>
              <div className="flex items-center gap-2 text-xs font-bold text-yellow-600">
                <span>⭐ {mentor.rating}</span>
                <span className="text-grey-500 font-medium">({mentor.reviews} Reviews)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;
