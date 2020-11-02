import React from "react";
import styles from "./NavBar.module.scss";
import SearchBox from "../SearchBox";
import FiltersList from "../FiltersList";
import logo from "../../assets/logo.png";

const NavBar = (props) => {
  const { filters, handleChange, handleChecked } = props;
  return (
    <section className={styles.sideNav}>
      <div className={styles.navContent}>
        <div class={styles.logo}>
          <img src={logo} alt="logo of brewdog" />
        </div>
        <SearchBox placeholder="Search..." handleChange={handleChange} />
        <FiltersList filters={filters} handleChecked={handleChecked} />
      </div>
    </section>
  );
};

export default NavBar;
