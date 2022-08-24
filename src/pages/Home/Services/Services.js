import React from "react";
import classes from "./Services.module.css";

function Services() {
  const services = [
    {
      img: "https://preview.colorlib.com/theme/onetech/images/xchar_1.png.pagespeed.ic.h2KEJkhHgI.webp",
      text: "Free Delivery",
      from: "from $50",
    },
    {
      img: "https://preview.colorlib.com/theme/onetech/images/xchar_2.png.pagespeed.ic.GcdwqLhVI3.webp",
      text: "Free Delivery",
      from: "from $50",
    },
    {
      img: "https://preview.colorlib.com/theme/onetech/images/xchar_3.png.pagespeed.ic.1gBzPN2QLp.webp",
      text: "Free Delivery",
      from: "from $50",
    },
    {
      img: "https://preview.colorlib.com/theme/onetech/images/xchar_4.png.pagespeed.ic.clS3Q5Lx_m.webp",
      text: "Free Delivery",
      from: "from $50",
    },
  ];
  return (
    <div className={classes.Services}>
      <div className="container">
        <div className={classes.row}>
          {services.map((item, index) => (
            <div className={classes.item} key={index}>
              <div className={classes.ItemLeft}>
                <img src={item.img} alt="" />
              </div>
              <div className={classes.ItemRight}>
                <h4>{item.text}</h4>
                <h6>{item.from}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
