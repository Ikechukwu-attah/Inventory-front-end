import React from 'react'
import AppDownload from './AppDownload'
import InventoryMgt from './InventoryMgt'
import Record from './Record'
import Services from './Services'
import Track from './Track'
import Invoice from './Invoice'
                                   

export default function Home() {
    return (
        <div>
            <InventoryMgt />
            <Record />
            <Services />
            <Invoice />
            <Track />
            <AppDownload />
        </div>
    )
}
