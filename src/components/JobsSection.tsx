import React from 'react';
import Link from 'next/link';
import OpportunityCard from './home/OpportunityCard';

const jobs = [
    {
      title: "SDE - 1 (Backend Engineer Intern)",
      organization: "Atlassian",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6a3a71b269542_atlassian.png",
      location: "In Office | Bangalore",
      link: "#"
    },
    {
      title: "Full Stack Developer",
      organization: "Paytm",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6a3a33409bc5d_zycus_infotech_private_limited.png",
      location: "Hybrid | Noida",
      link: "#"
    },
    {
        title: "Product Designer",
        organization: "Razorpay",
        logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6a395591f3d3a_01.jpeg",
        location: "Remote",
        link: "#"
    },
    {
        title: "Machine Learning Engineer",
        organization: "Flipkart",
        logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/6a368ce68fc0f_organisation_image-blxsQV4dGS943665946YqRpF8RTaw.png",
        location: "In Office | Bangalore",
        link: "#"
    }
];

const JobsSection = () => {
  return (
    <section className="px-6 py-10">
      <div className="container-un">
        <div className="flex justify-between items-end mb-8">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-8 bg-blue-700 rounded-full"></div>
            <div>
              <h2 className="text-2xl font-bold text-grey-1300">Jobs</h2>
              <p className="text-grey-800 text-sm mt-1">Unveil jobs designed for your next big move.</p>
            </div>
          </div>
          <Link href="/jobs" className="text-blue-700 font-semibold text-sm hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job, idx) => (
            <OpportunityCard key={idx} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
