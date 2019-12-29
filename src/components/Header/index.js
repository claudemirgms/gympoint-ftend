import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Head, Logo, Nav, Aside } from './styles';

import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <Container>
      <Head>
        <Logo>          
          <img src={logo} alt="GYMPOINT" />            
          <strong>GYMPOINT</strong>          
        </Logo>
        <Nav>
          <ul>
            <li><Link to="/">ALUNOS</Link></li>
            <li><Link to="/">PLANOS</Link></li>
            <li><Link to="/">MATRÍCULAS</Link></li>
            <li><Link to="/">PEDIDOS DE AUXÍLIO</Link></li>
          </ul>          
        </Nav>
        <Aside>
          <div>
            <strong>Claudemir Santos</strong>
            <Link to="/">sair do sistema</Link>
            </div>
        </Aside>
      </Head>
    </Container>
  );
}
