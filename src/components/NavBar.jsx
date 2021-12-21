import React from 'react'
import logo from '../Images/logo.svg'

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar__wrapper">
                <img src= {logo} alt="logo" className="navbar__wrapper--logo" />
                <button className="navbar__wrapper--btn btn">Help Center</button>
            </div>
            
        </div>
    )
}
