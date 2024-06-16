import { FC } from 'react';
import { Menu, UnstyledButton } from '@mantine/core';
import styles from './_search.module.scss'


const SearchInputDate: FC = () => {
  return (
    <Menu withArrow>
      <Menu.Target>
        <UnstyledButton className={styles.search_input_button}>
          <label htmlFor="destination">Where</label>
          <input type="text" id='destination' placeholder='Search destinations' />
        </UnstyledButton>
      </Menu.Target>
    </Menu>
  );
}


export default SearchInputDate