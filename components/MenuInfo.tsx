'use client';

import React from 'react';
import { menuData } from '@/app/data/groceryData';

const MenuInfo = () => {
  const { generalInfo, lunch, dinner } = menuData;

  return (
    <div className="bg-[#120a07] rounded-2xl border border-[#2d1a11] p-6 shadow-sm">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-[#f5eddc] mb-2">Menu</h2>
        <p className="text-[#f5eddc]/70">{generalInfo.timing}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#0b0503] rounded-xl p-5 border border-[#2d1a11]">
          <h3 className="text-lg font-semibold text-[#f5eddc] mb-2">{lunch.title}</h3>
          <p className="text-[#c87534] font-medium">{lunch.timing}</p>
        </div>

        <div className="bg-[#0b0503] rounded-xl p-5 border border-[#2d1a11]">
          <h3 className="text-lg font-semibold text-[#f5eddc] mb-2">{dinner.title}</h3>
          <p className="text-[#c87534] font-medium">{dinner.timing}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuInfo;