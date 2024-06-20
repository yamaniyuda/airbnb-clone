"use client";

import { Box, Group, UnstyledButton } from "@mantine/core";
import { FC, useState } from "react";
import styles from "./_search.module.scss";

interface SearchInputGuestChildProps {
  title: string;
  desc: string;
  limit: number;
}

const PlusIcon: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 5l0 14" />
      <path d="M5 12l14 0" />
    </svg>
  );
};

const MinusIcon: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-minus"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
    </svg>
  );
};

const SearchInputGuestChild: FC<SearchInputGuestChildProps> = ({
  desc,
  limit,
  title,
}) => {
  const [count, setCount] = useState<number>(0);

  const countUpdateHandler = (add: boolean) => {
    if ((count === limit && add === true) || (count === 0 && add === false))
      return;
    setCount((prev) => {
      if (add) return prev + 1;
      return prev - 1;
    });
  };

  return (
    <Box className={styles.search_input_guest__input}>
      <Box className={styles.search_input_guest__input__text}>
        <span>{title}</span>
        <span>{desc}</span>
      </Box>
      <Box className={styles.search_input_guest__input__container}>
        <UnstyledButton onClick={() => countUpdateHandler(false)}>
          <Group className={styles.search_input_guest_child__plus__btn}>
            <MinusIcon />
          </Group>
        </UnstyledButton>
        <span>{count}</span>
        <UnstyledButton onClick={() => countUpdateHandler(true)}>
          <Group className={styles.search_input_guest_child__plus__btn}>
            <PlusIcon />
          </Group>
        </UnstyledButton>
      </Box>
    </Box>
  );
};

export default SearchInputGuestChild;
