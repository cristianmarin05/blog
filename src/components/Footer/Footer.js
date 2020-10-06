import React from "react";
import GitHub from "../../assets/github.png";
import { Link } from "react-router-dom";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";

import "./Footer.scss";

export default function Footer(props) {
  const {dark} = props;
  return (
    <footer className={`footer ${dark}`}>
      <div className="footer__links">
        <Link to="/blog">Blog</Link>
      
        <Link to="/contact">Contact</Link>
      </div>
      <div className="footer__img">
        <a href="https://github.com/cristianmarin05?tab=repositories" target="_blank">
          <img src={GitHub} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/cristian-marin-04024a178/" target="_blank">
          <LinkedIn />
        </a>
    
      </div>
    </footer>
  );
}
