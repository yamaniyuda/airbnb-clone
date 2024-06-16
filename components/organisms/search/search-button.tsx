import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./_search.module.scss";
import { useSearchProviderComponent } from "./search";
import { searchButtonVariant } from "./_variant_data";

const SearchButton: FC = () => {
  const { searchLogic } = useSearchProviderComponent();

  return (
    <motion.div 
      initial={false}
      variants={searchButtonVariant}
      animate={searchLogic?.showSearch ? "open" : "close"}
      className={styles.search_input_guest__icon__container}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        className={styles.search_input_guest__icon}
      >
        <path
          fill="none"
          d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
        ></path>
      </svg>
    </motion.div>
  );
};


export default SearchButton