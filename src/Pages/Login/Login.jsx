import React from "react";
import "./login.scss";
import img from "../../Images/image01.jpg";
import bg from "../../Images/barber-shop01.jpg";

export default function Login() {
  return (
    <section className="login">
      <div className="login__bg">
        <img src={bg} alt="" />
      </div>
      <div className="container">
        <div className="login__box">
          <div className="login__box__form">
            <h2>Entrar</h2>
            <p>Faça login para consultar e/ou marcar horários.</p>

            <form action="">
              <div className="form__field">
                <label htmlFor="">CPF:</label>
                <input type="number" placeholder='Ex.: 88277633212' required />
              </div>

              <div className="form__field">
                <label htmlFor="">Senha:</label>
                <input type="password" required />
              </div>

              <div className="form__option">
                <div>
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember">Lembrar-me</label>
                </div>
                <a href="">Esqueci a senha</a>
              </div>

              <button type="submit" id="login">
                Login
              </button>
            </form>

            <hr />

            <a href="/register">
              <button type="button" id="cadastrar">
                Criar uma conta
              </button>
            </a>

          </div>

          <div className="login__box__img">
            <img src={img} alt="" />
            <div className="login__box__img__bg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
