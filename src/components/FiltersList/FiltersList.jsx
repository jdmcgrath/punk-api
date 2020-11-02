import React from "react";
import FilterItem from "../FilterItem";
import styles from "./FiltersList.module.scss";

const FiltersList = (props) => {
  const { handleChecked, filters } = props;
  const getFilterJsx = (filter, index) => (
    <div key={index}>
      <FilterItem filter={filter} handleChecked={handleChecked} />
    </div>
  );

  return (
    <section className={styles.filtersList}>
      <h4>Filters</h4>
      {filters.map(getFilterJsx)}
    </section>
  );
};

export default FiltersList;
