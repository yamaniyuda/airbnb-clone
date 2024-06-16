import { createContext, forwardRef, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, useContext, useEffect, useReducer, useState } from "react";
import { motion } from 'framer-motion'
import SearchTab from "./search-tab";
import { InitialSearchReducer, Payloads as PayloadSearchAction, SearchActionKind, SearchReducer } from "./state/search-value";
import SearchInput from "./search-input";
import styles from './_search.module.scss'
import { InitialSearchLogic, SearchLogic } from "./state/search-logic";



interface Guests {
  adults: number
  children: number
  infants: number
  pets: number
} 


interface SearchProviderRef extends PayloadSearchAction {}


interface SearchProviderComponent
  extends ForwardRefExoticComponent<
    PropsWithoutRef<{}> & RefAttributes<SearchProviderRef>
  >{}



interface SearchContextProps {
  filterSearch: SearchProviderRef | null | any,
  dispatchFilterSearch: Function,
  searchLogic: 
}


const SearchContext = createContext<SearchContextProps>({
  filterSearch: null,
  dispatchFilterSearch: () => {}
})


const useSearchProviderComponent = () => useContext(SearchContext)


const Search: SearchProviderComponent = forwardRef<SearchProviderRef, {}>(
  (_, ref) => {
    const [filterSearch, dispatchFilterSearch] = useReducer(SearchReducer, InitialSearchReducer)
    const [searchLogic, dispatchSearchLogic] = useReducer(SearchLogic, InitialSearchLogic)

    const handleScroll = () => {
      if (window.scrollY > 50) dispatchFilterSearch({ type: SearchActionKind.TSHOW, payload: false });
      else dispatchFilterSearch({ type: SearchActionKind.TSHOW, payload: true });
    };
  
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    return (
      <SearchContext.Provider value={{ filterSearch, dispatchFilterSearch }}>
        <motion.div className={styles.search}>
          <SearchTab />
          <SearchInput />
        </motion.div>
      </SearchContext.Provider>
    )
  }
)

export default Search
export { useSearchProviderComponent }