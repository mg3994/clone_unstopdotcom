import React from 'react';
import Link from 'next/link';
import OpportunityCard from './home/OpportunityCard';

const jobs = [
    {
      title: "Software Engineer - Frontend",
      organization: "Google",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/6a2b97761bb8c_Unstop-Logo-Blue-Large.png",
      location: "In Office | Bangalore",
      link: "#"
    },
    {
      title: "Product Manager",
      organization: "Microsoft",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6a3a33409bc5d_zycus_infotech_private_limited.png",
      location: "Hybrid | Hyderabad",
      link: "#"
    },
    {
        title: "UX Designer",
        organization: "Adobe",
        logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6a395591f3d3a_01.jpeg",
        location: "Remote",
        link: "#"
    },
    {
        title: "Data Scientist",
        organization: "Amazon",
        logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/6a368ce68fc0f_organisation_image-blxsQV4dGS943665946YqRpF8RTaw.png",
        location: "In Office | Gurgaon",
        link: "#"
    }
];

const JobsSection = () => {
  return (
    <section className="px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1c4980]">Jobs</h2>
            <p className="text-[#8692a4] text-sm mt-1">Unveil jobs designed for your next big move.</p>
          </div>
            <Link href="/jobs" className="text-[#007aff] font-semibold text-sm hover:underline">View All</Link>
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
