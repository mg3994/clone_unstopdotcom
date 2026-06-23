import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: "Our Products",
      links: ["Technology Solutions", "Recruitment Management", "Assessments", "Hackathons", "Campus Branding"]
    },
    {
      title: "Participate",
      links: ["Competitions", "Quizzes", "Hackathons", "Scholarships", "Internships", "Jobs"]
    },
    {
      title: "Learn",
      links: ["Courses", "Articles", "Workshops", "Mentorship", "Projects"]
    },
    {
      title: "Our Presence",
      links: ["Engineering", "MBA", "Design", "Arts & Science", "School"]
    }
  ];

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8 hidden lg:block">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
              alt="Unstop"
              className="h-10 mb-6"
            />
            <p className="text-slate-500 font-bold text-sm leading-relaxed mb-8">
              Connecting talent with opportunities. Your one-stop destination for internships, jobs, and competitions.
            </p>
            <div className="flex gap-4 mb-8">
               <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
                  <span className="font-black text-xs">Li</span>
               </div>
               <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
                  <span className="font-black text-xs">Ig</span>
               </div>
               <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
                  <span className="font-black text-xs">X</span>
               </div>
            </div>
            <div className="space-y-3">
               <div className="flex items-center gap-3 text-slate-500 font-bold text-sm">
                  <Mail size={16} className="text-blue-600" />
                  support@unstop.com
               </div>
               <div className="flex items-center gap-3 text-slate-500 font-bold text-sm">
                  <Phone size={16} className="text-blue-600" />
                  +91-11-4113-1111
               </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-slate-800 font-black text-sm uppercase tracking-widest mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-500 font-bold text-sm hover:text-blue-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[13px] font-bold text-slate-400">
            © 2024 Unstop. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8">
             <a href="#" className="text-[13px] font-bold text-slate-400 hover:text-slate-600 transition-colors">Privacy Policy</a>
             <a href="#" className="text-[13px] font-bold text-slate-400 hover:text-slate-600 transition-colors">Terms & Conditions</a>
             <div className="flex gap-3">
                <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/google-play.png" className="h-8" alt="Google Play" />
                <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/app-store.png" className="h-8" alt="App Store" />
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
