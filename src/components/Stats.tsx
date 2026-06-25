import React from 'react';

const stats = [
  {
    number: "5M+",
    label: "Active Students",
    color: "text-[#007aff]"
  },
  {
    number: "10K+",
    label: "Opportunities",
    color: "text-[#7b61ff]"
  },
  {
    number: "800+",
    label: "Companies",
    color: "text-[#ff9900]"
  },
  {
    number: "20K+",
    label: "Colleges",
    color: "text-[#00c2ff]"
  }
];

const Stats = () => {
  return (
    <section className="py-16 px-6">
      <div className="container-un">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-black text-grey-1300 mb-4 leading-tight">
              Our Numbers <br />
              <span className="text-blue-700">Speak for Themselves</span>
            </h2>
            <p className="text-grey-800 text-lg">
              We believe in creating a world where everyone has the opportunity to learn, grow, and succeed.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className={`text-5xl font-black ${stat.color} mb-2 tracking-tight`}>
                  {stat.number}
                </span>
                <span className="text-lg font-bold text-grey-1100">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 relative overflow-hidden bg-[#1c4980] rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 group">
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-[100px] opacity-20 -ml-32 -mb-32"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Are you an Industry Veteran?</h3>
            <p className="text-blue-100 text-lg max-w-xl">
              Share your experience and guide the next generation of talent. Join our elite pool of mentors.
            </p>
          </div>
          <button className="relative z-10 bg-white text-[#1c4980] px-10 py-4 rounded-full font-black text-lg hover:bg-blue-50 transition-all shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap">
            Join as a Mentor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
