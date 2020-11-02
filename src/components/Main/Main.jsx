import React from "react";
import styles from "./Main.module.scss";
import CardList from "../CardList";

const Main = (props) => {
  const { beers, searchTerm, filters } = props;
  return (
    <>
      <CardList
        beers={beers}
        searchTerm={searchTerm}
        filters={filters}
      />
    </>
  );
};

export default Main;
