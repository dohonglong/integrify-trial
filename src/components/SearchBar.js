import React from "react";

const SearchBar = ({ input: keyword, onChange: setKeyword, onClick: updateInput }) => {

    return (

        <form>
            <input
                type="text" 
                placeholder="Search here"
                value={keyword}
                onChange={setKeyword}
            />
            <button type="button" onClick={updateInput}>Search</button>
        </form>
    )
}

export default SearchBar;