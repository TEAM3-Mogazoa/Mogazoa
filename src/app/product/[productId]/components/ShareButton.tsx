'use client';

import KakaoIcon from '@/assets/icon/Icon-kakao.svg';
import ShareIcon from '@/assets/icon/Icon-share.svg';
import { cn } from '@/lib/utils';

const ShareButton = ({ variant }: { variant: 'primary' | 'kakao' }) => {
  //kakaoTalk 공유 로직
  //URL share 로직  variant 로 분기 처리하기
  return (
    <button
      type='button'
      className={cn(
        'bg-black-252530 flex h-6 w-6 items-center justify-center rounded-[6px] xl:h-7 xl:w-7',
      )}
    >
      {variant === 'primary' ? (
        <ShareIcon className='h-[14px] w-[14px] xl:h-[18px] xl:w-[18px]' />
      ) : (
        <KakaoIcon className='h-[14px] w-[14px] xl:h-[18px] xl:w-[18px]' />
      )}
    </button>
  );
};

export default ShareButton;
