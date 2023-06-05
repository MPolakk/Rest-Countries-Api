import HeadBar from './HeadBar'
import SearchBar from './SearchBar';
import Filter from './Filter';
import Countries from './Countries';
import { useState } from 'react'
const App = () => {

   const [searchInput, setSearchInput] = useState<string>('');
   const [filterInput, setFilterInput] = useState<string>('');
   const [activeRegion, setActiveRegion] = useState('');

   return (
      <div className='app'>
         <header>
            <HeadBar />
            <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
            <Filter filterInput={filterInput} setFilterInput={setFilterInput} activeRegion={activeRegion} setActiveRegion={setActiveRegion} />
         </header>
         <Countries searchInput={searchInput} activeRegion={activeRegion} />


      </div>
   );
}

export default App;