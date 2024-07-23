import React from 'react'
import './Styles.css'
const SearchBar = ({ value, handleSearchKey, clearSearch, handlSubmit }) => {
    return (
        <div className='search-wrap'>
            <form onSubmit={handlSubmit}>
                <input type='text' onChange={handleSearchKey} placeholder='Search By Category' value={value} />
                {value && <span onClick={clearSearch}>X</span>}
                <button type='submit'>Go</button>
            </form>

        </div>
    )
};

export default SearchBar;
