import { FC } from 'react';
import { Menu, UnstyledButton } from '@mantine/core';
import styles from './_search.module.scss'


const SearchInputGuest: FC = () => {
  return (
    <Menu withArrow>
      <Menu.Target>
        <UnstyledButton className={styles.search_input_button}>
          <label htmlFor="who">Who</label>
          <input type="text" id='who' placeholder='Add guests' />
        </UnstyledButton>
      </Menu.Target>
    </Menu>
  );
}


export default SearchInputGuest