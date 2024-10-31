'use client';

import React, { useState } from 'react';
import styled from '@emotion/styled';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { Logo } from '@/components/atoms/Logo';

export default function HomePage() {
  const [region, setRegion] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value as string);
  };
  return (
    <S.Wrapper>
      <Logo fontSize={'62px'} spacing={'30px'} />
      <S.SearchWrap>
        <FormControl style={{width: '160px'}}>
          <InputLabel>지역</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            variant='outlined'
            id="demo-simple-select"
            value={region}
            label="region"
            onChange={handleChange}
          >
            <MenuItem value={10}>Korea</MenuItem>
            <MenuItem value={20}>Korea</MenuItem>
            <MenuItem value={30}>Korea</MenuItem>
          </Select>
        </FormControl>
        <TextField id="outlined-basic" label="검색" variant="outlined" placeholder="플레이어 이름 + #KR1" style={{width: '500px', marginLeft: '5px'}} />
      </S.SearchWrap>

    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    text-align: center;
    margin-top: 100px;
  `,
  SearchWrap: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
  `
};
