import React from "react";
import ris from "../Images/my-pic.jpg";
import email from "../Images/Mail.png";
import vector from "../Images/linkidin.png";

export default function Info() {
  return (
    <div className="info">
      <img src={ris} alt="" />
      <h1 className="info--name">OUNI Hamza</h1>
      <h3 className="info--title">Full Stack Web Developer</h3>
      <div className="info--buttons">
        <button>
          <img
            className="info--buttons--email"
            src={email}
            alt="Email Icon"
            width="50px"
            height="50px"
          />
          Email
        </button>
        <button className="info--buttons--linkedin">
          <img
            className="info--buttons--linkedin--icon"
            src={vector}
            alt="LinkedIn Icon"
            width="50px"
            height="50px"
          />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
