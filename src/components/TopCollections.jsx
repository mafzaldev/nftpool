import React from "react";
import Collection from "./Collection.jsx";
import Button from "./Button.jsx";
import Icon from "../assets/SVGs/Icon.svg";
import Image01 from "../assets/Collections/Image01.png";
import Image02 from "../assets/Collections/Image02.png";
import Image03 from "../assets/Collections/Image03.png";
import Image04 from "../assets/Collections/Image04.png";
import Image05 from "../assets/Collections/Image05.png";
import Image06 from "../assets/Collections/Image06.png";
import Image07 from "../assets/Collections/Image07.png";
import Image08 from "../assets/Collections/Image08.png";
import Image09 from "../assets/Collections/Image09.png";
import Image10 from "../assets/Collections/Image10.png";
import Image11 from "../assets/Collections/Image11.png";
import Image12 from "../assets/Collections/Image12.png";

export default function TopCollections() {
  return (
    <section className="collections">
      <div className="header">
        <div className="heading">
          <h3>
            Top collections over <br /> last 7 days
          </h3>
          <span>
            <img src={Icon} alt="" />
          </span>
        </div>
        <div className="viewall">
          <Button text={"View All"} styleClass={"viewall-button button"} />
        </div>
      </div>
      <div className="collections-grid">
        <Collection
          sr={1}
          Image={Image01}
          collection_name={"BoredApeYacht"}
          amount={"$21,017,447"}
        />
        <Collection
          sr={2}
          Image={Image02}
          collection_name={"Lil Heroes"}
          amount={"$6,655,918"}
        />
        <Collection
          sr={3}
          Image={Image03}
          collection_name={"FOMO MOFOS"}
          amount={"$5,880,244"}
        />
        <Collection
          sr={4}
          Image={Image04}
          collection_name={"X Rabbits Club"}
          amount={"$5,399,078"}
        />
        <Collection
          sr={5}
          Image={Image05}
          collection_name={"IreneDAO"}
          amount={"$4,235,264"}
        />
        <Collection
          sr={6}
          Image={Image06}
          collection_name={"Mutant Ape Yacht"}
          amount={"$4,216,109"}
        />
        <Collection
          sr={7}
          Image={Image07}
          collection_name={"Azuki"}
          amount={"$3,716,376"}
        />
        <Collection
          sr={8}
          Image={Image08}
          collection_name={"CloneX"}
          amount={"$3,395,140"}
        />
        <Collection
          sr={9}
          Image={Image09}
          collection_name={"The Sandbox"}
          amount={"$3,055,888"}
        />
        <Collection
          sr={10}
          Image={Image10}
          collection_name={"PhantaBear"}
          amount={"$2,321,268"}
        />
        <Collection
          sr={11}
          Image={Image11}
          collection_name={"The Rebels"}
          amount={"$2,204,428"}
        />
        <Collection
          sr={12}
          Image={Image12}
          collection_name={"CryptoSkulls"}
          amount={"$1,826,339"}
        />
      </div>
      <div className="viewall-sm">
        <Button text={"View All"} styleClass={"viewall-button button"} />
      </div>
    </section>
  );
}
