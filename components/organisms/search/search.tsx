import { createContext, forwardRef, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, useContext, useEffect, useReducer, useState } from "react";
import { motion } from 'framer-motion'
import SearchTab from "./search-tab";
import { InitialSearchReducer, Payloads as PayloadSearchAction, SearchActionKind, SearchReducer } from "./state/search-value";
import SearchInput from "./search-input";
import styles from './_search.module.scss'
import { InitialSearchLogic, SearchLogic, Payloads as PaylaodSearchLogic, SearchLogicKind } from "./state/search-logic";


interface Guests {
  adults: number
  children: number
  infants: number
  pets: number
} 


interface SearchProviderComponentProps {
  showHeaderFixedHandler: VoidFunction
}


interface SearchProviderRef extends PayloadSearchAction {}


interface SearchProviderComponent
  extends ForwardRefExoticComponent<
    PropsWithoutRef<SearchProviderComponentProps> & RefAttributes<SearchProviderRef>
  >{}



interface SearchContextProps extends SearchProviderComponentProps {
  filterSearch: SearchProviderRef | null | any,
  dispatchFilterSearch: Function,
  searchLogic: PaylaodSearchLogic | null,
  dispatchSearchLogic: Function,
}


const SearchContext = createContext<SearchContextProps>({
  filterSearch: null,
  dispatchFilterSearch: () => {},
  searchLogic: null,
  dispatchSearchLogic: () => {},
  showHeaderFixedHandler: () => {}
})


const useSearchProviderComponent = () => useContext(SearchContext)


const Search: SearchProviderComponent = forwardRef<SearchProviderRef, SearchProviderComponentProps>(
  ({ showHeaderFixedHandler }, ref) => {
    const [filterSearch, dispatchFilterSearch] = useReducer(SearchReducer, InitialSearchReducer)
    const [searchLogic, dispatchSearchLogic] = useReducer(SearchLogic, InitialSearchLogic)

    
    const handleScroll = () => {
      if (window.scrollY > 50) dispatchSearchLogic({ type: SearchLogicKind.SHOWSEARCH, payload: false });
      else dispatchSearchLogic({ type: SearchLogicKind.SHOWSEARCH, payload: true });
      dispatchSearchLogic({ type: SearchLogicKind.SHOWCURRENTTAB, payload: null })
      dispatchSearchLogic({ type: SearchLogicKind.SHOWINPUTSEARCH, payload: null })
    };
  
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    return (
      <SearchContext.Provider value={{ filterSearch, dispatchFilterSearch, searchLogic, dispatchSearchLogic, showHeaderFixedHandler }}>
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