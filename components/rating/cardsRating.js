import React from 'react';
import Image from 'next/image';
import { CardsRatingContainer } from './style';

function CardsRating({ studantImg, studantName, studantRole, studantStars, studantComment }) {
  return (
    <CardsRatingContainer>
      <Image
        src={studantImg}
        width={150}
        height={150}
      />
      <h4>{studantName}</h4>
      <span>{studantRole}</span>
      <Image
        src={studantStars}
        width={165}
        height={25}
      />
      <p>"{studantComment}"</p>
    </CardsRatingContainer>
  )
}

export default CardsRating