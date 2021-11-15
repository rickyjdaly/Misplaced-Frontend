import React from "react";

import Link from "next/link";
import classes from "./Button.module.css";

const Button = (props) => {
  if (props.elType === "Header") {
    return (
      // <Link href='/search'>
      <button className={classes.Header} type="submit">
        <i
          className="fas fa-map-marker-alt"
          style={{ paddingRight: ".5rem" }}
        ></i>
        Search
      </button>
      // </Link>
    );
  }

  if (props.elType === "Category") {
    return (
      <div className={classes.Category}>
        <Link href="/categories">
          <button className="category__button">See More</button>
        </Link>
      </div>
    );
  }
  if (props.elType === "Advert") {
    return (
      <div className={classes.Category}>
        <Link href="/search">
          <button className="category__button">See More</button>
        </Link>
      </div>
    );
  }

  if (props.elType === "Phone") {
    return (
      <div className={classes.Phone}>
        <i className="fas fa-phone-alt"></i> {props.contact}
      </div>
    );
  }
  if (props.elType === "Message") {
    return (
      <div className={classes.Message}>
        <i class="far fa-comments"></i> Chat
      </div>
    );
  }
  if (props.elType === "Form") {
    return (
      <button className={classes.Form} type="submit">
        {props.title}
      </button>
    );
  }

  if (props.elType === "Search") {
    return (
      <button className={classes.SearchForm} type="submit">
        {props.title}
      </button>
    );
  }
};

export default Button;
