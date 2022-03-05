import React from 'react'
import Image from 'next/image';

import { BottomHead, HeaderContainer, TopHead } from './style';
import NavHeader from './navHeader';

import mtFlag from '../../assets/mt-bandeira.jpg';
import headLogo from '../../assets/cebrac-logo.png';

function Header() {
  return (
    <HeaderContainer>
      <TopHead>
        <div className='head__flag'>
          <Image
            src={mtFlag}
            width={30}
            height={20}
          />
        </div>
        <p>Cuiabá - MT</p>
      </TopHead>
      <BottomHead>
        <div className='header__logo'>
          <Image
            src={headLogo}
            width={145}
            height={40}
          />
        </div>
        <NavHeader />
      </BottomHead>
    </HeaderContainer>
  )
}

export default Header