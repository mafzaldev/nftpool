import React from "react";
import Icon from "../assets/SVGs/smoothray.svg";
import Card from "./Card";
import Filter from "./Filter";

import bgImage001 from "../assets/BGs/BG004.png";
import bgImage002 from "../assets/BGs/BG005.png";
import bgImage003 from "../assets/BGs/BG006.png";
import bgImage004 from "../assets/BGs/BG007.png";
import bgImage005 from "../assets/BGs/BG008.png";
import bgImage006 from "../assets/BGs/BG009.png";

import Elipse01 from "../assets/Ellipses/Ellipse-01.png";
import Elipse02 from "../assets/Ellipses/Ellipse-02.png";
import Elipse03 from "../assets/Ellipses/Ellipse-03.png";
import Elipse04 from "../assets/Ellipses/Ellipse-04.png";

export default function Explore() {
  return (
    <section className="explore">
      <div className="header">
        <div className="heading">
          <span>
            <img src={Icon} alt="" />
          </span>
          <h2>Explore NFTs collection</h2>
          <span>
            <img src={Icon} alt="" />
          </span>
        </div>
        <div className="filters">
          <Filter styleClass={"filter"} text={"Categories"} />
          <Filter styleClass={"filter"} text={"Status"} />
          <Filter styleClass={"filter"} text={"Price Range"} />
          <Filter styleClass={"filter-selected"} text={"Newest"} />
        </div>
      </div>
      <div className="nfts-grid">
        <Card
          bgImage={bgImage001}
          name={"Holographic #21"}
          underlined={"Staudinger"}
          crypto={"2.74 ETH"}
          dollars={"$3,618.36"}
          preference={true}
          artists={[Elipse01, Elipse02, Elipse03]}
        />
        <Card
          bgImage={bgImage002}
          name={"Mystic figures #06"}
          underlined={"Taoliang Wang"}
          crypto={"1.00 ETH"}
          dollars={"$3,618.36"}
          preference={true}
          artists={[Elipse01, Elipse02, Elipse03, Elipse04]}
        />
        <Card
          bgImage={bgImage003}
          name={"Apocalypse #12"}
          underlined={"Demilked"}
          crypto={"3.88 ETH"}
          dollars={"$3,618.36"}
          preference={true}
          artists={[Elipse01, Elipse02, Elipse03]}
        />{" "}
        <Card
          bgImage={bgImage004}
          name={"Kurenai #15"}
          underlined={"ArtStation"}
          crypto={"7.44 ETH"}
          dollars={"$3,618.36"}
          preference={true}
          artists={[Elipse01, Elipse02, Elipse03]}
        />
        <Card
          bgImage={bgImage005}
          name={"Alien Factory#09"}
          underlined={"Taoliang Wang"}
          crypto={"5.29 ETH"}
          dollars={"$3,618.36"}
          preference={true}
          isFavourite={true}
          artists={[Elipse01, Elipse02, Elipse03, Elipse04]}
        />
        <Card
          bgImage={bgImage006}
          name={"New Frontier #18"}
          underlined={"Beeple kein"}
          crypto={"4.83 ETH"}
          dollars={"$3,618.36"}
          preference={true}
          artists={[Elipse01, Elipse02, Elipse03]}
        />
      </div>
    </section>
  );
}
