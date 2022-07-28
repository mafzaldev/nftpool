import React from "react";
import FooterLogo from "../assets/SVGs/FooterLogo.svg";
import Insta from "../assets/SVGs/Group 9.svg";
import Discord from "../assets/SVGs/Group 10.svg";
import Telegram from "../assets/SVGs/Group 11.svg";
import Twitter from "../assets/SVGs/Group 12.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src={FooterLogo} alt="" />
      </div>
      <div className="footer-content">
        <p>Copyright © 2022 NFTPOOL. All rights reserved</p>
      </div>
      <div className="footer-socials">
        <span>
          <a href="#/">
            <img src={Insta} alt="" />
          </a>
        </span>
        <span>
          <a href="#/">
            <img src={Discord} alt="" />
          </a>
        </span>
        <span>
          <a href="#/">
            <img src={Telegram} alt="" />
          </a>
        </span>
        <span>
          <a href="#/">
            <img src={Twitter} alt="" />
          </a>
        </span>
      </div>
    </footer>
  );
}
