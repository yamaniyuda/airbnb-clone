import { FC } from 'react';
import { Menu, UnstyledButton } from '@mantine/core';
import styles from './_search.module.scss'
import { Variants, motion } from 'framer-motion';
import { useSearchProviderComponent } from './search';
import { inputCloseVariant, inputOpenVariant } from './_variant_data';


const SearchInputDate: FC = () => {
  const { searchLogic } = useSearchProviderComponent()

  return (
    <motion.div>
      <motion.div
        initial={false}
        variants={inputOpenVariant}
        animate={searchLogic?.showSearch ? "open" : "close"}
        className={styles.search_input_button__date__container}
      >
        <Menu withArrow>
          <Menu.Target>
            <UnstyledButton className={styles.search_input_button__date}>
              <label htmlFor="check-in">Check in</label>
              <input type="text" autoComplete='off' id='check-in' placeholder='Add dates' />
            </UnstyledButton>
          </Menu.Target>
          <Menu.Target>
            <UnstyledButton className={styles.search_input_button__date}>
              <label htmlFor="check-out">Check out</label>
              <input type="text" autoComplete='off' id='check-out' placeholder='Add dates' />
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
        <motion.span>Any week</motion.span>
      </motion.div>
    </motion.div>
  );
}


export default SearchInputDate