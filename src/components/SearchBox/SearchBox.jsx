import React from "react";
import styles from "./SearchBox.module.scss";

const SearchBox = (props) => {
  const { placeholder, handleChange } = props;
  return (
    <div className={styles.searchBox}>
      <input type="text" placeholder={placeholder} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
