import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [getNavbarShow, setNavbarShow] = useState(false);

  const toggleDropdown = (e) => {
    setNavbarShow(!getNavbarShow);
  };

  var links = "";

  links = (
    <div>
      <div className={classes.Links}>
        <div className={classes.Link}>
          <Link href="/upload">
            <button className={classes.Button}>
              <i
                style={{ fontSize: "1.4rem", paddingRight: ".5rem" }}
                className="fas fa-plus"
              ></i>{" "}
              Post Ad
            </button>
          </Link>
        </div>
        <div className={classes.Link}>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={classes.Link}>
          <Link href="/about">About</Link>
        </div>
      </div>

      {getNavbarShow ? (
        <div className={classes.MobileLinks}>
          <div className={classes.MobileLink}>
            <Link href="/upload">
              <button className={classes.MobileButton}>
                <i className="fas fa-plus"></i>
              </button>
            </Link>
          </div>
          {/* <div className={classes.MobileLink}><Link href='/myprofile'><i className="far fa-user"></i></Link></div> */}
          <div className={classes.MobileLink} onClick={toggleDropdown}>
            <i class="fas fa-times"></i>
          </div>
        </div>
      ) : (
        <div className={classes.MobileLinks}>
          <div className={classes.MobileLink}>
            <Link href="/upload">
              <button className={classes.MobileButton}>
                <i className="fas fa-plus"></i>
              </button>
            </Link>
          </div>
          {/* <div className={classes.MobileLink}><Link href='/myprofile'><i className="far fa-user"></i></Link></div> */}
          <div className={classes.MobileLink} onClick={toggleDropdown}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      )}
    </div>

    // Mobile
  );

  var navStuff = "";

  if (getNavbarShow) {
    navStuff = [
      <nav className={classes.NavDropdown}>
        <div className={classes.NavDropdownHeader}>
          <div className={classes.Logo}>
            <Link href="/">
              <h2>Misplaced</h2>
            </Link>
          </div>

          {links}
        </div>

        <ul className={classes.NavDropdownLinks}>
          <li className={classes.NavDropdownLink}>
            <Link href="/">Home</Link>
          </li>
          <li className={classes.NavDropdownLink}>
            <Link href="/about">About</Link>
          </li>
          <li className={classes.NavDropdownLink}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>,
    ];
  } else {
    navStuff = [
      <nav className={classes.Nav}>
        <div className={classes.Logo}>
          <Link href="/">
            <h2>Misplaced</h2>
          </Link>
        </div>

        {links}
      </nav>,
    ];
  }

  return [navStuff];
};

export default Navbar;
