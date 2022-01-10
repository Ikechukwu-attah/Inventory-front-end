import React from "react";
import { Section } from "../../components/Layouts";
import invoice from "../../Images/Svg/invoice.svg";

export default function Invoice() {
  return (
    <Section
      title={
        <h3>
          Send <span>invoice</span>
          to <br /> your customers <br /> instantly
        </h3>
      }
      subtitle={
        <p>
          Generate and send digital receipts and <br />
          invoices all from your smartphone.
        </p>
      }
      image={invoice}
      reversed={false}
      color="pink"
      positions="top"
    />
  );
}
