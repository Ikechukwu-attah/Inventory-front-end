import React from 'react'
import phone1 from '../../Images/phone1.svg'
import vshape3 from '../../Images/vshape3.svg'

export default function InventoryMgt() {
    return (
        <div className="inventory">
            <div className="inventory__wrapper">
                <div className="inventory__wrapper--left">
                    <div className="inventory__image">
                        <img src={phone1} alt="phone" className="inventory__image--img" />
                        <img src={vshape3} alt="phone" className="inventory__image--shape3" />
                    </div>
                </div>
                <div className="inventory__wrapper--right">
                    <div className="inventory__text">
                        <div className="inventory__text--heading">
                            <h3 className="inventory__text--header">
                            Manage all <br />your <span className="inventory__text--span">inventory</span><br /> on the go
                            </h3>

                            <p className="inventory__text--details">
                            Manage your inventory across multiple sales<br /> channels, get restock alerts, collect all types<br /> of payments with one tool.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
