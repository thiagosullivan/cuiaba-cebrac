import React from 'react'
import { FormContainer } from './style'

function FormHero() {
  return (
    <FormContainer>
      <input type="text" required placeholder="Seu Nome"/>
      <input type="text" required placeholder="Power Code"/>
      <input type="phone" required placeholder="Seu Telefone"/>
      <input type="select" required placeholder="Selecione um curso"/>
      <button>Enviar</button>
    </FormContainer>
  )
}

export default FormHero