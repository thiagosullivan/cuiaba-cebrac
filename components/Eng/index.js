import React from 'react'
import TitleClass from '../titleClass'

import engLogo from '../../assets/eng-logo.jpg'
import { FmcContainer } from './style'

function Eng() {
  return (
    <FmcContainer>
      <TitleClass
        title="Cebrac English"
        imageUrl={engLogo}
        classCss="title__fmc"
      />
    </FmcContainer>
  )
}

export default Eng