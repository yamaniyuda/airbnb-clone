import { FC } from "react";
import { motion } from 'framer-motion'
import SearchInputDestination from "./search-input-destination";
import styles from './_search.module.scss'
import SearchInputDate from "./search-input-date";
import SearchInputGuest from "./search-input-guest";


const SearchInput: FC = () => {
  return (
    <motion.div className={styles.search_input}>
      <SearchInputDestination />
      <SearchInputDate />
      <SearchInputGuest />
    </motion.div>
  )
}

export default SearchInput