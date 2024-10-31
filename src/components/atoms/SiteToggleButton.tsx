import styled from '@emotion/styled';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { siteButton } from '@/data/constData';

type TProps = {
  path: string;
}

export const SiteToggleButton = ({ path }: TProps) => {

  return(
    <S.Wrapper>
      <ButtonGroup variant="text" aria-label="site-button">
        {siteButton?.map(item => (
          <Button key={item.path} disabled={path === item.path}>{item.title}</Button>
        ))}
      </ButtonGroup>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`

  `,
};