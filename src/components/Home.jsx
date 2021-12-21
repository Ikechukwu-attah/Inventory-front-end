import React from 'react'
import AppDownload from './HomeSections/AppDownload'
import InventoryMgt from './HomeSections/InventoryMgt'
import Record from './HomeSections/Record'
import Services from './HomeSections/Services'
import Track from './HomeSections/Track'
import Invoice from './HomeSections/Invoice'
                                   

export default function Home() {
    return (
        <div className="home">
            <InventoryMgt />
            <Record />
            <Services />
            <Invoice />
            <Track />
            <AppDownload />
        </div>
    )
}
