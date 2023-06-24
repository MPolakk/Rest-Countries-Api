import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { AppContext } from './App'
const PopUp = (props: { activeCountry: string }) => {

   const [country, setCountry] = useState<any>();
   const activeCountryContext = useContext(AppContext);

   const getDataCountry = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/name/${props.activeCountry}`);
      const jsonData = await response.json();
      setCountry(jsonData[0]);
   }

   const getNativeName = () => {
      if (country.name.nativeName) {
         const object = country.name.nativeName;
         const array = Object.keys(object).map((item) => {
            return object[item];
         })

         return array[0].common;
      }
   }

   const loadingHandler = () => {

      if (country) {
         console.log()
         return (
            <>
               <img alt="flag" className="pop-up__flag" src={country.flags.svg}></img>
               <div className="pop-up__desc">
                  <h3 className="desc__title">{country.name.common}</h3>
                  <div className="desc__details">
                     <span>Native name:<span>{getNativeName()}</span></span>

                     <span>Population:<span>{country.population.toLocaleString('en-US')}</span></span>

                     <span>Region:<span>{country.region}</span></span>

                     <span>Sub Region:<span>{country.subregion ? country.subregion : 'No sub region'}</span></span>
                     <span>Capital:<span>{country.capital ? country.capital[0] : 'No capital'}</span></span>

                  </div>
                  <div className="desc__more-details">
                     <span>Top level Domain: <span>{country.tld[0]}</span></span>

                     <span>Currencies: <span>{country.currencies ? Object.keys(country.currencies) : 'No currencies'}</span></span>

                     <span>Languages: <span>{country.languages ? Object.keys(country.languages).map((item) => {
                        return country.languages[item];
                     }).join(' ') : 'No languages'}</span></span>

                  </div>
                  <div className="desc_border-countries">
                     <span>Border Countries:</span>
                     {country.borders ? country.borders.map((item: string) => {
                        return <button>{item}</button>

                     }) : <span>No border countries</span>}

                  </div>

               </div>
            </>
         )
      } else {
         return <Loading />
      }
   }

   useEffect(() => {
      getDataCountry()

   }, [])
   return (

      <div className="pop-up">
         <div className="pop-up__button-section">
            <button onClick={() => {
               activeCountryContext?.setActiveCountry('')
            }}
               className="pop-up__button">Back</button>
         </div>
         {loadingHandler()}
      </div >);
}

export default PopUp;