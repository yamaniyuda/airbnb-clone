import { FC, useEffect } from 'react';
import { Menu, UnstyledButton, rem, Text, CheckboxCard, Group, Checkbox } from '@mantine/core';
import Image from 'next/image';
import { motion } from 'framer-motion'
import { useSearchProviderComponent } from './search';
import { Variants } from 'framer-motion';
import styles from './_search.module.scss'
import { inputCloseVariant, inputOpenVariant } from './_variant_data';
import { SearchLogicKind } from './state/search-logic';


const regionImageNames: string[] = [
  'word', 'australia', 'malaysia', 'europe', 'jepan', 'united-states'
]


const SearchInputDestination: FC = () => {
  const { searchLogic, dispatchSearchLogic, showHeaderFixedHandler } = useSearchProviderComponent()


  const regionComponent = regionImageNames.map((data, key) => {
    return (
      <CheckboxCard className={styles.search_input_destination__card} value={data} key={key}>
        <Group wrap='nowrap'>
          <div>
            <Image src={`/regions/${data}.png`} width={100} height={100} alt={`region-${data}`}></Image>
            <span>{data}</span>
          </div>
        </Group>
      </CheckboxCard>
    )
  })


  const hiddenContentClickHandler = () => {
    showHeaderFixedHandler()
    dispatchSearchLogic({ type: SearchLogicKind.SHOWSEARCH, payload: true })
  }


  return (
    <motion.div>
      <motion.div
        initial={false}
        variants={inputOpenVariant}
        animate={searchLogic?.showSearch ? "open" : "close"}
      >
        <Menu withArrow>
          <Menu.Target>
            <UnstyledButton className={styles.search_input_button}>
              <label htmlFor="destination">Where</label>
              <input type="text" id='destination' placeholder='Search destinations' />
            </UnstyledButton>
          </Menu.Target>

          <Menu.Dropdown className={styles.search_input_destination__container}>
            <Menu.Label className={styles.search_input_destination__label}>Search by region</Menu.Label>
            <Checkbox.Group>
              <div className={styles.search_input_destination__region}>
                {regionComponent}
              </div>
            </Checkbox.Group>
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
        <motion.span>Anywhere</motion.span>
      </motion.div>
    </motion.div>
  );
}


export default SearchInputDestination