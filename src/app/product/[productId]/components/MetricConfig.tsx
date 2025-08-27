import FavoriteIcon from '@/assets/icon/Icon-favorite.svg';
import ReviewIcon from '@/assets/icon/Icon-review.svg';
import StarIcon from '@/assets/icon/Icon-star.svg';

export const METRIC_CONFIG = {
  rating: {
    title: '별점 평균',
    unit: '점',
    isGreater: '더 높아요!',
    isSmaller: '더 낮아요!',
    icon: <StarIcon className='h-5 w-5 xl:h-6 xl:w-6' />,
  },
  favorite: {
    title: '찜',
    unit: '개',
    isGreater: '더 많아요!',
    isSmaller: '더 적어요!',
    icon: <FavoriteIcon className='h-5 w-5 xl:h-6 xl:w-6' />,
  },
  review: {
    title: '리뷰',
    unit: '개',
    isGreater: '더 많아요!',
    isSmaller: '더 적어요!',
    icon: (
      <>
        <ReviewIcon className='h-5 w-5 xl:h-6 xl:w-6' />
      </>
    ),
  },
};
