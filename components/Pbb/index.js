import React from 'react'
import TitleClass from '../titleClass'

import pbbLogo from '../../assets/pbb-logo.jpg'
import { PbbContainer } from './style'

function Pbb() {
  return (
    <PbbContainer>
      <TitleClass
        title="Profissional da Beleza e Bem Estar"
        imageUrl={pbbLogo}
        classCss="title__pbb"
      />
    </PbbContainer>
  )
}

export default Pbb