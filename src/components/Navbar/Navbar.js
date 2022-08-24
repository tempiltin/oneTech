import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  const categories = [
    {
      name: "All Categories",
    },
    {
      name: "Computers",
    },
    {
      name: "Laptops",
    },
    {
      name: "Cameras",
    },
    {
      name: "Hardware",
    },
    {
      name: "Smartphones",
    },
  ];

  return (
    <div className={classes.Navbar}>
      <div className={classes.Navbar_Top}>
        <div className="container">
          <div className={classes.Row}>
            <div className={classes.Left}>
              <div className={classes.PhoneNumber}>
                <img
                  src="data:image/webp;base64,UklGRqYAAABXRUJQVlA4TJoAAAAvCsAEEO8REQ7bSFLk5FUNHPP9x9DItCRxR4C/7LRP8Bb+NECFkIaYQSFlIKvCdSTbpnXtZ9u2nX9k5+8FsNbeEf2fgPr1sN+JKC7Nd2xlNZE8w9dzOtueRAh9nqvlUlFEUTmtLPNi4xmc9b9xDTaWlnn+mAx10NOhjh+3Xls6064IbnOLDH4Rydk39ZkbFXwmn8b9yHUf5L0F"
                  alt=""
                />
                <a href="tel:+38 068 005 3570">+38 068 005 3570</a>
              </div>
              <div className={classes.Email}>
                <img
                  src="data:image/webp;base64,UklGRtAAAABXRUJQVlA4TMMAAAAvE0ADEJ8SEQzbto2cO8lOv4uPVhECzEzKPnS4680W7DLah+HPOFVKE4AIhAY00mxAjGTbtDXPtm3btvmx88/mIoWI/k9AZb7d6dxMa5LH4tBspiyP/yI66/+3ceS1NGixHu/BwQUWf2G1hIxge/BAVUpKDSmAbXVwAtFnCzD1riHAqoRXHoHwr7jQkvzJF47ndPYvpeSBpmTAbYe0dMG2OmPcf/2o+t4nM+tJ7DVEc/8TH4qUwKgRciKte2cy0zzp3NoA"
                  alt=""
                />
                <a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a>
              </div>
            </div>
            <div className={classes.Right}>
              <div className={classes.Register}>
                <img
                  src="https://preview.colorlib.com/theme/onetech/images/user.svg"
                  alt=""
                />
                <Link to={"/"}>Register</Link>
              </div>
              <div className={classes.Login}>
                <Link to={"/"}>Sign in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={classes.Navbar_Center}>
          <div className={classes.Logo_search}>
            <div className={classes.Logo}>
              <Link to={"/"}>
                <img src="/images/Logo.png" alt="" />
              </Link>
            </div>
            <div className={classes.Search_div}>
              <div className={classes.input_Search}>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search for products..."
                />
              </div>
              <div className={classes.Category_Search}>
                <select name="" id="">
                  {categories.map((item, index) => (
                    <option value={item.name} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <button className={classes.SearchIcon}>
                <img
                  src="https://preview.colorlib.com/theme/onetech/images/search.png.webp"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className={classes.Navbar_center_right}>
            <div className={classes.Wishlist}>
              <div className={classes.Wishlist_left}>
                <img
                  src="https://preview.colorlib.com/theme/onetech/images/heart.png.webp"
                  alt=""
                />
              </div>
              <div className={classes.Wishlist_right}>
                <h6>Wishlist</h6>
                <p>115</p>
              </div>
            </div>
            <div className={classes.Cart}>
              <div className={classes.Wishlist_left}>
                <img
                  src="data:image/webp;base64,UklGRkgBAABXRUJQVlA4TDsBAAAvGoAIED8jEEjy136ICIZt20aOVZJ7j4CgWCA3HACUgQgAmlE0uQRolIk0yKUooxUY01VM0g9AcmkmySMYKFAywg/bzJYACLatHVvub9tm5p9t9/bnfru685/Dh2cIEf2fABgM7n6Qn3shCNbH1JzOmSuTlxmHI31OVs04Z1yD5ir/XCY2eA/dOzZMNBnQ8/BNz5fNZrNDFrO6BU6z2WzWD9h+KNyyI0QqpX7ZVLov/FVKkWEk+A6gRxhkH8Ark8jzAUCfbj0nhwCuTgOo8wIA6dVzkwCsAFa4D2D70KJnOWhAe4frED/jgtwtS3KKKbkWI2LWGZ1ifg4gHueXXI5PclVeyy3zSG6Lm3InXJK7YUXumVm5b8bkJnTJ8R/yHZbk5vm/6LVarAYtBnBMcjwy2k0aQO1xSuPtqA4A"
                  alt=""
                />
                <span>10</span>
              </div>
              <div className={classes.Cart_right}>
                <h6>Cart</h6>
                <p>$85</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.Navbar_Bottom}>
        <div className="container">
          <div className={classes.Navbar_Bottom_row}>
            <div className={classes.categories}>
              <div className={classes.item}>
                <i className="fa-solid fa-bars"></i>
                CATEGORIES
              </div>
              <div
                className={
                  window.location.href.split("/")[3] === ""
                    ? classes.mores
                    : "hover"
                }
              >
                {categories.map((item, index) => (
                  <div className={classes.hovers} key={index}>
                    <h4>{item.name}</h4>
                  </div>
                ))}
              </div>
            </div>
            <div className={classes.navbar_bottom_right}>
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/"}>Pages</Link>
                  <i className="fa-solid fa-angle-down"></i>
                  <div className={classes.hovered}>
                    <ul>
                      <li>
                        <Link to={"/"}>Shop</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Product</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Blog</Link>
                      </li>
                      <li>
                        <Link to={"/"}>Regular Post</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to={"/"}>Blog</Link>
                </li>
                <li>
                  <Link to={"/"}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
