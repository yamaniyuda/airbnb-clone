import { FC } from "react";
import { motion, Variants } from 'framer-motion'
import SearchInputDestination from "./search-input-destination";
import styles from './_search.module.scss'
import SearchInputDate from "./search-input-date";
import SearchInputGuest from "./search-input-guest";
import { useSearchProviderComponent } from "./search";
import { searchInputVariant } from "./_variant_data";
import SearchButton from "./search-button";


const SearchInput: FC = () => {
  const { searchLogic } = useSearchProviderComponent()

  return (
    <motion.div 
      initial={"open"}
      variants={searchInputVariant}
      animate={searchLogic?.showSearch ? "open" : "close"}
      className={`
        ${styles.search_input}
        ${ searchLogic!.shwoInputSearch !== null && styles.search_input__click }  
      `}
    >
      <SearchInputDestination />
      <SearchInputDate />
      <SearchInputGuest />
      <SearchButton />
    </motion.div>
  )
}

export default SearchInput