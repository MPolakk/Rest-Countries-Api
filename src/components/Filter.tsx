import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Filter = (props: {
   filterInput: string,
   setFilterInput: React.Dispatch<React.SetStateAction<string>>,
   activeRegion: string,
   setActiveRegion: React.Dispatch<React.SetStateAction<string>>
}) => {
   const [filterMenuActive, setFilterMenuActive] = useState(false);


   const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

   const filterActiveHandler = () => {
      setFilterMenuActive(!filterMenuActive);
   }
   const filterPickRegion = (e: any) => {
      props.setActiveRegion(e.target.outerText)
      setFilterMenuActive(false);
   }
   useEffect(() => {

   }, [props.filterInput])
   return (
      <div className="filter">
         <button onClick={filterActiveHandler} className="filter-button">Filter by Region <span><FontAwesomeIcon icon={faArrowDown} /></span></button>
         <ul style={filterMenuActive ? { display: 'block' } : { display: 'none' }} className="filter-list ">
            {regions.map((item, index) => {
               return <li key={index} onClick={filterPickRegion}>{item}</li>
            })}

         </ul>
      </div>
   );
}

export default Filter;