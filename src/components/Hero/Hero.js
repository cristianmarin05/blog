import React from "react";
import { Link } from "react-router-dom";
import Me from "../../assets/me.jpg";
import "./Hero.scss";

export default function Hero(props) {
 const {dark} = props;

  return (
    <header className={`hero ${dark}`}>
      <main className="hero__main">
        <div className="hero__main-info">
          <p>¡Hola! Soy Cristian Marin.</p>
          <h1>
            Soy Desarrollador Front End y este es mi jardin digital, un espacio para
            compartir todo lo que he aprendido en el camino, ¡Echa un vistazo a
            mi <Link to="/blog">Blog</Link> ! es mi aporte como agradecimiento a
            la comunidad Dev que siempre nos saca de apuros.
          </h1>
        </div>
        <div className="hero__main-img">
          <img src={Me} alt="Cristian marin" />
        </div>
     
      </main>
    </header>
  );
}
