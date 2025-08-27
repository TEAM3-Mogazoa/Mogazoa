'use client';

import { useState } from 'react';

import DropdownIcon from '@/assets/icon/Icon-dropdown.svg';
import DropupIcon from '@/assets/icon/Icon-dropup.svg';
import { Category, CATEGORY } from '@/constants/ProductsConst';
import useDropdown from '@/hooks/useDropdown';
import { cn } from '@/lib/utils';

export const CategoryDropdown = ({ onChange }: { onChange?: (id: number) => void }) => {
  // onChange = 프롭을 number로 받는 함수
  const [value, setValue] = useState<string | null>(null);
  const { isOpen, toggleDropdown, dropdownRef } = useDropdown();

  const initialValue = value ? value : '카테고리 선택';

  const handleSelectValue = (ca: Category) => {
    setValue(ca.name);
    onChange?.(ca.id);
  };

  return (
    <div ref={dropdownRef} className=''>
      <div
        onClick={toggleDropdown}
        tabIndex={0}
        className='bg-black-353542 focus:bg-main-gradation hover:bg-main-gradation text-mogazoa-14px-400 relative flex h-[55px] w-[295px] items-center justify-center rounded-[8px] p-[1.2px] md:h-[60px] md:w-90 xl:h-[70px]'
      >
        <div
          className={cn(
            'bg-black-252530 flex h-full w-full items-center justify-between rounded-[8px] px-5 py-[17px]',
            isOpen ? 'text-white-f1f1f5' : 'text-black-6e6e82',
          )}
        >
          {initialValue}
          {isOpen ? <DropupIcon /> : <DropdownIcon />}
        </div>
        {isOpen && (
          <div className='bg-black-252530 border-black-353542 absolute top-[60px] left-0 z-10 flex w-[295px] flex-col gap-2 rounded-lg border-1 p-[10px] md:top-[65px] md:w-90 xl:top-[75px]'>
            {CATEGORY.map((ca) => (
              <button
                key={ca.id}
                value={ca.id}
                onClick={() => handleSelectValue(ca)}
                className='hover:bg-black-353542 text-mogazoa-14px-400 text-gray-6e6e82 hover:text-white-f1f1f5 xl:text-mogazoa-16px-400 flex w-full justify-start rounded-[6px] px-5 py-[6px]'
              >
                {ca.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryDropdown;
