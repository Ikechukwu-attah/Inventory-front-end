import React from 'react'
import google from '../Images/google.svg'
import apple from  '../Images/apple.svg'
import headerIMG from '../Images/headerIMG.svg'
import vshape1 from '../Images/vshape1.png'
import vshapeheader from '../Images/vshapeheader.svg'
import NavBar from './NavBar'


export default function Header() {
    return (
        <div className="header">
            <NavBar />
            <div className="header__wrapper">
                <div className="header__wrapper--text">
                    <h3 className="header__wrapper--heading">
                    Manage your <span className="header__wrapper--span">inventory</span> with ease
                    </h3>
                    <p className="header__wrapper--details">
                    Managing your business just got easier. Track your sales and expenses, 
                    send digital receipts and invoices,  all from your smartphone.
                    </p>

                      <div className="header__wrapper--downloadcontainer">
                           <h2 className="header__wrapper--downloadNowText">Download now</h2>
                           <div className="header__wrapper--downloadbtn">
                               <div className="header__wrapper--googlePlay">
                                    <div className="header__wrapper--googleWrapper">
                                        <img src={google} alt="google" className="header__wrapper--iconGoogle" />
                                        <div className="header__wrapper--container">
                                        <span className="header__wrapper--spanGoogle">GET IT ON</span>
                                        <button className="header__wrapper--btnGoogle">Google Play</button>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="header__wrapper--googlePlay header__moveRight">
                                    <div className="header__wrapper--googleWrapper">
                                        <img src={apple} alt="google" className="header__wrapper--iconGoogle" />
                                        <div className="header__wrapper--container">
                                        <span className="header__wrapper--spanGoogle">DOWNLOAD ON THE</span>
                                        <button className="header__wrapper--btnGoogle">Apple Store</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                                
                         
                      </div>
                </div>
                <div className="header__rightImg">
                   <img src={headerIMG} alt="girl" className="header__img1" />
                   <img src={vshapeheader} alt="vshape1" className="header__img2" />
                
                </div>
            </div>
        </div>
    )
}
