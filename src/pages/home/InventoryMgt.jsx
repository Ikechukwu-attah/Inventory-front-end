import React from "react";
import { Section } from "../../components/Layouts";
import invoice from "../../Images/Svg/invoice.svg";
// import vshape3 from '../../Images/vshape3.svg'

export default function InventoryMgt() {
  return (
 
      <Section
        title={
          <h3>
            Manage all <br />
            your <span>inventory</span>
            <br /> on the go
          </h3>
        }

        subtitle = {
            <p>
            Manage your inventory across multiple sales<br /> 
            channels, get restock alerts, collect all types<br /> 
             of payments with one tool.
            </p>
        }

        image = {invoice}

      
      />
    
  );
}
