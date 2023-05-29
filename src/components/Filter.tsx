import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Filter = () => {
   return (
      <div className="filter">
         <button className="filter-button">Filter by Region <span><FontAwesomeIcon icon={faArrowDown} /></span></button>
         <ul className="filter-list ">
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>

         </ul>
      </div>
   );
}

export default Filter;