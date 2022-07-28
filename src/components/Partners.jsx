import React from "react";
import Binance from "../assets/SVGs/binance-logo.svg";
import Cardano from "../assets/SVGs/cardano-logo.svg";
import Coinbase from "../assets/SVGs/coinbase-logo.svg";
import Coincheck from "../assets/SVGs/coincheck-logo.svg";
import Paradigm from "../assets/SVGs/paradigm-logo.svg";
export default function Partners() {
  return (
    <section className="partners">
      <div className="partners-row">
        <img src={Binance} alt="" />
        <img src={Cardano} alt="" />
        <img src={Coincheck} alt="" />
        <img src={Paradigm} alt="" />
        <img src={Coinbase} alt="" />
      </div>
    </section>
  );
}
