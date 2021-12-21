import React from 'react'
import track from '../../Images/track.svg'
import vshaperecord from '../../Images/vshape-record.svg'

export default function Track() {
    return (
        <div className="track">
            <div className="track__wrapper">
                <div className="track__wrapper--left">
                          <div className="track__text">
                        <div className="track__text--heading">
                            <h3 className="track__text--header">
                            Track your <br /> business <br /> <span className="track__text--span">performance </span>
                            </h3>

                            <p className="track__text--details">
                            Get real-time insight into how your business <br /> is doing. Track transactions, sales <br /> and revenue. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="track__wrapper--right">
                    <div className="track__image">
                        <img src={vshaperecord} alt="phone" className="track__image--track" />
                        <img src={track} alt="phone" className="track__image--img" />
                    </div> 
                </div>
            </div>
        </div>
    )
}
