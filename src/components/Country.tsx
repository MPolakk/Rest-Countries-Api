import { useContext } from "react";
import { AppContext } from "./App";

const Country = (props: any) => {

   const context = useContext(AppContext)



   return (
      <div className="country" onClick={(e) => {
         context?.setActiveCountry(props.name)
      }}>
         <img alt="flag" src={props.flags.png} className="flag"></img>
         <div className="desc">
            <span className="name">{props.name}</span>
            <span className="population"><span>Population:</span> {props.population.toLocaleString('en-US')}</span>
            <span className="region"><span>Region: </span>{props.region}</span>
            <span className="capital"><span>Capital:</span> {props.capital}</span>
         </div>
      </div >);
}

export default Country;