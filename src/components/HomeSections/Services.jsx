import React from 'react'

export default function Services() {
    return (
        <div className="services">
              <div className="services__heading">
                    <h3 className="services__heading--title">
                    Outstanding <span className="services__heading--span">restaurants</span> <br/> <span className="services__heading--span"> bars</span> use Veedez
                    </h3>
                </div>
            <div className="services__wrapper">
                <div className="services__wrapper--grid">
                    <div className="services__wrapper--gridItem1"><h4 className="services__wrapper--gridtext">Resturant <br/> and  bar</h4></div>
                    <div className="services__wrapper--gridItem2"><h4 className="services__wrapper--gridtext services__wrapper--down">Glocery 	&#38; <br/> Superstore </h4></div>
                    <div className="services__wrapper--gridItem3"><h4 className="services__wrapper--gridtext">Arts and <br/> Lifstyle</h4></div>
                    <div className="services__wrapper--gridItem4"><h4 className="services__wrapper--gridtext services__wrapper--down">Beauty &#38; <br/> Cosmetics</h4></div>
                    <div className="services__wrapper--gridItem5"><h4 className="services__wrapper--gridtext">Healthy 	&#38; <br/> Pharmacy</h4></div>
                </div>
                
            </div>
          
        </div>
    )
}
