import React from 'react'

export default function SingleStep({ Icon, title, description }) {
    return (
        <div className="step">
            <div>
                <img src={Icon} alt="" />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}
