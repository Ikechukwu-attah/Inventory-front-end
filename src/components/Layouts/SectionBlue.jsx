import React from "react";
import vshaperecord from "../../Images/Svg/vshape-record.svg";

export default function Section({
  title,
  subtitle,
  image,
  reversed,
  color,
  positions,
}) {
  return (
    <section
      className={`section ${reversed && "section--reversed"} section--${color}`}
    >
      <div className="section__imgWrapper">
        <img src={vshaperecord} alt="vshape" className="section__vshape" />
        <img
          src={image}
          alt="phone"
          className={`section__imgPhone  section__imgPhone--${positions}`}
        />
      </div>
      <div className="section__text">
        {title}
        {subtitle}
      </div>
    </section>
  );
}
