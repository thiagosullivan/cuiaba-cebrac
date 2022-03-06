import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare } from 'react-icons/fa';

import { FooterBottom, FooterContainer, FooterTop } from './style'
import logoFooter from '../../assets/cebrac-logo.png';

function FooterSection() {
  return (
    <FooterContainer>
      <div className='footer__content'>
        <FooterTop>
          <div className="footer__logo">
            <Link href="/">
              <Image
                src={logoFooter}
                width={215}
                height={60}
              />
            </Link>
          </div>
          <ul>
            <p>Cursos</p>
            <li>
              <a href="">Assistente Administrativo Completo</a>
              </li>
            <li>
              <a href="">Atendente de Farmácia</a>
              </li>
            <li>
              <a href="">Cebrac English</a>
            </li>
            <li>
              <a href="">Cuidador</a>
            </li>
            <li>
              <a href="">Logística Completa</a>
            </li>
            <li>
              <a href="">Manutenção de Celulares<br/>
              e Computadores</a>
            </li>
            <li><a href="">Profissional da Beleza</a>
            </li>
          </ul>
          <div className='footer__social_container'>
            <p>Redes Sociais</p>
            <div className='footer__social_links'>
              <a href='https://www.facebook.com/cebrac.unidadecuiaba/'>
                <FaFacebookSquare />
              </a>
              <a href="https://www.instagram.com/cebrac.cuiaba/">
                <FaInstagramSquare />
              </a>
              <a href="https://www.youtube.com/channel/UCIRwHwWL_B-pgkfoUFvoXGw">
                <FaYoutubeSquare />
              </a>
              <a href="#">
                <FaTwitterSquare />
              </a>
            </div>
          </div>
        </FooterTop>
      </div>
      <FooterBottom>
        <p>© 2022 <span>CEBRAC Cuiabá</span> - Desenvolvido por <span>Digital Cloud Brasil</span>.</p>
      </FooterBottom>
    </FooterContainer>
  )
}

export default FooterSection