import React from 'react'
import invoice from '../../Images/invoice.svg'
import vshapeinvoice from '../../Images/vshape-invoice.svg'
export default function Invoice() {
    return (
        <div className="invoice">

<div className="invoice__wrapper">
                <div className="invoice__wrapper--left">
                    <div className="invoice__image">
                        <img src={vshapeinvoice} alt="phone" className="invoice__image--vshape" />
                        <img src={invoice} alt="phone" className="invoice__image--img" />
                    </div>
                </div>
                <div className="invoice__wrapper--right">
                    <div className="invoice__text">
                        <div className="invoice__text--heading">
                            <h3 className="invoice__text--header">
                            Send <span className="invoice__text--span">invoice</span> to <br /> your customers <br />  instantly 
                            </h3>

                            <p className="invoice__text--details">
                            Generate and send digital receipts and <br />  invoices all from your smartphone. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
              
        </div>
    )
}
