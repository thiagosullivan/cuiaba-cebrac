import React from 'react'
import TitleClass from '../titleClass'

import cddLogo from '../../assets/cdd-logo.jpg'
import { CddContainer } from './style'

function Cdd() {
  return (
    <CddContainer>
      <TitleClass
        title="Cuidador"
        imageUrl={cddLogo}
        classCss="title__cdd"
      />
    </CddContainer>
  )
}

export default Cdd