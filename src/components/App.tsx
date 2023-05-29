import HeadBar from './HeadBar'
import SearchBar from './SearchBar';
import Filter from './Filter';
import Countries from './Countries';
const App = () => {
   return (
      <div className='app'>
         <header>
            <HeadBar />
            <SearchBar />
            <Filter />
         </header>
         <Countries />


      </div>
   );
}

export default App;