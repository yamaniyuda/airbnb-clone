/**
 * @file search-tab.tsx
 * @description This file contains the implementation of the SearchTab component, which handles the display of search options and their behavior based on the scroll position of the window. The component uses Framer Motion for animations and React hooks for state management.
 */

import { FC, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import styles from "./_search.module.scss";

/**
 * @constant headerOptionVariant
 * @description Variants for Framer Motion to handle the animation of the search options.
 * @property {Variants} close - Defines the animation properties when the search options are closed (scrolled).
 */
const headerOptionVariant: Variants = {
  "close": {
    opacity: 0,
    scale: 0.1,
    height: 0,
    margin: 0,
    transition: {
      ease: "easeInOut",
      duration: .3,
      delay: .1
    },
  },
  "open": {
    opacity: 1,
    scale: 1,
    height: "auto",
    marginBottom: "1rem",
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  }
};

/**
 * @component SearchTab
 * @description A functional component that renders search options and handles their visibility based on scroll position.
 */
const SearchTab: FC = () => {
  // State to track if the window has been scrolled beyond a certain point
  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * @function handleScroll
   * @description Event handler for the window's scroll event. Updates the isScrolled state based on the scroll position.
   */
  const handleScroll = () => {
    if (window.scrollY > 50) setIsScrolled(true);
    else setIsScrolled(false);
  };

  // Use useEffect to add and clean up the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={styles.search_tab}
      initial={false}
      variants={headerOptionVariant}
      animate={isScrolled ? "close" : "open"}
    >
      <span className={styles.search_tab_option}>Stays</span>
      <span className={styles.search_tab_option}>Experiences</span>
      <span className={styles.search_tab_option}>Online Experiences</span>
    </motion.div>
  );
};

export default SearchTab;
