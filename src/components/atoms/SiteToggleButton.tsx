import Link from 'next/link';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';

import { siteButton } from '@/data/constData';
import { PaletteType } from '@/types/paletteType';

type TProps = {
  path: string;
}

export const SiteToggleButton = ({ path }: TProps) => {
  const theme = useTheme();

  return(
    <S.Wrapper>
      {siteButton?.map(item => (
        <S.Link
          href={item.path}
          key={item.path}
          className={path === item.path ? 'active' : ''}
          theme={theme.palette}
        >
          {item.title}
        </S.Link>
      ))}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Link: styled(Link)<{ theme: PaletteType }>`
    font-size: 12px;
    font-weight: normal;
    color: ${({ theme }) => theme.text.secondary};
    display: flex;
    align-items: center;
      
    &.active{
      font-weight: bold;
      color: ${({ theme }) => theme.text.primary};
    }
    &:hover {
      color: ${({ theme }) => theme.text.primary};
      font-weight: bold;
    }
    &::after{
      content: '';
      display: block;
      width: 1px;
      height: 14px;
      background: ${({ theme }) => theme.text.secondary};;
      margin: 0 10px;
    }
    &:last-child{
        &::after{
            display: none;
        }
    }
  `,
};