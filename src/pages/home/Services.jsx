import React from 'react'

export default function Services() {
    return (
        <div className="services">
              <div className="services__heading">
                    <h3 className="services__title">
                    Outstanding <span className="services__span">restaurants</span> <br/> <span className="services__span"> bars</span> use Veedez
                    </h3>
                </div>
            <div className="services__wrapper">
                <div className="services__grid">
                    <div className="services__gridItem1"><h4 className="services__gridtext">Resturant <br/> and  bar</h4></div>
                    <div className="services__gridItem2"><h4 className="services__gridtext services__down">Glocery 	&#38; <br/> Superstore </h4></div>
                    <div className="services__gridItem3"><h4 className="services__gridtext">Arts and <br/> Lifstyle</h4></div>
                    <div className="services__gridItem4"><h4 className="services__gridtext services__down">Beauty &#38; <br/> Cosmetics</h4></div>
                    <div className="services__gridItem5"><h4 className="services__gridtext">Healthy 	&#38; <br/> Pharmacy</h4></div>
                </div>
                
            </div>
          
        </div>
    )
}
