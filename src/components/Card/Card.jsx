import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const shortenDescription = (description) => {
    return description.length < 190
        ? description
        : description.substring(0, description.lastIndexOf(".", 190)) + ".";
}


  const {beer} = props
  const { name, description, abv, image_url } = beer;
  return (
    <div className={styles.card}>
      <img src={image_url} alt={name} />
      <div class={styles.name}>
        <h2>{name.split("-")[0]}</h2>
      </div>
      <span>ABV {abv}%</span>
      <p>{shortenDescription(description)}</p>
    </div>
  );
};

export default Card;
