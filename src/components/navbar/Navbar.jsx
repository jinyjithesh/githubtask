import React from "react";
import bootstrap from "bootstrap";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <button className="navButton">For Your</button>
        <button className="navButton">Following</button>
        <span className="logo"></span>
        <div className="navItem">
          <Link>Send feedback</Link>
          <button className="navButton">Filter</button>
        </div>
      </div>
    </div>
  );
};
