
const Country = (props: any) => {
   return (
      <div className="country">
         <img alt="flag" src={props.flags.png} className="flag"></img>
         <div className="desc">
            <span className="name">{props.name}</span>
            <span className="population"><span>Population:</span> {props.population}</span>
            <span className="region"><span>Region: </span>{props.region}</span>
            <span className="capital"><span>Capital:</span> {props.capital}</span>
         </div>
      </div >);
}

export default Country;