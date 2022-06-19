import React from 'react';
import { ScrollContainer } from 'components/Common';
import { GET_WEBTOONS, fetcher } from 'utils/api';
import useSWR from 'swr';
import * as S from './styles';

export const WebtoonList = () => {
  const { data: webtoons } = useSWR(GET_WEBTOONS, fetcher);

  return (
    <ScrollContainer>
      {webtoons?.map(({ id, title, image, author }) => (
        <S.WebtoonContainer key={id}>
          <S.Image src={image} alt='webtoon' />
          <S.TextWrapper>
            <S.Title>{title}</S.Title>
            <S.Author>{author}</S.Author>
          </S.TextWrapper>
        </S.WebtoonContainer>
      ))}
    </ScrollContainer>
  );
};
