import React from 'react';

interface LinkItem {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: LinkItem[];
}

const footerData: FooterSection[] = [
  {
    title: "Opportunities",
    links: [
      { label: "Competitions", href: "/competitions" },
      { label: "Internships", href: "/internships" },
      { label: "Jobs", href: "/jobs" },
      { label: "Scholarships", href: "/scholarships" },
      { label: "Hiring Challenges", href: "/hiring-challenges" }
    ]
  },
  {
    title: "Learn & Practice",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "Mock Interviews", href: "/mock-interview" },
      { label: "Code Conquest", href: "/practice/coding" },
      { label: "100 Days of Code", href: "/practice/100-days-of-code" }
    ]
  },
  {
    title: "Our Products",
    links: [
      { label: "Technology Platform", href: "#" },
      { label: "Recruitment Management", href: "#" },
      { label: "University Branding", href: "#" },
      { label: "Hackathon Platform", href: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Client Testimonials", href: "#" }
    ]
  }
];

const Footer = () => {
  return (
    <footer className="bg-[#1c4980] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {footerData.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-lg mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
             <img src="https://cdn.unstop.com/assets/images/logo/unstop-logo-white.svg" alt="Unstop" className="h-8" />
             <p className="text-sm text-gray-400">© 2026 FLIP IT TECHNOLOGIES PVT. LTD. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
