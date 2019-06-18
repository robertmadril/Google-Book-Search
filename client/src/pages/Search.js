import React from "react";
import Results from "../components/Results";
import SearchBar from "../components/Search"

function Search(props) {
    return (
        <div>
            <SearchBar />
            <Results/>
        </div>
    )
}

export default Search;