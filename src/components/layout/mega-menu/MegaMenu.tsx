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
      className="absolute left-full top-0 ml-1 h-screen bg-white shadow-[10px_0_30px_rgba(0,0,0,0.06)] border-l border-slate-50 overflow-y-auto no-scrollbar"
      style={{ width: 'min(700px, 70vw)', zIndex: 100 }}
    >
      <div className="p-8">
        <h2 className="text-2xl font-bold text-[#1c4980] mb-8">{data.title}</h2>

        <div className="grid grid-cols-2 gap-x-12 gap-y-10">
          {data.sections.map((section: any, idx: number) => (
            <div key={idx}>
              <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                {section.title}
              </h3>
              <div className="flex flex-col gap-3">
                {section.items.map((item: any, itemIdx: number) => (
                  <Link
                    key={itemIdx}
                    href={item.href || '#'}
                    className="group flex items-start gap-3 py-1"
                  >
                    {item.icon && (
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                        <img src={item.icon} alt="" className="w-6 h-6 object-contain" />
                      </div>
                    )}
                    <div>
                      <p className="text-[14px] font-bold text-[#1c4980] group-hover:text-blue-600 transition-colors">
                        {item.label}
                      </p>
                      {item.description && (
                        <p className="text-[12px] text-slate-500 leading-tight mt-0.5">
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
