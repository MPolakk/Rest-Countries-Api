import { useState, createContext } from 'react'
import Panel from './Panel';
import HeadBar from './HeadBar'
import Countries from './Countries';
import PopUp from './PopUp';
interface AppContextType {
   activeCountry: string,
   setActiveCountry: React.Dispatch<React.SetStateAction<string>>
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const App = () => {

   const [searchInput, setSearchInput] = useState<string>('');

   const [darkModeActive, setDarkModeActive] = useState<boolean>(false);
   const [activeRegion, setActiveRegion] = useState('');
   const [activeCountry, setActiveCountry] = useState('')

   const contextValue: AppContextType = {
      activeCountry,
      setActiveCountry
   };
   const checkActiveCountry = () => {
      if (activeCountry === '') {
         return (
            <>
               <Panel searchInput={searchInput} setSearchInput={setSearchInput} activeRegion={activeRegion} setActiveRegion={setActiveRegion}></Panel>
               <Countries searchInput={searchInput} activeRegion={activeRegion} />
            </>
         )
      } else {
         return <PopUp activeCountry={activeCountry} />
      }
   }

   return (
      <AppContext.Provider value={contextValue}>
         <div className={darkModeActive ? `app darkmode` : `app`}>
            <HeadBar darkModeActive={darkModeActive} setDarkModeActive={setDarkModeActive} />
            {checkActiveCountry()}


         </div>
      </AppContext.Provider>
   );
}
export { AppContext }
export default App;