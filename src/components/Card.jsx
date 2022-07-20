import React from 'react'
import Button from './Button'

export default function Card({ bgImage, deadline, name, underlined, crypto, dollars, artists }) {
    const bg = {
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
    return (
        <div className="card" style={bg}>
            <div className="deadline">Ending In: <span className="deadline-time">{deadline}</span></div>
            <div className="artists">
                {artists.map((artist) => (
                    <img src={artist} alt="" />
                ))}
            </div>
            <div className="blurred">
                <div>
                    <div className="nft-details">
                        <div className="introd">
                            <p className="nft-name">{name}</p>
                            <p className="underlined">{underlined}</p>
                        </div>
                        <div className="price">
                            <p className="crypto">{crypto}</p>
                            <p className="dollars">{dollars}</p>
                        </div>
                    </div>
                    <div className="card-buttons">
                        <div className="bid">
                            <Button text={"Place A bid"} styleClass={"bid-button button"} />
                        </div>
                        <div className="artwork">
                            <Button text={"View Artwork"} styleClass={"artwork-button button"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
