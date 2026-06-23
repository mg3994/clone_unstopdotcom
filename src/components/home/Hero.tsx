import React from 'react';

const categoryCards = [
  {
    id: 'internships',
    title: 'Internships',
    img: 'https://d8it4huxumps7.cloudfront.net/uploads/images/avif/internships_new.png',
    link: '/internships',
    gradient: 'from-[#E9F4FF] via-[#E9F4FF] to-[#FFF1BF]'
  },
  {
    id: 'jobs',
    title: 'Jobs',
    img: 'https://d8it4huxumps7.cloudfront.net/uploads/images/avif/jobs-new.png',
    link: '/jobs',
    gradient: 'from-[#E9F4FF] to-[#FFF1BF]'
  },
  {
    id: 'competitions',
    title: 'Competitions',
    img: 'https://d8it4huxumps7.cloudfront.net/uploads/images/avif/competitions-new-1.png',
    link: '/competitions',
    gradient: 'from-[#E9F4FF] to-[#FFF1BF]'
  },
  {
    id: 'mock-tests',
    title: 'Mock Tests',
    img: 'https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mock-tests-new.png',
    link: '/practice/mock-test',
    isAi: true,
    gradient: 'from-[#E9F4FF] to-[#FFF1BF]'
  },
  {
    id: 'mock-interviews',
    title: 'Mock Interviews',
    img: 'https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mock-interviews-new.png',
    link: '/practice/mock-interview',
    gradient: 'from-[#E9F4FF] to-[#FFF1BF]'
  },
  {
    id: 'mentorships',
    title: 'Mentorships',
    img: 'https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mentorships-new.png',
    link: '/mentor',
    gradient: 'from-[#E9F4FF] to-[#FFF1BF]'
  },
  {
    id: 'courses',
    title: 'Courses',
    img: 'https://d8it4huxumps7.cloudfront.net/uploads/images/avif/courses-new.png',
    link: '/courses',
    isAi: true,
    gradient: 'from-[#E9F4FF] to-[#FFF1BF]'
  },
  {
    id: '100-days-to-code',
    title: '100 Days to Code',
    img: 'https://d8it4huxumps7.cloudfront.net/uploads/images/avif/100-days-to-code-new.png',
    link: '/practice/100-days-of-code',
    gradient: 'from-[#E9F4FF] to-[#FFF1BF]'
  },
];

const Hero = () => {
  return (
    <section className="py-6 lg:py-10 px-4">
      <div className="container-un">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 lg:mb-8 gap-4">
          <h1 className="text-[30px] lg:text-[56px] leading-[1.1] font-bold text-grey-1300">
            Unlock Your <span className="text-blue-700 relative inline-block">
              Career!
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/avif/home_heading_after.png"
                className="absolute -bottom-2 lg:-bottom-4 left-0 w-full"
                alt=""
              />
            </span>
          </h1>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#ece5ff] to-transparent rounded-lg w-fit">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/avif/hero_user_side_img.png" className="h-6 w-auto" alt="" />
            <span className="text-xs lg:text-sm text-purple-800 font-medium">
              Access to <strong className="font-semibold">850M+</strong> profiles
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-5">
          {categoryCards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              className={`flex flex-col justify-between p-3 lg:p-4 rounded-[24px] bg-gradient-to-br ${card.gradient} transition-transform hover:scale-105 min-h-[100px] lg:min-h-[150px] relative overflow-hidden group`}
            >
              <div className="text-[10px] lg:text-sm font-semibold text-grey-1300 z-10">
                {card.title}
                {card.isAi && (
                  <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/69522b252b0f2_ai_vector.svg" className="inline-block ml-1 w-3 lg:w-4" alt="AI" />
                )}
              </div>
              <div className="flex justify-center mt-2 z-10">
                <img src={card.img} alt={card.title} className="w-full max-w-[80px] lg:max-w-none h-auto object-contain" />
              </div>

              {/* Background pattern similar to original */}
              <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/69450295983d9_home_page_card_bg_element.svg" className="w-full h-full object-cover mix-blend-soft-light" alt="" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
