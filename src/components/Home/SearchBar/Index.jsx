import React from 'react'
import {
    FaSearch,
    FaTimes,
    FaTwitter,
  } from 'react-icons/fa';
import './Styles.css'
import { Link } from 'react-router-dom';
const SearchBar = ({ value, handleSearchKey, clearSearch, handlSubmit }) => {
    const icons = [
        { icon: FaSearch, scale: 1.3 }
      ];
    return (
        <div className='search-wrap'>
            <form onSubmit={handlSubmit}>
                <input type='text' onChange={handleSearchKey} placeholder='Search By Category' value={value} />
                {value && <span className='close-btn' onClick={clearSearch}><FaTimes size={15}/></span>}
                
                <button type='submit'><FaSearch size={15} /></button>
            </form>

        </div>
    )
};

export default SearchBar;
