import { useState } from "react";
import { FaSearch, FaSearchengin } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (val) => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((out) => {
        /* This code is filtering the data received from the API call based on the value of the input field. It checks if the value exists and if the element and its name property exist in the data. It then converts the name to lowercase and checks if it includes the value of the input field in lowercase. If all these conditions are met, the element is included in the filtered
      results. The filtered results are then logged to the console. */
        const results = out.filter((ele) => {
          return (
            val &&
            ele &&
            ele.name &&
            ele.name.toLowerCase().includes(val.toLowerCase())
          );
        });
        setResults(results);
      });
  };

  const handleChange = (val) => {
    setInput(val);
    fetchData(val);
  };
  return (
    <div className="input-wrapper">
      <input
        placeholder="Type to Search..."
        type="text"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <FaSearchengin id="search-icon" />
    </div>
  );
};

//left at 12:56
