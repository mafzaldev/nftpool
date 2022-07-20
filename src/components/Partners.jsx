import React from 'react'
import Binance from "../images/SVGs/binance-logo.svg"
import Cardano from "../images/SVGs/cardano-logo.svg"
import Coinbase from "../images/SVGs/coinbase-logo.svg"
import Coincheck from "../images/SVGs/coincheck-logo.svg"
import Paradigm from "../images/SVGs/paradigm-logo.svg"
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
    )
}
