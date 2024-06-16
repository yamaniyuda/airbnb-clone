import { FC } from 'react';
import { Menu, UnstyledButton, rem, Text, CheckboxCard, Group, Checkbox } from '@mantine/core';
import styles from './_search.module.scss'
import Image from 'next/image';

const regionImageNames: string[] = [
  'word', 'australia', 'malaysia', 'europe', 'jepan', 'united-states'
]


const SearchInputDestination: FC = () => {
  

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


  return (
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
  );
}


export default SearchInputDestination