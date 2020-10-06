import React from "react";
import {Helmet} from 'react-helmet';
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import PostLink from "../components/PostLink";
import Projects from "../components/Projects";

export default function home(props) {
  const { allData, setDark, dark } = props;
  return (
    <>
      <Helmet>
        <title>Cristian Marin</title>
        <meta name="description" content="Cristian Marin - Front End Developer Junior - Blog - Tutoriales - Codigo "
          data-react-helmet="true"
        />
      </Helmet>
      <NavBar setDark={setDark} dark={dark} />
      <Hero allData={allData} dark={dark}/>
      <PostLink allData={allData} dark={dark}/>
      <Projects dark={dark}/>
      <Footer dark={dark}/>
    </>
  );
}
