import React from 'react';
import Hero from '@/components/home/Hero';

const featuredItems = [
  {
    id: 1,
    title: 'Coca-Cola Internship + ₹2.25L Rewards',
    tag: 'Register Now!',
    img: 'https://d8it4huxumps7.cloudfront.net/uploads/images/custom_featured/fullbanner/6a310fdc9cc9d___new_featured_banner__1_.jpg?d=451x676'
  },
  {
    id: 2,
    title: 'Unstop CLUBVERSE 2026',
    tag: 'Online • Free',
    img: 'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/fullbanner/6a3920d1ad7c6_unstop-clubverse-2026.jpg?d=451x676'
  },
  {
    id: 3,
    title: 'Samsung Galaxy AI Treasure Hunt 2026',
    tag: 'Register Now',
    img: 'https://d8it4huxumps7.cloudfront.net/uploads/images/custom_featured/fullbanner/6a2913c89d63a_448_x_676_px.jpg?d=451x676'
  },
  {
    id: 4,
    title: 'BOSCH BMU Innovation Challenge',
    tag: 'Register Now!',
    img: 'https://d8it4huxumps7.cloudfront.net/uploads/images/custom_featured/fullbanner/6a30d786988e4_homepage_banner__1_.png?d=451x676'
  },
];

const companies = [
  'https://d8it4huxumps7.cloudfront.net/uploads/images/692825f25a201_abinbev_logo.png?d=180x80',
  'https://d8it4huxumps7.cloudfront.net/uploads/images/692826035fedd_aditya_birla_group_logo.png?d=180x80',
  'https://d8it4huxumps7.cloudfront.net/uploads/images/6928262b69bec_amazon_logo.png?d=180x80',
  'https://d8it4huxumps7.cloudfront.net/uploads/images/69282664232be_coca_cola_logo.png?d=180x80',
  'https://d8it4huxumps7.cloudfront.net/uploads/images/692826742f537_flipkar_logo.png?d=180x80',
  'https://d8it4huxumps7.cloudfront.net/uploads/images/692827fc103fa_loreal_logo.png?d=180x80',
  'https://d8it4huxumps7.cloudfront.net/uploads/images/692826d79d4e3_mahindra_logo.png?d=180x80',
  'https://d8it4huxumps7.cloudfront.net/uploads/images/6928274382f7a_samsung_logo.png?d=180x80',
];

export default function Home() {
  return (
    <div className="pb-24 lg:pb-10">
      <Hero />

      {/* Featured Section */}
      <section className="py-10 bg-blue-50/30">
        <div className="container-un">
          <h2 className="un-hdng mb-6">Featured</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
            {featuredItems.map((item) => (
              <div key={item.id} className="min-w-[200px] lg:min-w-[226px] bg-white border border-grey-200 rounded-2xl overflow-hidden group cursor-pointer">
                <div className="aspect-[2/3] overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
                </div>
                <div className="p-4">
                  <div className="text-[10px] font-medium text-grey-800 mb-1 border border-grey-200 rounded-full px-2 py-0.5 w-fit">
                    {item.tag}
                  </div>
                  <h3 className="text-sm font-semibold text-grey-1100 line-clamp-2 leading-snug group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-t border-grey-100">
        <div className="container-un">
          <h2 className="text-xl font-bold text-center text-grey-1300 mb-8">
            <span className="text-blue-700">Trusted</span> by Industry Veterans
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-70">
            {companies.map((logo, i) => (
              <img key={i} src={logo} className="h-8 lg:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all" alt="Company" />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container-un">
          <div className="bg-white rounded-3xl p-6 lg:p-10 border border-grey-200">
            <h2 className="text-sm text-grey-800 uppercase tracking-widest mb-2">Profiles</h2>
            <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-10">
              <div className="text-7xl lg:text-[110px] font-bold text-blue-700 leading-none">850<span className="text-4xl lg:text-6xl text-blue-700/50">M</span></div>
              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6">
                 <div>
                    <h3 className="text-xs text-grey-800 mb-1">Assessments</h3>
                    <div className="text-2xl font-bold text-grey-1300">22.3<span className="text-blue-700">M+</span></div>
                 </div>
                 <div>
                    <h3 className="text-xs text-grey-800 mb-1">Opportunities</h3>
                    <div className="text-2xl font-bold text-grey-1300">140<span className="text-blue-700">K+</span></div>
                 </div>
                 <div>
                    <h3 className="text-xs text-grey-800 mb-1">Organisations</h3>
                    <div className="text-2xl font-bold text-grey-1300">42<span className="text-blue-700">K+</span></div>
                 </div>
                 <div>
                    <h3 className="text-xs text-grey-800 mb-1">Brands trust us</h3>
                    <div className="text-2xl font-bold text-grey-1300">800<span className="text-blue-700">+</span></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
