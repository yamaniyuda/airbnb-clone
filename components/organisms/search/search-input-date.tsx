import { FC } from 'react';
import { Menu, UnstyledButton } from '@mantine/core';
import styles from './_search.module.scss'


const SearchInputDate: FC = () => {
  return (
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
  );
}


export default SearchInputDate