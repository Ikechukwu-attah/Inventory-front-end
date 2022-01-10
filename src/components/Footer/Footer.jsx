import React from "react";
import logo from "../../Images/Svg/logo.svg";
import send from "../../Images/Svg/send.svg";
import linkdln from "../../Images/Svg/linkdln.svg";
import twitter from "../../Images/Svg/twitter.svg";
import facebook from "../../Images/Svg/facebook.svg";
import instagram from "../../Images/Svg/instagram.svg";
export default function Footer() {
  return (
    <div className="mainFooter">
      <div className="mainFooter__left">
        <div className="mainFooter__leftContent">
          <img src={logo} alt="logo" className="mainFooter__img" />
          <p className="mainFooter__text">
            Alerzo Place, Ring-Road, Challenge, Ibadan.
          </p>
        </div>
      </div>
      <div className="mainFooter__center">
        <p className="mainFooter__heading">Subscribe to our newsletter</p>
        <div className="mainFooter__subscribe">
          <input
            type="text"
            name=""
            id=""
            className="mainFooter__subInput"
            placeholder="Your email address"
          />
          <button>
            <img src={send} alt="send" className="mainFooter__subIcon" />
          </button>
        </div>

        <p className="mainFooter__centerText">
          FAQ | Blog | Contact Us | Terms of Service
        </p>
      </div>
      <div className="mainFooter__right">
        <div className="mainFooter__social">
          <div className="mainFooter__roundShape mainFooter__linkedlnbg">
            <img
              src={linkdln}
              alt="linkedln"
              className="mainFooter__linkedln "
            />
          </div>

          <div className="mainFooter__roundShape">
            <img src={twitter} alt="twitter" className="mainFooter__twitter" />
          </div>

          <div className="mainFooter__roundShape">
            <img
              src={facebook}
              alt="facebook"
              className="mainFooter__facebook"
            />
          </div>

          <div className="mainFooter__roundShape">
            <img
              src={instagram}
              alt="instagram"
              className="mainFooter__instagram"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
