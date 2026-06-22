import Link from 'next/link';

export default function Footer() {
  const sections = [
    {
      title: 'Our Solutions',
      links: ['Hiring Solutions', 'Branding Solutions', 'Engagement Solutions', 'Assessment Solutions']
    },
    {
      title: 'Product',
      links: ['Job Board', 'Competitions', 'Practice', 'Courses', 'Mentorship']
    },
    {
      title: 'Support',
      links: ['About Us', 'Contact Us', 'FAQs', 'Privacy Policy', 'Terms & Conditions']
    }
  ];

  return (
    <footer className="bg-[#1c1c1c] text-white pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">unstop</h2>
            <p className="text-gray-400 max-w-xs mb-6">
              Empowering students and early talent to learn, practice and get hired.
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-white transition">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2024 Unstop. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white">LinkedIn</Link>
            <Link href="#" className="hover:text-white">Instagram</Link>
            <Link href="#" className="hover:text-white">Twitter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
