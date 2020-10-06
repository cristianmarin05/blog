import React from "react";
// import {Helmet} from 'react-helmet';
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Post from "../../components/Post";

import "./post.scss";

export default function post(props) {
  const {setDark, dark} = props;
  return (
    <>
      <NavBar setDark={setDark} dark={dark}/>
      <div className="container">
        <Post dark={dark} />
      </div>
      <Footer dark={dark}/>
    </>
  );
}
