import React from "react";
import "./SearchResultList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultList = ({ results }) => {
  return (
    <div className="results-list">
      {results?.map((ele, index) => {
        return <SearchResult key={index} ele={ele} />;
      })}
    </div>
  );
};
