import HeadBar from './HeadBar'
import SearchBar from './SearchBar';
import Filter from './Filter';
import Countries from './Countries';
import { useState, createContext } from 'react'

interface AppContextType {
   buttonToggle: boolean,
   setButtonToggle: React.Dispatch<React.SetStateAction<boolean>>
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const App = () => {

   const [buttonToggle, setButtonToggle] = useState<boolean>(false)
   const [searchInput, setSearchInput] = useState<string>('');
   const [filterInput, setFilterInput] = useState<string>('');
   const [darkModeActive, setDarkModeActive] = useState<boolean>(false);
   const [activeRegion, setActiveRegion] = useState('');


   const contextValue: AppContextType = {
      buttonToggle,
      setButtonToggle,
   };

   return (
      <AppContext.Provider value={contextValue}>
         <div className={darkModeActive ? `app darkmode` : `app`}>
            <header>
               <HeadBar darkModeActive={darkModeActive} setDarkModeActive={setDarkModeActive} />
               <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
               <Filter filterInput={filterInput} setFilterInput={setFilterInput} activeRegion={activeRegion} setActiveRegion={setActiveRegion} />
            </header>
            <Countries searchInput={searchInput} activeRegion={activeRegion} />


         </div>
      </AppContext.Provider>
   );
}
export { AppContext }
export default App;