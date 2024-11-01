import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Chip from '@mui/material/Chip';
import { PaletteType } from '@/types/paletteType';

export const Notice = () => {
  const theme = useTheme();

  return(
    <S.Wrapper mode={theme.palette.mode}>
      <S.SubTitle theme={theme.palette}>RIOT 공지사항</S.SubTitle>
      <S.List>
        <ListItem>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <Chip label="공지" color="error" variant="outlined" style={{marginRight: '10px'}} />
            <b>14.21 패치노트(수정)</b>
          </div>
          <small>2024.11.01</small>
        </ListItem>
        <ListItem>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <Chip label="공지" color="error" variant="outlined" style={{marginRight: '10px'}} />
            <b>14.20 패치노트</b>
          </div>
          <small>2024.10.30</small>
        </ListItem>
        <ListItem>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <Chip label="공지" color="error" variant="outlined" style={{marginRight: '10px'}} />
            <b>14.20 패치노트</b>
          </div>
          <small>2024.10.30</small>
        </ListItem>
      </S.List>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div<{ mode: 'light' | 'dark' }>`
      border: 1px solid ${({ mode }) => (mode === 'light' ? '#e6e6e6' : '#353535')};
      padding: 20px;
      border-radius: 16px;
      position: relative;
      min-height: 180px;
  `,
  SubTitle: styled.h2<{ theme: PaletteType }>`
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      position: absolute;
      left: 15px; top: -12px;
      background-color: ${({ theme }) => theme.background.paper};
      padding: 5px 10px;
  `,
  List: styled(List)`
    li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 0;
      cursor: pointer;
      &:hover{
        b{
          text-decoration: underline;
        }
      }
      b{
        font-weight: bold;
      }
      small{
        font-size: 12px;
      }
    }
  `
}