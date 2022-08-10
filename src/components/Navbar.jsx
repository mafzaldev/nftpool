import React from "react";
import Logo from "../assets/SVGs/nftpool-logo.svg";
import Nav from "../assets/SVGs/nav.svg";
import Close from "../assets/SVGs/close.svg";
import Button from "./Button";
export default function Navbar() {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="nav-links">
        <a href="#/">Marketplace</a>
        <a href="#/">Artists</a>
        <a href="#/">Commmunity</a>
      </div>
      <label className="ham-burger" htmlFor="check">
        <img src={Nav} alt="" className="ham" />
        <img src={Close} alt="" className="close" />
      </label>
      <div className="register">
        <Button text={"Register"} styleClass={"register-button button"} />
      </div>
    </nav>
  );
}
