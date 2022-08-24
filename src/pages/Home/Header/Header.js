import React from "react";
import classes from "./Header.module.css";
function Header() {
  return (
    <div className={classes.Header}>
      <div className={classes.Bg}>
        <img src="/images/homeHeader_bg.webp" alt="" />
      </div>
      <div className="container" style={{display:"flex" , justifyContent:"end", height:"100%"}}>
        <div className={classes.HeaderItem}>
          <div className={classes.HeaderLeft}>
            <h2>NEW ERA OF SMARTPHONES</h2>
            <div className={classes.Prices}>
              <div className={classes.OldPrice}>
                <h4>$530</h4>
              </div>
              <div className={classes.NewPrice}>
                <h4>$460</h4>
              </div>
            </div>
            <h5>Apple Iphone 6s</h5>
            <button>Shop Now</button>
          </div>
          <div className={classes.HeaderRight}>
            <img src="/images/HeaderRight.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
