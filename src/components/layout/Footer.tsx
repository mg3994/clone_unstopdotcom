import React from 'react';
import { Mail, Phone, Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const footerSections = [
    {
      title: "Participate",
      links: [
        { label: "Competitions", href: "/competitions" },
        { label: "Quizzes", href: "/quizzes" },
        { label: "Hackathons", href: "/hackathons" },
        { label: "Workshops", href: "/workshops" },
        { label: "Conferences", href: "/conferences" },
        { label: "Cultural Events", href: "/cultural-events" },
        { label: "College Festivals", href: "/college-festivals" },
      ]
    },
    {
      title: "Apply",
      links: [
        { label: "Internships", href: "/internships" },
        { label: "Jobs", href: "/jobs" },
        { label: "Scholarships", href: "/scholarships" },
        { label: "Hiring Challenges", href: "/hiring-challenges" },
      ]
    },
    {
      title: "Learn",
      links: [
        { label: "Courses", href: "/courses" },
        { label: "Articles", href: "/articles" },
        { label: "Workshops", href: "/workshops" },
        { label: "Mentorship", href: "/mentorship" },
        { label: "Practice", href: "/practice" },
        { label: "Pro Prep", href: "/pro-prep" },
      ]
    },
    {
      title: "Our Products",
      links: [
        { label: "Technology Solutions", href: "#" },
        { label: "Recruitment Management", href: "#" },
        { label: "Assessments", href: "#" },
        { label: "Online Proctoring", href: "#" },
        { label: "Online Hackathons", href: "#" },
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", href: "#" },
        { label: "FAQs", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Trust & Safety", href: "#" },
      ]
    }
  ];

  return (
    <footer className="bg-white border-t border-grey-100 pt-16 pb-24 lg:pb-8">
      <div className="container-un px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/">
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
                alt="Unstop"
                className="h-9 mb-6"
              />
            </Link>
            <p className="text-grey-800 text-sm font-medium leading-relaxed mb-8">
              Connecting talent with opportunities. Your one-stop destination for internships, jobs, and competitions.
            </p>
            <div className="flex gap-4 mb-8">
               <a href="#" className="w-10 h-10 bg-grey-50 rounded-full flex items-center justify-center text-grey-600 hover:bg-blue-50 hover:text-blue-700 transition-all">
                  <Linkedin size={18} />
               </a>
               <a href="#" className="w-10 h-10 bg-grey-50 rounded-full flex items-center justify-center text-grey-600 hover:bg-pink-50 hover:text-pink-600 transition-all">
                  <Instagram size={18} />
               </a>
               <a href="#" className="w-10 h-10 bg-grey-50 rounded-full flex items-center justify-center text-grey-600 hover:bg-red-50 hover:text-red-600 transition-all">
                  <Youtube size={18} />
               </a>
               <a href="#" className="w-10 h-10 bg-grey-50 rounded-full flex items-center justify-center text-grey-600 hover:bg-blue-50 hover:text-blue-800 transition-all">
                  <Facebook size={18} />
               </a>
            </div>
            <div className="space-y-4">
               <div className="flex items-center gap-3 text-grey-900 font-bold text-sm">
                  <Mail size={16} className="text-blue-700" />
                  <span className="hover:text-blue-700 cursor-pointer">support@unstop.com</span>
               </div>
               <div className="flex items-center gap-3 text-grey-900 font-bold text-sm">
                  <Phone size={16} className="text-blue-700" />
                  <span className="hover:text-blue-700 cursor-pointer">+91-11-4113-1111</span>
               </div>
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-grey-1300 font-black text-[13px] uppercase tracking-wider mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-grey-800 font-bold text-sm hover:text-blue-700 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-grey-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-bold text-grey-500">
              © 2024 Unstop. Built with ❤️ for talent.
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
             <div className="flex items-center gap-6">
                <Link href="#" className="text-[13px] font-bold text-grey-500 hover:text-blue-700 transition-colors">Privacy Policy</Link>
                <Link href="#" className="text-[13px] font-bold text-grey-500 hover:text-blue-700 transition-colors">Terms & Conditions</Link>
             </div>
             <div className="flex gap-4">
                <img
                  src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/google-play.png"
                  className="h-9 hover:opacity-90 transition-opacity cursor-pointer"
                  alt="Get it on Google Play"
                />
                <img
                  src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/app-store.png"
                  className="h-9 hover:opacity-90 transition-opacity cursor-pointer"
                  alt="Download on the App Store"
                />
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
