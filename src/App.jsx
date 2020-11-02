import React, { useState, useEffect } from "react";
import "./App.module.scss";

import NavBar from "./components/NavBar";
import Main from "./components/Main";

const App = () => {
  // beers list is empty, but set their state ready for API response
  const [beers, setBeers] = useState();

  // SearchTerm will be used to filter list of beers by term
  const [searchTerm, setSearchTerm] = useState("");

  // Predetermined filters that will be checked on/off for filtering the data
  const [filters, setFilters] = useState([
    { value: "abv", label: "High ABV (> 6.0%)", isChecked: false },
    { value: "classic", label: "Classic Range", isChecked: false },
    { value: "acidic", label: "Acidic (< 4)", isChecked: false },
  ]);

  // Upon searchbox changing its criteria, set Search term to value input by user
  const handleChange = (e) => setSearchTerm(e.target.value);

  // Upon filter changing being applied/not, set the filters being applied
  const handleChecked = (filter, isChecked) => {
    const filters = [...filters];
    const index = filters.findIndex(
      (condition) => condition.value === filter.value
    );
    filters[index].isChecked = isChecked;
    setFilters(filters);
  };

  // Fetch the beers from PUNK API
  const fetchBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
      // Put response into response.json file
      .then((response) => response.json())
      // Add beers received in API fetch to beers object array of setBeers
      .then((data) => setBeers(data))
      // Catch errors
      .catch((error) => console.log(error));
  };

  // On page load, fetch the beers
  useEffect(() => {
    fetchBeers();
  });

  return (
    <>
      <NavBar
        filters={filters}
        handleChange={handleChange}
        handleChecked={handleChecked}
      />
      <Main beers={beers} searchTerm={searchTerm} filters={filters} />
    </>
  );
};

export default App;
