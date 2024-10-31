import Link from 'next/link';
import styled from '@emotion/styled';
import { siteButton } from '@/data/constData';
import { useTheme } from '@mui/material/styles';
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
          isActive={path === item.path}
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
  Link: styled(Link)<{ isActive: boolean, theme: PaletteType }>`
    font-size: 12px;
    font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
    color: ${({ isActive, theme }) => (isActive ? theme.text.primary : theme.text.secondary)};
      display: flex;
      align-items: center;
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