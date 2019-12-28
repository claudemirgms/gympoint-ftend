import React from "react";

import logo from "../../assets/logo.png";
import logoRight from "../../assets/logo-header-right.png";

//import logoRight from "../../assets/logo-right.png";
//import logoLeft from "../../assets/logo-left.png";

import {Container, Content, Logo, Form} from "./styles";

export default function SignIn() {
  function handleSubmit({email, password}) {
    alert(email)
  }
  return (
    <Container>
      <Content>
        <Logo>          
          <div>
            <img src={logo} alt="GYMPOINT" />                        
          </div>
          <div>
            <strong>GYMPOINT</strong>          
          </div>
        </Logo>
        <Form>
          <form onSubmit={handleSubmit} >
            <label>SEU E-MAIL</label>
            <input
              name="email" 
              type="email" 
              placeholder="exemplo@email.com" 
            />
            <label>SUA SENHA</label>
            <input 
              name="password" 
              type="password" 
              placeholder="*************" 
            />
            <button className="btn" type="submit">
              Entrar no sistema
            </button>
          </form>
          </Form>
      </Content>
    </Container>    
  );
}
