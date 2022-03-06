import React from 'react'
import TitleClass from '../titleClass'

import mccLogo from '../../assets/mcc-logo.jpg'
import { MccContainer } from './style'

function Mcc() {
  return (
    <MccContainer>
      <TitleClass
        title="Manutenção de Celulares e Computadores"
        imageUrl={mccLogo}
        classCss="title__mcc"
      />
    </MccContainer>
  )
}

export default Mcc