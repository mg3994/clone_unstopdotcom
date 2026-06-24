import React from 'react';

const stats = [
  {
    number: "5M+",
    label: "Active Students",
    color: "from-blue-500 to-blue-700"
  },
  {
    number: "10K+",
    label: "Opportunities",
    color: "from-purple-500 to-purple-700"
  },
  {
    number: "800+",
    label: "Companies",
    color: "from-orange-500 to-orange-700"
  },
  {
    number: "20K+",
    label: "Colleges",
    color: "from-green-500 to-green-700"
  }
];

const Stats = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-[#1c4980] mb-4">
              Our Numbers <br />
              <span className="text-blue-600">Speak for Themselves</span>
            </h2>
            <p className="text-[#8692a4]">
              We believe in creating a world where everyone has the opportunity to learn, grow, and succeed.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 w-full md:w-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 min-w-[160px]">
                <span className={`text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>
                  {stat.number}
                </span>
                <span className="text-sm font-semibold text-[#1c4980] mt-1 text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-[#1c4980] to-[#007aff] rounded-[32px] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Are you an Industry Veteran?</h3>
            <p className="opacity-90">Share your experience and guide the next generation of talent.</p>
          </div>
          <button className="bg-white text-[#1c4980] px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all whitespace-nowrap">
            Join as a Mentor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
