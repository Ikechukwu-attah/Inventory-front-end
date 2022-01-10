import React from "react";
import google from "../../Images/Svg/google.svg";
import apple from "../../Images/Svg/appledarker.svg";
import screen from "../../Images/Svg/screen.svg";
import vshaperecord from "../../Images/Svg/vshape-record.svg";

export default function AppDownload() {
  return (
    <div className="appDownload">
      <div className="appDownload__wrapper">
        <div className="appDownload__left">
          <div className="appDownload__left--text">
            <p className="appDownload__left--header">Download The App</p>
            <h2 className="appDownload__left--heading">
              Get Started With Vedeez Today
            </h2>
            <p className="appDownload__left--details">
              Join thousands of businesses around Nigeria <br /> using Veedez to
              manage and grow their <br /> businesses.
            </p>

            <div className="appDownload__btnContainer">
              <h3 className="appDownload__btnContainer--text">Download now</h3>
              <div className="appDownload__btn">
                <button className="download-button download-button--white  mr-2 ">
                  <img src={google} alt="google plac icon" />
                  <div>
                    <p>Get it on</p>
                    <h5>Google play</h5>
                  </div>
                </button>

                <button className="download-button download-button--white ">
                  <img src={apple} alt="google plac icon" />
                  <div>
                    <p>Get it on</p>
                    <h5>Apple play</h5>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="appDownload__right">
          <div className="appDownload__image">
            <img
              src={vshaperecord}
              alt="screen"
              className="appDownload__vshape"
            />
            <img src={screen} alt="screen" className="appDownload__img" />
          </div>
        </div>
      </div>
    </div>
  );
}
