import React from 'react'
import Image from 'next/image';

import TitleClass from '../titleClass'
import { admData } from './adm-data';
import { AdmContainer, AsideClass, AsideImage } from './style'

import admLogo from '../../assets/adm-logo_1.jpg'

function Adm() {
  console.log(admData)
  return (
    <AdmContainer id="adm">
      <TitleClass
        title="Assistente Completo Administrativo"
        imageUrl={admLogo}
        classCss="title__adm"
      />
      <div className='class_info_bottom'>
        <AsideClass>
          <AsideImage imgUrl='https://raw.githubusercontent.com/thiagosullivan/cuiaba-cebrac/main/assets/img-adm.jpg'>
            <p>Fundamental e perfeito para o<br/>
            mercado de trabalho.</p>
            <p>Conheça mais <span>sobre o curso</span></p>
            <p>Com o CEBRAC no currículo é assim: você mais perto do mercado de trabalho e da realização dos seus sonhos. O CEBRAC conta com educadores especializados e uma metodologia de ensino diferenciada, garantindo uma formação pessoal e profissional de qualidade.</p>
          </AsideImage>
          <iframe width="500" height="315" src="https://www.youtube.com/embed/NUmMznITN8A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </AsideClass>
        <div className='class__container__info'>
          <div className='subtitle__adm'>
            <h3>Conteúdo do curso</h3>
            <p>Todos os Cursos CEBRAC têm como foco a Formação Empreendedora do aluno com ferramentas interdisciplinares, Oficinas, Desenvolvimento da Criatividade e da Liderança no Meio Social.</p>
          </div>
          {admData.map((data, index) => {
            return (
              <div className='class__container__info__content' key={index}>
                <div className='class_desc_icon'>
                  <Image
                    src={data.itemIcon}
                    width={75}
                    height={75}
                  />
                </div>
                <div className='class__infos_txt'>
                  <h4>{data.itemTitle}</h4>
                  <p>{data.itemText}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </AdmContainer>
  )
}

export default Adm