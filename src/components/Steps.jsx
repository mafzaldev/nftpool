import React from 'react'
import SingleStep from './SingleStep.jsx'
import Arrow from "../images/SVGs/Arrow.svg"
import Bag from "../images/SVGs/Bag.svg"
import Wallet from "../images/SVGs/Wallet.svg"

export default function Steps() {
    return (
        <section className="steps">
            <h2>Create and sell your NFTs</h2>
            <div className="steps-row">
                <SingleStep Icon={Wallet} title={"Connect Wallet"} description={"We have partners to connect wallets and it is very easy to access for you."} />
                <SingleStep Icon={Bag} title={"NFT Marketplace"} description={"We provide a marketplace to buy or sell creator's collections of NFT."} />
                <SingleStep Icon={Arrow} title={"Collect NFT"} description={"Add your favourite NFT from our marketplace to your collection from now."} />
            </div>
        </section>
    )
}
