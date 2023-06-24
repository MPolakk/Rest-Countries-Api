import Country from './Country';
import Loading from './Loading';
import uuid from 'react-uuid';
import { useEffect, useState, useContext } from 'react';
import { AppContext } from './App';
const Countries = (props: {
   searchInput: string,
   activeRegion: string
}) => {

   const context = useContext(AppContext)



   interface countriesTypes {
      capital: Array<string>,
      flags: { png: string },
      name: { common: string },
      population: number,
      region: string
   }

   const [allCountriesData, setAllCountriesData] = useState<countriesTypes[]>([])
   const [countriesData, setCountriesData] = useState<countriesTypes[]>([])
   const [isLoading, setIsLoading] = useState<boolean>(true)

   const APIData = async () => {
      setIsLoading(true);
      const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population");
      const jsonData = await response.json();
      setAllCountriesData(jsonData);
      setIsLoading(false);
   }

   const filterDataByRegion = () => {
      const countries = allCountriesData.filter((item) => {
         return item.region == props.activeRegion
      })
      setCountriesData(countries);
   }

   const filterData = () => {
      const countries = allCountriesData.filter((item) => {
         const countryName: string = item.name.common.toLowerCase();
         return countryName.includes(props.searchInput.toLowerCase())
      })
      setCountriesData(countries);
   }

   const checkSearchInput = () => {
      if (!props.searchInput && !props.activeRegion) {
         setCountriesData(allCountriesData)
      } else {
         return
      }
   }

   const loadingHandler = () => {

      if (isLoading) {
         return <Loading />
      } else {
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
            </div>)
      }
   }

   useEffect(() => {
      APIData();
      checkSearchInput();
   }, [])
   useEffect(() => {
      checkSearchInput();
   })

   useEffect(() => {
      filterData();

   }, [props.searchInput])

   useEffect(() => {
      filterDataByRegion();

   }, [props.activeRegion])
   return (
      <>
         {loadingHandler()}
      </>
   );
}

export default Countries;