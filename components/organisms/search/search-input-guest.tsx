import { FC } from "react";
import { Box, Menu, UnstyledButton } from "@mantine/core";
import styles from "./_search.module.scss";
import { Variants, motion } from "framer-motion";
import { useSearchProviderComponent } from "./search";
import { inputCloseVariant, inputOpenVariant } from "./_variant_data";
import SearchInputGuestChild from "./search-input-guest-child";
import { SearchLogicKind } from "./state/search-logic";



const SearchInputGuest: FC = () => {
  const { searchLogic, dispatchSearchLogic, showHeaderFixedHandler } = useSearchProviderComponent();


  const buttonOnClickHandler = () => {
    dispatchSearchLogic({ type: SearchLogicKind.SHOWINPUTSEARCH, payload:'guest' })
  }


  const hiddenContentClickHandler = () => {
    showHeaderFixedHandler()
    dispatchSearchLogic({ type: SearchLogicKind.SHOWSEARCH, payload: true })
    setTimeout(() => buttonOnClickHandler(), 300)
  }


  return (
    <motion.div className={styles.search_input_guest__container}>
      <motion.div
        initial={false}
        variants={inputOpenVariant}
        animate={searchLogic?.showSearch ? "open" : "close"}
        className="w-[100%]"
      >
        <Menu opened={searchLogic?.shwoInputSearch === 'guest'}>
          <Menu.Target>
          <UnstyledButton 
            onClick={buttonOnClickHandler}
            className={`
              ${styles.search_input_button}
              ${searchLogic?.shwoInputSearch === 'guest' && styles.search_input_button__active}
            `}>
            <label htmlFor="who">Who</label>
            <input type="text" id="who" placeholder="Add guests" />
          </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown className={styles.search_input_guest__container__modal}>
            <SearchInputGuestChild title="Adults" desc="Ages 13 or above" limit={10} />
            <div className={styles.search_input_guest__input__border_bottom}></div>
            <SearchInputGuestChild title="Children" desc="Ages 2 - 12" limit={10} />
            <div className={styles.search_input_guest__input__border_bottom}></div>
            <SearchInputGuestChild title="Infants" desc="Under 2" limit={10} />
            <div className={styles.search_input_guest__input__border_bottom}></div>
            <SearchInputGuestChild title="Pets" desc="Bringing a service animal?" limit={10} />
          </Menu.Dropdown>
        </Menu>
      </motion.div>
      <motion.div
        initial={false}
        variants={inputCloseVariant}
        animate={searchLogic!.showSearch ? "close" : "open"}
        className={styles.search_input_destination__close}
        onClick={hiddenContentClickHandler}
      >
        <motion.span>Add guests</motion.span>
      </motion.div>
    </motion.div>
  );
};

export default SearchInputGuest;
