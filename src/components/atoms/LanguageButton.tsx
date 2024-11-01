import React from 'react';
import styled from '@emotion/styled';
import LanguageIcon from '@mui/icons-material/Language';
import { useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const LanguageButton = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <S.Wrapper>
      <S.Stack onClick={handleClick}>
        <LanguageIcon style={{fontSize: '30px', color: theme.palette.text.primary}} />
      </S.Stack>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Korean</MenuItem>
        {/*<MenuItem onClick={handleClose}>English</MenuItem>*/}
      </Menu>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    cursor: pointer;
    padding: 5px;
    margin-left: 10px;
  `,
  Stack: styled.span`
  `,
};