import React, { useState } from "react";
import styles from "./FilterItem.module.scss";

const FilterItem = (props) => {
  const { filters, handleChecked } = props;

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    handleChecked(filters, !isChecked);
    setIsChecked(!isChecked);
  };
  const { label, value } = filters;

  return (
    <div className={styles.filterItem}>
      <label>{label}</label>
      <input type="checkbox" value={value} onClick={toggleCheckbox} />
    </div>
  );
};

export default FilterItem;
