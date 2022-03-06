import React from 'react'
import TitleClass from '../titleClass'

import engLogo from '../../assets/eng-logo.jpg'
import { EngContainer } from './style'

function Eng() {
  return (
    <EngContainer>
      <TitleClass
        title="Cebrac English"
        imageUrl={engLogo}
        classCss="title__eng"
      />
    </EngContainer>
  )
}

export default Eng