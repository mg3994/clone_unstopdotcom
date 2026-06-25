import React from 'react';
import Link from 'next/link';
import Hero from '@/components/home/Hero';
import FeaturedCarousel from '@/components/home/FeaturedCarousel';
import OpportunityCard from '@/components/home/OpportunityCard';
import Stats from '@/components/Stats';
import PracticeSection from '@/components/PracticeSection';
import JobsSection from '@/components/JobsSection';
import MentorshipSection from '@/components/MentorshipSection';
import CoursesSection from '@/components/CoursesSection';

const competitions = [
  {
    title: "Battle of Bands",
    organization: "Dr. B. R. Ambedkar School of Specialised Excellence",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6a395591f3d3a_01.jpeg?d=120x120",
    location: "Online",
    link: "#"
  },
  {
    title: "Unstop CLUBVERSE 2026",
    organization: "Unstop",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/6a2b97761bb8c_Unstop-Logo-Blue-Large.png?d=120x120",
    location: "Online",
    link: "#"
  },
  {
    title: "Stoxra National Trading Championship 2026",
    organization: "IIMT University IIMTU",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6a367356c5568_whatsapp_image_2026-06-05_at_23.41.59.jpeg?d=120x120",
    location: "Online",
    link: "#",
    prizes: "₹ 52,000"
  },
  {
    title: "Stoxra Creators' League 2026",
    organization: "IIMT University IIMTU",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6a366cd72fae9_untitled_design__21___1_.png?d=120x120",
    location: "Online",
    link: "#",
    prizes: "₹ 57,000"
  }
];

const internships = [
  {
    title: "Management Trainee - Talent Acquisition",
    organization: "Zycus Infotech Private Limited",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6a3a33409bc5d_zycus_infotech_private_limited.png?d=120x120",
    location: "Hybrid | Mumbai, Bangalore",
    link: "#"
  },
  {
    title: "Business Development Internship",
    organization: "Kraftpixel Digital Solutions",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6a3a31efe04c3_kraftpixel_digital_solutions_private_limitedpng",
    location: "In Office | Mumbai",
    link: "#"
  },
  {
    title: "Acquisition Internship",
    organization: "StayVista",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6a3a2c911e0e9_stayvista.jpg?d=120x120",
    location: "In Office | North Goa",
    link: "#"
  },
  {
    title: "AI Internship",
    organization: "Zycus Infotech Private Limited",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6a3a3700520e6_zycus_infotech_private_limited.png?d=120x120",
    location: "Hybrid | Mumbai",
    link: "#"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-4 pb-20">
      <Hero />

      <div className="px-6">
        <FeaturedCarousel />
      </div>

      <section className="px-6 py-10">
        <div className="container-un">
          <div className="flex justify-between items-end mb-8">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-8 bg-blue-700 rounded-full"></div>
              <div>
                <h2 className="text-2xl font-bold text-grey-1300">Competitions</h2>
                <p className="text-grey-800 text-sm mt-1">Uncover the most talked-about competitions today.</p>
              </div>
            </div>
            <Link href="/competitions" className="text-blue-700 font-semibold text-sm hover:underline">View All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitions.map((comp, idx) => (
              <OpportunityCard key={idx} {...comp} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="container-un">
          <div className="flex justify-between items-end mb-8">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-8 bg-blue-700 rounded-full"></div>
              <div>
                <h2 className="text-2xl font-bold text-grey-1300">Internships</h2>
                <p className="text-grey-800 text-sm mt-1">Unleash internships tailored to your aspirations.</p>
              </div>
            </div>
            <Link href="/internships" className="text-blue-700 font-semibold text-sm hover:underline">View All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {internships.map((intern, idx) => (
              <OpportunityCard key={idx} {...intern} />
            ))}
          </div>
        </div>
      </section>

      <JobsSection />

      <MentorshipSection />

      <CoursesSection />

      <PracticeSection />

      <Stats />
    </div>
  );
}
