import React, {useEffect} from 'react'
import Image from 'next/image';

import { BottomHead, HeaderContainer, TopHead } from './style';
import NavHeader from './navHeader';

import mtFlag from '../../assets/mt-bandeira.jpg';
import headLogo from '../../assets/cebrac-logo.png';
import NavHeaderDesktop from './navHeader';
import NavHeaderMobile from './navHeaderMobile';

function Header() {

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = (e) => {
    const headerMenu = document.querySelector('#bottom__header');
    const scrollTop = window.scrollY;
    scrollTop >= 28 ? headerMenu.classList.add('is-sticky') : headerMenu.classList.remove('is-sticky');
  }

  return (
    <HeaderContainer>
      <TopHead>
        <div className='head__flag'>
          <Image
            src={mtFlag}
            width={30}
            height={20}
            alt="Icone"
          />
        </div>
        <p>Cuiabá - MT</p>
      </TopHead>
      <BottomHead
        id='bottom__header'
      >
        <div className='header__logo'>
          <Image
            src={headLogo}
            width={145}
            height={40}
            alt="Icone"
          />
        </div>
        <NavHeaderDesktop />
        <NavHeaderMobile />
      </BottomHead>
    </HeaderContainer>
  )
}

export default Header