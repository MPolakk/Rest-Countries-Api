import Filter from "./Filter";
import SearchBar from "./SearchBar";
import { useState } from 'react'

const Panel = (props: any) => {
   const [filterInput, setFilterInput] = useState<string>('');

   return (
      <>
         <header>
            <SearchBar searchInput={props.searchInput} setSearchInput={props.setSearchInput} />
            <Filter filterInput={filterInput} setFilterInput={setFilterInput} activeRegion={props.activeRegion} setActiveRegion={props.setActiveRegion} />
         </header>
      </>
   );
}

export default Panel;