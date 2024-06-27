/**
 * @file search-tab.tsx
 * @description This file contains the implementation of the SearchTab component, which handles the display of search options and their behavior based on the scroll position of the window. The component uses Framer Motion for animations and React hooks for state management.
 */

import { FC, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import styles from "./_search.module.scss";
import { useSearchProviderComponent } from "./search";
import { headerOptionVariant } from "./_variant_data";


/**
 * @component SearchTab
 * @description A functional component that renders search options and handles their visibility based on scroll position.
 */
const SearchTab: FC = () => {
  const { searchLogic } = useSearchProviderComponent()

  return (
    <motion.div
      className={styles.search_tab}
      initial={false}
      variants={headerOptionVariant}
      animate={searchLogic!.showSearch ? "open" : "close"}
    >
      <span className={styles.search_tab_option}>Stays</span>
      <span className={styles.search_tab_option}>Experiences</span>
      <span className={styles.search_tab_option}>Online Experiences</span>
    </motion.div>
  );
};

export default SearchTab;
