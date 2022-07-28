import React from "react";

export default function Button({ text, styleClass }) {
  return (
    <a href="#/" className={styleClass}>
      {text}
    </a>
  );
}
