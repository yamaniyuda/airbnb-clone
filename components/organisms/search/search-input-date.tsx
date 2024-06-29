import { FC, useState } from 'react';
import { Box, Menu, UnstyledButton } from '@mantine/core';
import styles from './_search.module.scss'
import { Variants, motion } from 'framer-motion';
import { useSearchProviderComponent } from './search';
import { DatePicker } from '@mantine/dates';
import { inputCloseVariant, inputOpenVariant } from './_variant_data';
import { SearchLogicKind } from './state/search-logic';


const SearchInputDate: FC = () => {
  const { searchLogic, dispatchSearchLogic, showHeaderFixedHandler } = useSearchProviderComponent()


  const buttonOnClickHandler = () => {
    dispatchSearchLogic({ type: SearchLogicKind.SHOWINPUTSEARCH, payload:'date' })
  }

  const hiddenContentClickHandler = () => {
    showHeaderFixedHandler()
    dispatchSearchLogic({ type: SearchLogicKind.SHOWSEARCH, payload: true })
    setTimeout(() => buttonOnClickHandler(), 300)
  }

  return (
    <motion.div>
      <motion.div
        initial={false}
        variants={inputOpenVariant}
        animate={searchLogic?.showSearch ? "open" : "close"}
      >
        <Menu opened={searchLogic?.shwoInputSearch === 'date'}>
          <Menu.Target>
            <Box 
              onClick={buttonOnClickHandler} 
              className={`
                ${styles.search_input_button__date__container}
                ${searchLogic?.shwoInputSearch === 'date' && styles.search_input_button__active}  
              `}
            >
              <UnstyledButton className={styles.search_input_button__date__left}>
                <label htmlFor="check-in">Check in</label>
                <input type="text" autoComplete='off' id='check-in' placeholder='Add dates' />
              </UnstyledButton>
              <UnstyledButton className={styles.search_input_button__date__right}>
                <label htmlFor="check-out">Check out</label>
                <input type="text" autoComplete='off' id='check-out' placeholder='Add dates' />
              </UnstyledButton>
            </Box>
          </Menu.Target>

          <Menu.Dropdown className={styles.search_input_destination__container}>
            <DatePicker numberOfColumns={2} type="range" />
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
        <motion.span>Any week</motion.span>
      </motion.div>
    </motion.div>
  );
}


export default SearchInputDate