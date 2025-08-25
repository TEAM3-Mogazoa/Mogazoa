'use client';

import { useRef, useState } from 'react';

import Link from 'next/link';

import { useOnClickOutside } from '@/hooks/useOnClickOutside';
// import { signOut } from "next-auth/react" -> auth 세팅 이후 다시 확인

import AvatarProfile from './AvatarProfile';
// import { useAuthStore } from '@/store/auth'; -> 유저 정보 제작 후 교체

interface AuthState {
  name?: string | null;
  profileUrl?: string | null;
}

function useAuth(): AuthState {
  // const name = useAuthStore((s) => s.user?.name ?? null);
  // const profileUrl = useAuthStore((s) => s.user?.profileImg ?? null);
  // return { name, profileUrl };

  return { name: null, profileUrl: null }; // 임시 더미데이터
}
const ProfileDropdown = () => {
  const [listOpen, setListOpen] = useState(false);
  const { name, profileUrl } = useAuth();
  const ref = useRef<HTMLDivElement | null>(null);

  // 린트 에러 방지
  console.log(name);
  console.log(profileUrl);

  useOnClickOutside(ref, () => {
    setListOpen(false);
  });
  // const user = useAuthStore((s) => s.user); -> AvatarProfile로 유저 정보 내려줌

  return (
    <div className='relative'>
      <button
        type='button'
        aria-haspopup='menu'
        aria-expanded={listOpen}
        onClick={() => setListOpen((open) => !open)}
        className='cursor-pointer'
      >
        <AvatarProfile />
        {/* <AvatarProfile profileImg={user?.profileImg} userName={user?.userName} /> */}
      </button>
      {listOpen && (
        <div
          ref={ref}
          role='menu'
          className='border-black-353542 bg-black-252530 absolute top-13 left-0 z-10 w-36 rounded-lg border px-2 py-2 xl:right-[120px]'
        >
          <ul>
            <li className='hover:bg-black-353542 text-white-f1f1f5 rounded-lg px-2 py-1'>
              <Link href='/mypage' onClick={() => setListOpen(false)}>
                내 프로필
              </Link>
            </li>
            <li className='hover:bg-black-353542 text-white-f1f1f5 rounded-lg px-2 py-1'>
              <button onClick={() => setListOpen(false)}>로그아웃</button>
              {/* <button onClick={()=> signOut()}>로그아웃</button> -> auth 세팅 이후 사용 */}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
