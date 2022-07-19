import React from 'react'
import Logo from "../images/nftpool-logo.svg"
import Nav from "../images/nav.svg"
import Button from './Button'
export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="nav-links">
                <a href="#/">Marketplace</a>
                <a href="#/">Artists</a>
                <a href="#/">Commmunity</a>
            </div>
            <span className="ham-burger">
                <img src={Nav} alt="" />

            </span>
            <div className="register">
                <Button text={"Register"} styleClass={"register-button button"} />
            </div>
        </nav>
    )
}
