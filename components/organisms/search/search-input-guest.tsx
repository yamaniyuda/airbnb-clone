import { FC } from "react";
import { Menu, UnstyledButton } from "@mantine/core";
import styles from "./_search.module.scss";
import { Variants, motion } from "framer-motion";
import { useSearchProviderComponent } from "./search";
import { inputCloseVariant, inputOpenVariant } from "./_variant_data";

const SearchInputGuest: FC = () => {
  const { searchLogic } = useSearchProviderComponent();

  return (
    <motion.div className={styles.search_input_guest__container}>
      <motion.div
        initial={false}
        variants={inputOpenVariant}
        animate={searchLogic?.showSearch ? "open" : "close"}
      >
        <Menu withArrow>
          <Menu.Target>
            <UnstyledButton className={styles.search_input_guest__button}>
              <label htmlFor="who">Who</label>
              <input type="text" id="who" placeholder="Add guests" />
            </UnstyledButton>
          </Menu.Target>
        </Menu>
      </motion.div>
      <motion.div
        initial={false}
        variants={inputCloseVariant}
        animate={searchLogic!.showSearch ? "close" : "open"}
        className={styles.search_input_destination__close}
      >
        <motion.span>Add guests</motion.span>
      </motion.div>
    </motion.div>
  );
};

export default SearchInputGuest;
