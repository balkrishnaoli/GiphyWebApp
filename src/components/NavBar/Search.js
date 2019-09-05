import React from "react";
import Home from "../Home";

const Search = ({
  match: {
    params: { term }
  }
}) => {
  console.log(term);
  return <Home query={term} />;
};

export default Search;
