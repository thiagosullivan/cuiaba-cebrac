import React from 'react'
import { NavHead } from './style'

function NavHeader() {
  return (
    <NavHead>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Assistente<br/>Administrativo</a>
        </li>
        <li>
          <a href="#">Atendente de<br/>Farmácia</a>
        </li>
        <li>
          <a href="#">Cebrac<br/>English</a>
        </li>
        <li>
          <a href="#">Cuidador</a>
        </li>
        <li>
          <a href="#">Logística</a>
        </li>
        <li>
          <a href="">Manutenção de Celulares e<br/>Computadores</a>
        </li>
        <li>
          <a href="">Profissional de<br/>Beleza</a>
        </li>
      </ul>
    </NavHead>
  )
}

export default NavHeader