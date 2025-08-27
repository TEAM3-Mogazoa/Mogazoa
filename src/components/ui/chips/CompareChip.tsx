'use client';

import DeleteIcon from '@/assets/icon/Icon-delete.svg';
import { cn } from '@/lib/utils';
import { CompareChipProps } from '@/types/chips';

const CompareChip = ({ variant, productName, onClick }: CompareChipProps) => {
  return (
    <div
      className={cn(
        'text-mogazoa-16px-400 group flex shrink-0 cursor-pointer items-center gap-[10px] rounded-[6px] px-[10px] py-2',
        variant === 'first' ? 'bg-[#05D58B]/10 text-[#05D58B]' : 'bg-[#FF2F9F]/10 text-[#FF2F9F]',
      )}
      onClick={onClick}
    >
      {productName}
      <button
        className={cn(
          'flex h-[19px] w-[19px] cursor-pointer items-center justify-center rounded-[6px]',
          variant === 'first' ? 'group-hover:bg-[#05D58B]/60' : 'group-hover:bg-[#FF2F9F]/60',
          'transition-colors duration-200 group-hover:scale-110',
        )}
      >
        <DeleteIcon className='h-[13px] w-[13px] xl:h-[15px] xl:w-[15px]' />
      </button>
    </div>
  );
};

export default CompareChip;
