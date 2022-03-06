import React from 'react'
import TitleClass from '../titleClass'

import logLogo from '../../assets/log-logo.jpg'
import { LogContainer } from './style'

function Log() {
  return (
    <LogContainer>
      <TitleClass
        title="Logística Completa"
        imageUrl={logLogo}
        classCss="title__log"
      />
    </LogContainer>
  )
}

export default Log