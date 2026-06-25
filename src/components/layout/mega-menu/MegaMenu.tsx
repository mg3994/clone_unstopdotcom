"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface MegaMenuProps {
  id: string;
  data: any;
  isVisible: boolean;
}

const MegaMenu = ({ id, data, isVisible }: MegaMenuProps) => {
  if (!data) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute left-full top-0 h-screen bg-white shadow-[0_8px_24px_rgba(0,0,0,0.1)] border-l border-[#E2E2E2] overflow-y-auto no-scrollbar z-[1001]"
      style={{ width: '400px' }}
    >
      <div className="p-6">
        <h2 className="text-[18px] font-medium text-[#383838] mb-6 leading-[130%]">{data.title}</h2>

        <div className="flex flex-col gap-6">
          {data.sections.map((section: any, idx: number) => (
            <div key={idx} className="flex flex-col gap-3">
              <h3 className="text-[12px] font-medium text-[#727272] leading-[100%]">
                {section.title}
              </h3>
              <div className="flex flex-col gap-1">
                {section.items.map((item: any, itemIdx: number) => (
                  <Link
                    key={itemIdx}
                    href={item.href || '#'}
                    className="group flex items-center gap-3 p-2 rounded-xl hover:bg-black/5 transition-all"
                  >
                    {item.icon && (
                      <div className="w-10 h-10 rounded-xl bg-[#F6F6F6] flex items-center justify-center group-hover:bg-[#DEEDFC] transition-colors flex-shrink-0">
                        <img src={item.icon} alt="" className="w-6 h-6 object-contain" />
                      </div>
                    )}
                    <div className="flex-grow">
                      <p className="text-[14px] font-normal text-[#383838] leading-[120%] group-hover:text-[#0073e6] transition-colors">
                        {item.label}
                      </p>
                      {item.description && (
                        <p className="text-[11px] text-[#727272] leading-[120%] mt-0.5">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MegaMenu;
