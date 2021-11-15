import React from "react";

import Link from "next/link";

import Button from "../Buttons/Button";

import classes from "./Card.module.css";

const Card = (props) => {
  if (props.elType === "Category") {
    return (
      
      <Link
        href={{
          pathname: "/search",
          query: { category: props.data },
        }}
      >
        <div className={classes.Category}>
          <i className={props.icon}></i>
          <h4>{props.title}</h4>
          <h6>{props.count} ads</h6>
        </div>
      </Link>
    );
  }
  if (props.elType === "Advert") {
    return (
      <Link href={`/advert/${props.adId}`}>
        <div className={classes.Advert}>
          <div className={classes.AdvertFrame}>
            <img
              src={`http://localhost:3001/${props.image}`}
              alt={props.title}
            />
          </div>
          <h4>{props.title}</h4>
          <h6>
            <i className="far fa-clock"></i> 1 day ago
          </h6>
          <h6>
            <i className="fas fa-map-marker-alt"></i> {props.town}, Co.{" "}
            {props.county}
          </h6>

          <h4 className={props.type === "Lost" ? classes.Red : classes.Green}>
            {props.type}
          </h4>
        </div>
      </Link>
    );
  }
  if (props.elType === "Profile") {
    return (
      <Link href={`/advert/${props.adId}`}>
        <div className={classes.Profile}>
          <div className={classes.ProfileFrame}>
            <img
              src={`http://localhost:3001/${props.image}`}
              alt={props.title}
            />
          </div>
          <h4>{props.title}</h4>

          <h6>
            <i className="far fa-clock"></i> 1 day ago
          </h6>
          <h6>
            <i className="fas fa-map-marker-alt"></i> {props.town}, Co.{" "}
            {props.county}
          </h6>

          
          <h4 className={props.type === "Lost" ? classes.Red : classes.Green}>
            {props.type}
          </h4>
        </div>
      </Link>
    );
  }
  

  if (props.elType === "Gallery") {
    return (
      <div className={classes.Gallery}>
        <div className={classes.GalleryFrame}>
          <img src={`http://localhost:3001/${props.image}`} alt={props.title} />
        </div>
        <div className={classes.GalleryDetails}>
          <h4>{props.title}</h4>
          <h6>
            <i className="far fa-clock"></i> 1 day ago
          </h6>
          <h6>
            <i className="fas fa-map-marker-alt"></i> {props.town}, Co.{" "}
            {props.county}
          </h6>

          <p>{props.description}</p>

          <h6>
            <i className="fas fa-phone-alt"></i> {props.contact}
          </h6>
          <h4 className={props.type === "Lost" ? classes.Red : classes.Green}>
            {props.type}
          </h4>
        </div>
      </div>
    );
  }

  
};

export default Card;
