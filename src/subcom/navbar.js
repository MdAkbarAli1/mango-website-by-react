import React from "react";
import photo from "../images/instagram.png";
import photo1 from "../images/twitter.png";
import photo2 from "../images/youtube.png";

import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav className="nav">
        <div className="logo">
          <h1>
            <div>
              {" "}
              <span>A</span>pna
              <span>G</span>rden
            </div>
          </h1>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/2.jpg"}
              width="70%"
              height="35px"
            ></img>
          </div>
        </div>

        <div className="feature">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Servicess</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="slink">
          <ul>
            <li>
              <a href="https://www.youtube.come">
                <img src={photo2} width="100%" height="30px"></img>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.come">
                <img src={photo} width="100%" height="30px"></img>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.come">
                <img src={photo1} width="100%" height="30px"></img>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.come">
                <img
                  src={process.env.PUBLIC_URL + "/images/facebook.png"}
                  width="100%"
                  height="30px"
                ></img>
              </a>
            </li>
          </ul>
        </div>
        <div>{props.children}</div>
      </nav>
    </>
  );
}

export default Navbar;
