import Country from './Country';
import uuid from 'react-uuid';
import { useEffect, useState } from 'react';
const Countries = () => {
   interface countriesTypes {
      capital: Array<String>,
      flags: { png: String },
      name: { common: String },
      population: Number,
      region: String
   }
   const [countriesData, setCountriesData] = useState<Array<countriesTypes>>([])


   const APIData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population");
      const jsonData = await response.json();
      setCountriesData(jsonData)
   }

   useEffect(() => {
      APIData()



   }, [])

   return (
      <div className="countries">
         {countriesData.map((item) => {
            return <Country
               key={uuid()}
               capital={item.capital}
               flags={item.flags}
               population={item.population}
               region={item.region}
               name={item.name.common} />
         })}
      </div>
   );
}

export default Countries;