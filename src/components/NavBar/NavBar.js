import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Moon } from "../../assets/luna.svg";
import { ReactComponent as Sun } from "../../assets/sol.svg";

import "./NavBar.scss";

export default function NavBar(props) {
  const { setDark, dark } = props;
  var mode;
  const handleDarkMode = (e)=>{
    e.preventDefault();
    if(!dark){

      setDark('dark');
    }else{
      setDark("")
    }
  }
  return (
    <div className={`nav-bar  ${dark}`}>
      <div className="nav-bar__home">
        <Link to="/">
          <p>Cristian Marin</p>
        </Link>
      </div>
      <div className="nav-bar__links">
        <ol>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
       
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li onClick={handleDarkMode}>
             {
               !dark ? <Moon /> : <Sun />
             } 
          </li>
        </ol>
      </div>
    </div>
  );
}
