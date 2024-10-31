import styled from '@emotion/styled';

export const Logo = () => {
  return(
    <S.Logo>
      LOLKDA
    </S.Logo>
  )
}

const S = {
  Logo: styled.h1`
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
  `,
};