import React from "react";
import "./register.scss";
import img from "../../Images/image01.jpg";
import bg from "../../Images/barber-shop01.jpg";

export default function Register() {
  return (
    <section className="register">
      <div className="register__bg">
        <img src={bg} alt="" />
      </div>
      <div className="container">
        <div className="register__box">
          <div className="register__box__form">
            <h2>Criar nova conta</h2>
            <p>Crie uma nova conta para você.</p>

            <form action="">
              <div className="form__field">
                <label htmlFor="">CPF:</label>
                <input type="number" placeholder='CPF com 11 dígitos' required />
              </div>

              <div className="form__field">
                <label htmlFor="">Nome completo</label>
                <input type="text" placeholder='Seu nome completo' required />
              </div>

              <div className="form__field">
                <label htmlFor="">Senha:</label>
                <input type="password" placeholder='Defina uma senha' required />
              </div>

              <div className="form__field">
                <label htmlFor="">Repetir senha:</label>
                <input type="password" placeholder='Confirmar senha' required />
              </div>

              <button type="button" id="cadastrar">
                Criar uma conta
              </button>
            </form>
          </div>

          <div className="register__box__img">
            <img src={img} alt="" />
            <div className="register__box__img__bg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
