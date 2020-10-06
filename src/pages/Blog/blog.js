import React from "react";
import {Helmet} from 'react-helmet';
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PostLink from "../../components/PostLink";

import './blog.scss'

export default function Blog(props) {
  const {allData, setDark, dark} = props;
  return (
    <>
      <Helmet>
        <title>Blog | Cristian Marin</title>
        <meta name="description" content="Blog desarrollo web"
          data-react-helmet="true"
        />
      </Helmet>
      <NavBar setDark={setDark} dark={dark}/>
      <div className={`blog ${dark}`}>
        <h1>Blog</h1>
        <h2>En mi camino como desarrollador es normal toparme con “problemas” todos los dias, esto solo significa que aprendere algo nuevo, para ser honesto algunas veces puede ser muy frustrante,
           es un sube y baja de emociones.
            En este blog podras encontrar conceptos, codigo, tutoriales... 
            Es mi aporte como agradecimiento a la comunidad Dev que siempre nos sacaran de dudas!</h2>
      </div>
      <PostLink allData={allData} dark={dark}/>
      <Footer dark={dark}/>
    </>
  );
}
