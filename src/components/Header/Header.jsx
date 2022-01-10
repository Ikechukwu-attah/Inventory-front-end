import React from "react";
import google from "../../Images/Svg/google.svg";
import apple from "../../Images/Svg/apple.svg";
import headerIMG from "../../Images/Svg/headerIMG.svg";
import vshapeheader from "../../Images/Svg/vshapeheader.svg";
import NavBar from "../NavBar";

export default function Header() {
  return (
    <header className="header">
      <NavBar />

      <div className="header__text">
        <h3 className="header__heading">
          Manage your <br /><span className="header__span">inventory</span> with ease
        </h3>
        <p className="header__details">
          Managing your business just got easier. Track your sales and expenses,
          send digital receipts and invoices, all from your smartphone.
        </p>

        <h2 className="header__downloadNowText">Download now</h2>
        <div className="header__buttons ">
          <button className="download-button mr-2">
            <img src={google} alt="google plac icon" />
            <div>
              <p>Get it on</p>
              <h5>Google play</h5>
            </div>
          </button>

          <button className="download-button ">
            <img src={apple} alt="google plac icon" />
            <div>
              <p>Get it on</p>
              <h5>Apple play</h5>
            </div>
          </button>
        </div>
      </div>
      <div className="header__rightImg">
        <img src={headerIMG} alt="girl" className="header__img1" />
        <img src={vshapeheader} alt="vshape1" className="header__vshape" />
      </div>
    </header>
  );
}
