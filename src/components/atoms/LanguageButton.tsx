import styled from '@emotion/styled';
import LanguageIcon from '@mui/icons-material/Language';
import { useTheme } from '@mui/material/styles';

export const LanguageButton = () => {
  const theme = useTheme();
  return(
    <S.Stack>
      <LanguageIcon style={{fontSize: '32px', color: theme.palette.text.secondary}} />
    </S.Stack>
  )
}

const S = {
  Stack: styled.span`
    cursor: pointer;
    padding: 5px;
    margin-left: 10px;
  `,
};