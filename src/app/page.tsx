'use client';

import styled from '@emotion/styled';
import { ThemeToggleButton } from '@/components/atoms/ThemeToggleButton';

export default function Home() {
  return (
    <S.Wrapper>
      <ThemeToggleButton />
      Home Page
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    text-align: center;
      font-size: 30px;
  `,
};
