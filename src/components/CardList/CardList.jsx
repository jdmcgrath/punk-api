import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";

const getBeers = (props) => {
  const { beers, searchTerm, filters } = props;
  const checked = filters
    .filter((condition) => condition.isChecked)
    .map((condition) => condition.value);

  const results = beers
    // Filter beers by if it includes the searchTerm from searchbox
    .filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    // Filter beers by filter (if checked) of over 6% ABV
    .filter((beer) => (checked.includes("abv") ? beer.abv > 6 : beer))
    // Filter beers by filter (if checked) of if the beer is a classic
    .filter((beer) =>
      checked.includes("classic") ? beer.first_brewed.slice(-4) < 2010 : beer
    )
    // Filter beers by filter (if checked) of under 4PH
    .filter((beer) => (checked.includes("acidic") ? beer.ph < 4 : beer))
    // Map all beers that pass these criteria
    .map((beer) => <Card key={beer.id} beer={beer} />);

  return results.length > 0 ? results : displayMsg();
};

const displayMsg = () => {
  return <span className={styles.displayMsg}>No results to display...</span>;
};

const CardList = () => {
  return <section className={styles.cardList}>{getBeers()}</section>;
};

export default CardList;
