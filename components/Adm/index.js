import React from 'react'
import Image from 'next/image';

import TitleClass from '../titleClass'
import { admData } from './adm-data';
import { AdmContainer } from './style'

import admLogo from '../../assets/adm-logo_1.jpg'

function Adm() {
  console.log(admData)
  return (
    <AdmContainer>
      <TitleClass
        title="Assistente Completo Administrativo"
        imageUrl={admLogo}
        classCss="title__adm"
      />
      <div>
        {admData.map((data, index) => {
          return (
            <div key={index}>
              <Image
                src={data.itemIcon}
                width={75}
                height={75}
              />
              <h4>{data.itemTitle}</h4>
              <p>{data.itemText}</p>
            </div>
          )
        })}
      </div>
    </AdmContainer>
  )
}

export default Adm