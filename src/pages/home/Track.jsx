import React from "react";
import { Section } from "../../components/Layouts";
import track from "../../Images/Svg/track.svg";

export default function Track() {
  return (
   
      <Section
        title={
          <h3>
             Track your <br /> business <br /> 
             <span>performance </span>
          </h3>
        }
        subtitle={
          <p>
              Get real-time insight into how your business <br />
               is doing. Track transactions, sales <br /> and revenue. 
          </p>
        }
        image={track}

        positions = "top"
      />
   
  );
}
