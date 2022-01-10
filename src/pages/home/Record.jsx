import React from "react";
import { Section } from "../../components/Layouts";
import record from "../../Images/Svg/record.svg";

export default function Record() {
  return (
    <Section
      title={
        <h3>
          Record your <br />
          <span>
            sales and <br /> expences
          </span>
          <br />
        </h3>
      }
      subtitle={
        <p>
          Generate and send digital receipts and <br />
          invoices all from your smartphone.
        </p>
      }
      image={record}
      reversed={true}
      color="pink"
      positions="top"
    />
  );
}
