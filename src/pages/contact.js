import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Form from "../components/Form";
import {Helmet} from 'react-helmet';


export default function contact(props) {
  const {setDark, dark} = props;
  return (
    <>
     <Helmet>
        <title>Cristian Marin</title>
        <meta name="description" content="Cristian Marin - Front End Developer Junior - Blog - Tutoriales - Codigo "
          data-react-helmet="true"
        />
      </Helmet>
      <NavBar setDark={setDark} dark={dark}/>
      <Form dark={dark}/>
      <Footer dark={dark}/>
    </>
  );
}
