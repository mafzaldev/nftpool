import React from "react";
import DownIcon from "../assets/SVGs/chevron-down.svg";

export default function Filter({ styleClass, text }) {
  return (
    <div className={styleClass}>
      {text}
      <span>
        <img src={DownIcon} alt="" />
      </span>
    </div>
  );
}
