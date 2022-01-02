import React from "react";

const SearchBar = ( {input: keyword, onChange: setKeyword} ) => {

    return (

        <form>
            <input
                type="text" 
                placeholder="Search here"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
            />
            <button >Search</button>
        </form>
    )
}

export default SearchBar;