import React from "react";
import Icon from "../assets/SVGs/Icon.svg";
import bgImage001 from "../assets/BGs/BG001.png";
import bgImage002 from "../assets/BGs/BG002.png";
import bgImage003 from "../assets/BGs/BG003.png";

import Elipse01 from "../assets/Ellipses/Ellipse-01.png";
import Elipse02 from "../assets/Ellipses/Ellipse-02.png";
import Elipse03 from "../assets/Ellipses/Ellipse-03.png";
import Elipse04 from "../assets/Ellipses/Ellipse-04.png";
import Card from "./Card";
import Button from "./Button";

export default function Drops() {
  return (
    <section className="drops">
      <div className="header">
        <div className="heading">
          <h2>Latest Drops</h2>
          <span>
            <img src={Icon} alt="" />
          </span>
        </div>
        <div className="viewall">
          <Button text={"View All"} styleClass={"viewall-button button"} />
        </div>
      </div>
      <div className="drops-row">
        <Card
          bgImage={bgImage001}
          name={"Dieselpunk #07"}
          underlined={"Roman Klco"}
          crypto={"1.28 ETH"}
          dollars={"$3,618.36"}
          deadline={"01 : 22 : 40"}
          artists={[Elipse01, Elipse02, Elipse03]}
        />
        <Card
          bgImage={bgImage002}
          name={"100 ETH ICON #01"}
          underlined={"Taoliang Wang"}
          crypto={"1.00 ETH"}
          dollars={"$3,618.36"}
          deadline={"01 : 22 : 40"}
          artists={[Elipse01, Elipse02, Elipse03, Elipse04]}
        />
        <Card
          bgImage={bgImage003}
          name={"City of Love"}
          underlined={"Sufjan Stevens"}
          crypto={"1.88 ETH"}
          dollars={"$3,618.36"}
          deadline={"01 : 22 : 40"}
          artists={[Elipse01, Elipse02, Elipse03]}
        />
      </div>
      <div className="section-footer">
        <Button text={"View All"} styleClass={"viewall-button button"} />
      </div>
    </section>
  );
}
