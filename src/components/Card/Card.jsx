import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const {beer} = props
  const { name, description, abv, image_url } = beer;
  return (
    <div className={styles.card}>
      <img src={image_url} alt={name} />
      <div class={styles.name}>
        <h2>{name.split("-")[0]}</h2>
      </div>
      <span>ABV {abv}%</span>
      <p>{description}</p>
    </div>
  );
};

export default Card;
