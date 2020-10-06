import React from "react";
import { Link } from "react-router-dom";
import Me from "../../assets/me.jpg";
import Moment from 'react-moment';

import "./Side.scss";

export default function Side(props) {
  const { allData, dark } = props;
  const data = allData.data.body;
  return (
    <div className={`side ${dark}`}>
      <div className="side__img">
        <img src={Me} alt="Cristian Marin" />
      </div>
      <div className="side__info">
        <h1>
          ¡Hola! Soy Cristian Marin. Soy Desarrollador Web y este es mi jardin
          digital, un espacio para compartir todo lo que he aprendido en el
          camino, ¡Echa un vistazo a mi <Link to="/blog">Blog</Link> ! es mi
          aporte como agradecimiento a la comunidad Dev que siempre nos saca de
          apuros.
        </h1>
      </div>
      <div className="side__tag-title">
        <p>Tags</p>
      </div>
      <div className="side__tags">
        {!allData.loading &&
          data[0].tags.map((tag, index) => {
            const classTag = () => {
              if (tag === "javascript") {
                return `side__tags-js ${dark}`;
              } else {
                return `side__tags-rc ${dark}`;
              }
            };
            return (
              <p className={classTag()} key={index}>
                {tag}
              </p>
            );
          })}
      </div>
      <div className="side__tag-title">
        <p>Fecha de publicacion</p>
      </div>
      <div className="side__date">
      {!allData.loading &&
      data.map((date,index)=>{
     
      return <p key={index}><Moment format="LL">{date.createdAt}</Moment></p>
      })
      }
      </div>
    </div>
  );
}
