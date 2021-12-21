import React from 'react'
import logo from '../Images/logo.svg'
import send from '../Images/send.svg'
import linkdln from '../Images/linkdln.svg'
import twitter from '../Images/twitter.svg'
import facebook from '../Images/facebook.svg'
import instagram from '../Images/instagram.svg'
export default function Footer() {
    return (
        <div className="mainFooter">
            <div className="mainFooter__wrapper">
            <div className="mainFooter__left">
                <div className="mainFooter__left--content">
                    <img src={logo} alt="logo" className="mainFooter__left--img" />
                    <p className="mainFooter__left--text">
                    Alerzo Place, Ring-Road, Challenge, Ibadan.
                    </p>
                </div>
            </div>
            <div className="mainFooter__center">
               <div className="mainFooter__center--content">
                   <p className="mainFooter__center--heading">Subscribe to our newsletter</p>
                    <div className="mainFooter__center--subscribe">
                        <input type="text" name="" id="" className="mainFooter__center--subInput" placeholder="Your email address"/>
                        <button><img src={send} alt="send" className="mainFooter__center--subIcon" /></button>
                    </div>
               </div>
               <div className="mainFooter__center--paragraph">
               <p className="mainFooter__center--text">
                   FAQ   |   Blog   |   Contact Us   |   Terms of Service
                   </p>
               </div>
            </div>
            <div className="mainFooter__right">
                
                <div className="mainFooter__social">
                     <div className="mainFooter__social--roundShape mainFooter__social--linkedlnbg">
                     <img src={linkdln} alt="linkedln" className="mainFooter__social--linkedln " />
                     </div>
                   
                    <div className="mainFooter__social--roundShape">
                       <img src={twitter} alt="twitter" className="mainFooter__social--twitter" />
                    </div>
             
                    <div className="mainFooter__social--roundShape">
                          <img src={facebook} alt="facebook" className="mainFooter__social--facebook" />
                    </div>
                   
                    <div className="mainFooter__social--roundShape">
                       <img src={instagram} alt="instagram" className="mainFooter__social--instagram" />
                    </div>
                 
                </div>
                
                
            </div>
         </div>
        </div>
    )
}
