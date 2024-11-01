'use client';

import React, { useState } from 'react';
import styled from '@emotion/styled';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import { Logo } from '@/components/atoms/Logo';
import { PaletteType } from '@/types/paletteType';
import { useTheme } from '@mui/material/styles';

export default function HomePage() {
  const theme = useTheme();
  const [region, setRegion] = useState<string>('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    setRegion(event.target.value as string);
  };
  return (
    <S.Wrapper theme={theme.palette}>
      <Logo fontSize={'62px'} spacing={'30px'} />
      <S.SearchWrap>
        <FormControl style={{width: '120px'}}>
          <InputLabel style={{fontSize: '14px', top: '-3px'}}>지역</InputLabel>
          <S.SearchSelect
            labelId="demo-simple-select-label"
            variant="outlined"
            id="demo-simple-select"
            value={region}
            label="region"
            onChange={handleChange}
          >
            <MenuItem value={10}>Korea</MenuItem>
            <MenuItem value={20}>Korea</MenuItem>
            <MenuItem value={30}>Korea</MenuItem>
          </S.SearchSelect>
        </FormControl>
        <S.SearchInput id="outlined-basic" label="플레이어 이름" variant="outlined" placeholder="플레이어 이름 + #KR1" />
      </S.SearchWrap>
      <S.ButtonWrap theme={theme.palette}>
        <Button variant="contained">Enter</Button>
      </S.ButtonWrap>
      <Divider variant="middle" component="div" style={{padding: '20px 0'}}/>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div<{ theme: PaletteType }>`
    text-align: center;
    margin-top: 80px;
    background-color: ${({ theme }) => theme.background.paper};
    padding: 80px 20px;
    border-radius: 30px;
    box-shadow: 0 0 10px #00000014;
  `,
  SearchWrap: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
  `,
  SearchSelect: styled(Select)`
      border-radius: 25px;
      .MuiSelect-select{
          padding: 12px 14px;
      }
  `,
  SearchInput: styled(TextField)`
    width: 500px;
    border-left: 0;
    margin-left: 5px;
    div{
      border-radius: 25px;
    }
    input{
      padding: 12px 14px;
      font-size: 14px;
    }
    label{
      top: -4px;
      font-size: 14px;
    }
  `,
  ButtonWrap: styled.div<{ theme: PaletteType }>`
    margin-top: 40px;
    button{
        padding: 6px 36px;
        background-color: ${({ theme }) => theme.text.primary};
    }
  `
};
