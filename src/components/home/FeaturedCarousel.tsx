'use client';
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const featuredItems = [
  {
    id: 1,
    title: 'Unstop CLUBVERSE 2026',
    tags: ['Online', 'Free'],
    img: 'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/fullbanner/6a3920d1ad7c6_unstop-clubverse-2026.jpg?d=451x676'
  },
  {
    id: 2,
    title: 'Make your resume cooler than the rest with mentors this summer!',
    tags: ['Get your CV reviewed!'],
    img: 'https://d8it4huxumps7.cloudfront.net/uploads/images/custom_featured/fullbanner/6618d79904996_hp_featured_banner.jpg?d=451x676'
  },
  {
    id: 3,
    title: "India's Biggest Creators' League",
    tags: ['Online', 'Free'],
    img: 'https://d8it4huxumps7.cloudfront.net/uploads/images/custom_featured/fullbanner/6646fe3be93c9_india_s_biggest_creators_league.png?d=451x676'
  },
  {
    id: 4,
    title: 'LIT School Careers of the Future Summit',
    tags: ['Register Now'],
    img: 'https://d8it4huxumps7.cloudfront.net/uploads/images/custom_featured/fullbanner/6698ca1f43a99_hp_featured_banner.jpg?d=451x676'
  },
  {
    id: 5,
    title: 'Samsung Galaxy AI Treasure Hunt 2026',
    tags: ['Register Now'],
    img: 'https://d8it4huxumps7.cloudfront.net/uploads/images/custom_featured/fullbanner/6a2913c89d63a_448_x_676_px.jpg?d=451x676'
  }
];

export default function FeaturedCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-10">
      <div className="container-un">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-8 bg-blue-700 rounded-full"></div>
            <h2 className="text-2xl font-bold text-grey-1300">Featured</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-grey-200 flex items-center justify-center hover:bg-grey-50 transition-colors"
            >
              <ChevronLeft size={20} className="text-grey-800" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-grey-200 flex items-center justify-center hover:bg-grey-50 transition-colors"
            >
              <ChevronRight size={20} className="text-grey-800" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="flex-[0_0_280px] lg:flex-[0_0_242px] min-w-0"
              >
                <div className="group cursor-pointer">
                  <div className="aspect-[2/3] rounded-2xl overflow-hidden border border-grey-200 shadow-sm transition-shadow hover:shadow-md">
                    <img
                      src={item.img}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt={item.title}
                    />
                  </div>
                  <div className="mt-3">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-full border border-grey-200 text-grey-800 bg-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-[15px] font-semibold text-grey-1100 leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
