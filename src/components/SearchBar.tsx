import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
   return (
      <div className="search-bar">
         <div>
            <label htmlFor="search"><FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            </label>
            <input id="search" name="search" type="text" placeholder="Search for a country" className='search-input' />
         </div>
      </div>
   );
}

export default SearchBar;