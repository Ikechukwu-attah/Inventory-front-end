import React from 'react'
import google from '../../Images/google.svg'
import apple from  '../../Images/apple.svg'
import screen from  '../../Images/screen.svg'
import vshaperecord from '../../Images/vshape-record.svg'

export default function AppDownload() {
    return (
        <div className="appDownload">
            <div className="appDownload__wrapper">
                <div className="appDownload__left">
                    <div className="appDownload__left--text">
                        <p className="appDownload__left--header">Download The App</p>
                        <h2 className="appDownload__left--heading">Get Started With Vedeez Today</h2>
                        <p className="appDownload__left--details">
                        Join thousands of businesses around Nigeria <br /> using Veedez to 
                        manage and grow their <br /> businesses.
                        </p>
                    </div>
                    <div className="appDownload__btnContainer">
                       <div className="appDownload__btnContainer--heading">
                             <h3 className="appDownload__btnContainer--text">Download now</h3>
                           </div> 
                        
                           <div className="header__wrapper--downloadbtn">
                               <div className="header__wrapper--googlePlay appDownload__bgChange">
                                    <div className="header__wrapper--googleWrapper">
                                        <img src={google} alt="google" className="header__wrapper--iconGoogle" />
                                        <div className="header__wrapper--container">
                                        <span className="header__wrapper--spanGoogle appDownload__textColor">GET IT ON</span>
                                        <button className="header__wrapper--btnGoogle appDownload__textColor">Google Play</button>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="header__wrapper--googlePlay header__moveRight appDownload__bgChange">
                                    <div className="header__wrapper--googleWrapper">
                                        <img src={apple} alt="google" className="header__wrapper--iconGoogle appDownload__bgColor" />
                                        <div className="header__wrapper--container">
                                        <span className="header__wrapper--spanGoogle appDownload__textColor">DOWNLOAD ON THE</span>
                                        <button className="header__wrapper--btnGoogle appDownload__textColor">Apple Store</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="appDownload__right">
                <div className="appDownload__image">
                     <img src={vshaperecord} alt="screen" className="appDownload__image--vshape" />
                    <img src={screen} alt="screen" className="appDownload__image--img" />
                </div>
                </div>
            </div>

            
        </div>
    )
}
