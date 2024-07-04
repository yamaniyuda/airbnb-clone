import { FC, useState } from "react";
import { Button, Modal, Slider, Switch, UnstyledButton } from "@mantine/core";
import styles from "./_content-type.module.scss";
import Image from "next/image";

const ContentTypeFilter: FC = () => {
  const [isActiveTax, setIsActiveTax] = useState(false);
  const [showFilters, setShowFilteres] = useState(false);

  const onClickTaxHandler = () => {
    setIsActiveTax((prev) => !prev);
  };

  const onClickShowFilters = () => {
    setShowFilteres((prev) => !prev);
  };

  return (
    <div className={styles.content_type_filter}>
      <UnstyledButton onClick={onClickShowFilters}>
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

      <Modal opened={showFilters} centered onClose={onClickShowFilters}>
        <div className="pb-5">
          <h1 className="text-lg font-bold">Type of Place</h1>
          <p>Search rooms, entire homes, or any type of place</p>
          <div className="mt-3">
            <Button.Group>
              <Button size="md" variant="default">
                Any Type
              </Button>
              <Button size="md" variant="default">
                Room
              </Button>
              <Button size="md" variant="default">
                Entire home`
              </Button>
            </Button.Group>
          </div>
        </div>
        <div className="border-t-2 pt-5 pb-5">
          <h1 className="text-lg font-bold">Price Range</h1>
          <p>Nightly prices before fees and taxes</p>
          <div className="mt-3">
            <Slider thumbSize={29} defaultValue={20} />
          </div>
        </div>
        <div className="border-t-2 pt-5">
          <h1 className="text-lg font-bold">Booking option</h1>
          <div className="flex flex-col gap-5">
            <div className="flex">
              <div>
                <p>Instant Book</p>
                <p className="text-gray-400">Listings you can book without waiting for Host approval</p>
              </div>
              <Switch defaultChecked color="blue" size="lg" />
            </div>
            <div className="flex">
              <div>
                <p>Instant Book</p>
                <p className="text-gray-400">Listings you can book without waiting for Host approval</p>
              </div>
              <Switch defaultChecked color="blue" size="lg" />
            </div>
            <div className="flex">
              <div>
                <p>Instant Book</p>
                <p className="text-gray-400">Listings you can book without waiting for Host approval</p>
              </div>
              <Switch defaultChecked color="blue" size="lg" />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button className="bg-[#ff385c] w-[100%] text-white py-2 rounded-md">
            Filter
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ContentTypeFilter;
