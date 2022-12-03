import React from "react";
import twitter from "../Images/Twitter_Icon.png";
import facebook from "../Images/Facebook_Icon.png";
import instagram from "../Images/Instagram_Icon.png";
import github from "../Images/GitHub_Icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <img src={twitter} alt="Twitter" />
      <img src={facebook} alt="Facebook" />
      <img src={instagram} alt="Instagram" />
      <img src={github} alt="GitHub" />
    </div>
  );
}
