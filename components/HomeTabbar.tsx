import React from 'react'
import { productStatus } from '../constants/index';
import { Repeat } from 'lucide-react';

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabbar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className='flex items-center gap-1.5 text-sm font-semibold'>
      <div className='flex items-center gap-1.5'>
        {productStatus?.map((item) => (
          <button
            key={item?.value}
            onClick={() => onTabSelect(item?.title)}
            className={`
              border border-golddark 
              px-4 py-1.5 md:px-6 md:py-2 
              rounded-full 
              transition-all duration-300 
              ease-in-out
              ${selectedTab === item?.title
                ? 'bg-golddark text-white'
                : 'text-golddark hover:bg-golddark hover:text-white'}
              cursor-pointer
              font-medium
              shadow-sm
              hover:shadow-md
            `}>
            {item?.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default HomeTabbar
