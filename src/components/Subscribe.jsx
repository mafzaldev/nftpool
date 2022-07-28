import React from "react";
import Button from "./Button";
import bgImage from "../assets/BGs/SubscribeBG.png";
import Diamond from "../assets/BGs/Diamond.png";
import Star from "../assets/SVGs/Star.svg";

export default function Subscribe() {
  const bg = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  };
  return (
    <section className="subscribe">
      <img src={Diamond} alt="" className="diamond" />
      <div className="background" style={bg}>
        <div className="content">
          <div className="heading">
            <h3>Never miss a drop</h3>
            <span>
              <img src={Star} alt="" />
            </span>
          </div>

          <p>
            Access specially curated insights weekly from around the world of
            NFTs to keep yourself up to date with little effort.
          </p>
          <form>
            <input type="email" placeholder="Email Address" />
            <div className="subscribe-btn">
              <Button
                text={"Subscribe"}
                styleClass={"subscribe-button button"}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
