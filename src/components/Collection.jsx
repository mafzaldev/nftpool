import React from 'react'
import Image from "../images/Collections/Collection-01.png";
export default function Collection() {
    return (
        <div className="collection">
            <div className="details">
                <span>1.</span>
                <span><img src={Image} alt="" /></span>
                <div className="name-coll">
                    <p className="name">BoredApeYacht</p>
                    <p className="amount">$21,017,447</p>
                </div>
            </div>
        </div>
    )
}
