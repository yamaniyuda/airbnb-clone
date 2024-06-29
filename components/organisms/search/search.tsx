import { createContext, forwardRef, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, useContext, useEffect, useReducer, useState } from "react";
import { motion } from 'framer-motion'
import SearchTab from "./search-tab";
import { InitialSearchReducer, Payloads as PayloadSearchAction, SearchActionKind, SearchReducer } from "./state/search-value";
import SearchInput from "./search-input";
import styles from './_search.module.scss'
import { InitialSearchLogic, SearchLogic, Payloads as PaylaodSearchLogic, SearchLogicKind } from "./state/search-logic";
import { useSearchParams } from "next/navigation";


interface SearchProviderComponentProps {
  isDetail: boolean
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
  showHeaderFixedHandler: () => {},
  isDetail: false
})


const useSearchProviderComponent = () => useContext(SearchContext)


const Search: SearchProviderComponent = forwardRef<SearchProviderRef, SearchProviderComponentProps>(
  ({ showHeaderFixedHandler, isDetail = true }, ref) => {
    const [filterSearch, dispatchFilterSearch] = useReducer(SearchReducer, InitialSearchReducer)
    const [searchLogic, dispatchSearchLogic] = useReducer(SearchLogic, InitialSearchLogic)
    const searchParams = useSearchParams()

    
    const handleScroll = () => {
      if (!isDetail) {
        if (window.scrollY > 50) dispatchSearchLogic({ type: SearchLogicKind.SHOWSEARCH, payload: false });
        else dispatchSearchLogic({ type: SearchLogicKind.SHOWSEARCH, payload: true });
      } else dispatchSearchLogic({ type: SearchLogicKind.SHOWSEARCH, payload: false })
      
      dispatchSearchLogic({ type: SearchLogicKind.SHOWCURRENTTAB, payload: null })
      dispatchSearchLogic({ type: SearchLogicKind.SHOWINPUTSEARCH, payload: null })
    };


    const hideSearch = () => {
      if (searchParams.get('show') === 'list') dispatchSearchLogic({ type: SearchLogicKind.SHOWSEARCH, payload: true });
      if (!isDetail && (searchParams.get('show') === 'list')) return
      dispatchSearchLogic({ type: SearchLogicKind.SHOWSEARCH, payload: false })
    }
  
  
    useEffect(() => {
      hideSearch()
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    useEffect(() => {
      hideSearch()
    }, [searchParams])


    return (
      <SearchContext.Provider value={{ filterSearch, dispatchFilterSearch, searchLogic, dispatchSearchLogic, showHeaderFixedHandler, isDetail }}>
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