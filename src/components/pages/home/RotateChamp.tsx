import styled from '@emotion/styled';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';
import { PaletteType } from '@/types/paletteType';

export const RotateChamp = () => {
  const theme = useTheme();

  return(
    <S.Wrapper mode={theme.palette.mode}>
      <S.SubTitle theme={theme.palette}>로테이션 챔피언</S.SubTitle>
      <S.Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="space-between">
        <Grid >
          <img src={'https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/Aatrox.png'} alt={'champion-img'} />
        </Grid>
        <Grid>
          <img src={'https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/Ahri.png'} alt={'champion-img'} />
        </Grid>
        <Grid>
          <img src={'https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/Brand.png'} alt={'champion-img'} />
        </Grid>
        <Grid>
          <img src={'https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/Amumu.png'} alt={'champion-img'} />
        </Grid>
        <Grid>
          <img src={'https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/Azir.png'} alt={'champion-img'} />
        </Grid>
        <Grid>
          <img src={'https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/Braum.png'} alt={'champion-img'} />
        </Grid>
        <Grid>
          <img src={'https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/Bard.png'} alt={'champion-img'} />
        </Grid>
        <Grid>
          <img src={'https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/Camille.png'} alt={'champion-img'} />
        </Grid>
      </S.Grid>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div<{ mode: 'light' | 'dark' }>`
      border: 1px solid ${({ mode }) => (mode === 'light' ? '#e6e6e6' : '#353535')};
      padding: 30px 20px;
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
  Grid: styled(Grid)`
    div{
      width: 45px;
      height: 45px;
      border-radius: 10px;
      overflow: hidden;
      padding: 0;
      &:last-child{
          margin: 0;
      }
    }
  `
}