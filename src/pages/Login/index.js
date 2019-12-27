import React from "react";

import logoRight from "../../assets/logo-right.png";
import logoLeft from "../../assets/logo-left.png";

import "./styles.css";

export default function SignIn() {
  function handleSubmit({email, password}) {
    alert(email)
  }
  return (
    <div className="container">
      <div className="content">
        <div className="logo">
          <div className="logoPaint">
            <div className="logoLeft">              
              <img src={logoLeft} className="logoLeft" alt="GYMPOINT" />
            </div>
            <div className="dotLeft" />
            <div className="logoRight">
              <img src={logoRight} className="logoRight" alt="GYMPOINT" />
            </div>
            <div className="dotRight" />
          </div>
          <div className="logoWrite">
            <strong>GYMPOINT</strong>
          </div>
        </div>
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
      </div>
    </div>
  );
}
