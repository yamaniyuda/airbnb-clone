import { createContext, forwardRef, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, useContext, useReducer, useState } from "react";
import { motion } from 'framer-motion'
import SearchTab from "./search-tab";
import { InitialSearchReducer, SearchReducer } from "./state/search-value";
import SearchInput from "./search-input";
import styles from './_search.module.scss'



interface Guests {
  adults: number
  children: number
  infants: number
  pets: number
} 


interface SearchProviderRef {
  region: string
  departureDate: string
  arrivalDate: string
  guests: Guests
}


interface SearchProviderComponent
  extends ForwardRefExoticComponent<
    PropsWithoutRef<{}> & RefAttributes<SearchProviderRef>
  >{}



interface SearchContextProps {
  filterSearch: SearchProviderRef | null | any,
  dispatchFilterSearch: Function
}


const SearchContext = createContext<SearchContextProps>({
  filterSearch: null,
  dispatchFilterSearch: () => {}
})


const useSearchProviderComponent = () => useContext(SearchContext)


const Search: SearchProviderComponent = forwardRef<SearchProviderRef, {}>(
  (_, ref) => {
    const [filterSearch, dispatchFilterSearch] = useReducer(SearchReducer, InitialSearchReducer)


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