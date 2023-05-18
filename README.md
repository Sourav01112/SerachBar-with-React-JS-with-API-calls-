<h1>Technical Documentation</h1>
SearchBar Component
<h3>Live:</h3>https://inspiring-cucurucho-06ad75.netlify.app/
Description
The SearchBar component is a React functional component that renders an input field for searching and fetching data from an API. It displays a search icon and provides real-time search functionality based on the user's input.

Props
setResults (function): A callback function passed as a prop to the component. It is used to set the search results obtained from the API call.

Dependencies
React
react-icons/fa
"./SearchBar.css" (CSS file)
Usage
jsx
Copy code
import { useState } from "react";
import { FaSearch, FaSearchengin } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  // Component code...
};
State
input (string): Holds the value of the input field for the search query.
Methods
fetchData(val)
This method is responsible for fetching data from the API based on the provided search value (val). It filters the received data based on the input value and sets the filtered results using the setResults callback function.

handleChange(val)
This method is triggered when the value of the input field changes. It updates the input state with the new value and calls the fetchData method to perform a search with the updated value.

![](./src/assets/2.png)


JSX
Structure
div with className "input-wrapper": Wraps the input field and search icon.
input: Renders the search input field.
FaSearchengin component: Renders the search icon using the react-icons/fa package.
Props
placeholder: Sets the placeholder text for the input field.
type: Specifies the type of the input field as "text".
value: Binds the value of the input field to the input state.
onChange: Calls the handleChange method when the input field value changes.
SearchResultList Component
Description
The SearchResultList component is a React functional component that displays a list of search results obtained from the API. It renders the SearchResult component for each result in the provided results array.

Props
results (array): An array of search results to be displayed.
Dependencies
React
"./SearchResultList.css" (CSS file)



![](./src/assets/1.png)
![](./src/assets/3.png)
