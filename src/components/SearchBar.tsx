import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'




const SearchBar = (props: {
   searchInput: string,
   setSearchInput: React.Dispatch<React.SetStateAction<string>>
}) => {

   return (
      <div className="search-bar ">
         <div>
            <label htmlFor="search"><FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            </label>
            <input value={props.searchInput} onChange={(e) => {
               props.setSearchInput(e.target.value)
            }} id="search" name="search" type="text" placeholder="Search for a country" className='search-input' />
         </div>
      </div>
   );
}

export default SearchBar;