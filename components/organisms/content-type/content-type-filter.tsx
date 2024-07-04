import { FC, useState } from "react";
import { Switch, UnstyledButton } from "@mantine/core";
import styles from "./_content-type.module.scss";
import Image from "next/image";

const ContentTypeFilter: FC = () => {
  const [isActiveTax, setIsActiveTax] = useState(false)


  const onClickTaxHandler = () => {
    setIsActiveTax(prev => !prev)
  }


  return (
    <div className={styles.content_type_filter}>
      <UnstyledButton>
        <div className={styles.content_type_filter__button__filters}>
          <Image src={"/icons/filter.svg"} alt="k" width={15} height={15} />
          Filters
        </div>
      </UnstyledButton>
      <UnstyledButton onClick={onClickTaxHandler}>
        <div className={styles.content_type_filter__button__taxes}>
          Display total before taxes
          <Switch color="gray" checked={isActiveTax} />
        </div>
      </UnstyledButton>
    </div>
  );
};

export default ContentTypeFilter;
