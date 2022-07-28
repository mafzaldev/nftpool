import React from "react";
export default function Collection({ sr, Image, collection_name, amount }) {
  return (
    <div className="collection">
      <div className="details">
        <span className="serial-no">{sr}&nbsp;.</span>
        <span>
          <img src={Image} alt="" />
        </span>
        <div className="name-coll">
          <p className="name">{collection_name}</p>
          <p className="amount">{amount}</p>
        </div>
      </div>
    </div>
  );
}
