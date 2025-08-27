import CategoryIcon from '@/assets/icon/Icon-category.svg';
import { cn } from '@/lib/utils';
import { CategoryFilterChipProps } from '@/types/chips';

const CategoryFilterChip = ({ name, className, onClick }: CategoryFilterChipProps) => {
  return (
    <button
      className={cn(
        'border-black-353542 text-mogazoa-14px-400 text-gray-9fa6b2 flex max-w-[120px] shrink-0 items-center justify-between gap-[4px] rounded-full border-1 px-3 py-2',
        className,
      )}
      onClick={onClick}
    >
      <CategoryIcon className='h-[18px] w-[18px]' />
      {name}
    </button>
  );
};

export default CategoryFilterChip;
