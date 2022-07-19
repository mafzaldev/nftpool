import React from 'react'
import Binance from "../images/binance-logo.svg"
import Cardano from "../images/cardano-logo.svg"
import Coinbase from "../images/coinbase-logo.svg"
import Coincheck from "../images/coincheck-logo.svg"
import Paradigm from "../images/paradigm-logo.svg"
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
