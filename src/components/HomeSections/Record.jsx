import React from 'react'
import record from '../../Images/record.svg'
import vshaperecord from '../../Images/vshape-record.svg'


export default function Record() {
    return (
        <div className="record">
            <div className="record__wrapper">
                <div className="record__wrapper--left">
                          <div className="record__text">
                        <div className="record__text--heading">
                            <h3 className="record__text--header">
                            Record your <br /> <span className="record__text--span">sales and <br /> expences</span><br /> 
                            </h3>

                            <p className="record__text--details">
                            Generate and send digital receipts and <br /> invoices all from your smartphone.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="record__wrapper--right">
                    <div className="record__image">
                         <img src={vshaperecord} alt="phone" className="record__image--vshape" /> 
                        <img src={record} alt="phone" className="record__image--img" />
                    </div> 
                </div>
            </div>
        </div>
    )
}
