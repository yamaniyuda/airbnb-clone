import { FC, Suspense } from "react";
import { motion } from "framer-motion";
import styles from "./_search.module.scss";
import { useSearchProviderComponent } from "./search";
import { searchInputVariant } from "./_variant_data";
import SearchButton from "./search-button";
import dynamic, { DynamicOptions } from "next/dynamic";
import { Skeleton } from "@mantine/core";

const options: DynamicOptions<{}> = {
  ssr: false,
  loading: () => (
    <div className="px-8 flex justify-center gap-1 flex-col w-[100%] py-x h-[4rem]">
      <Skeleton height={20} radius="xl" />
      <Skeleton height={20} radius="xl" width={100} />
    </div>
  ),
};

const SearchInputDate = dynamic(() => import("./search-input-date"), {...options});
const SearchInputDestination = dynamic(() => import("./search-input-destination"), {...options});
const SearchInputGuest = dynamic(() => import("./search-input-guest"), {...options});

const SearchInput: FC = () => {
  const { searchLogic } = useSearchProviderComponent();

  return (
    <motion.div
      initial={"open"}
      variants={searchInputVariant}
      animate={searchLogic?.showSearch ? "open" : "close"}
      className={`
        ${styles.search_input}
        ${searchLogic!.shwoInputSearch !== null && styles.search_input__click}
      `}
    >
      <Suspense fallback={<div className="px-8 py-x h-[4rem]"><Skeleton height={20} radius="xl" /></div>}>
        <SearchInputDestination />
        <SearchInputDate />
        <SearchInputGuest />
      </Suspense>
      <SearchButton />
    </motion.div>
  );
};

export default SearchInput;
