import React from 'react';
import Image from 'next/image';

import bannerHero from '../../assets/banner-1.5.jpg';
import FormHero from './FormHero';

import { HeroContainer } from './style';

function HeroSection() {
  return (
    <HeroContainer>
      <div className='banner__hero_img'>
        <Image
          src={bannerHero}
        />
      </div>
      <FormHero />
    </HeroContainer>    
  )
}

export default HeroSection