import React from 'react'
import { FormContainer } from './style'

function FormHero() {
  return (
    <FormContainer id="form">
      <input type="text" required placeholder="Seu Nome"/>
      <input type="text" required placeholder="Power Code"/>
      <input type="phone" required placeholder="Seu Telefone"/>
      <select>
        <option value="" disabled selected>Selecione um curso</option>
        <option value="Administração">Assistente Completo Administrativo</option>
        <option value="Farmacia">Atendente de Farmácia</option>
        <option value="Ingles">Cebrac English</option>
        <option value="Cuidador">Cuidador</option>
        <option value="Logistica">Logística Completa</option>
        <option value="Manutenção Celular">Manutenção de Celulares e Computadores</option>
        <option value="Profissional da Beleza">Profissional da Beleza e Bem Estar</option>
      </select>
      <button>Enviar</button>
    </FormContainer>
  )
}

export default FormHero