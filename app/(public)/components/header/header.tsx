import { FC, Fragment } from "react";
import styles from './header.module.scss'
import BrandIcon from "@/components/atoms/brand-icon";
import ProfileDropdown from "@/components/melecules/profile-dropdown";
import HeaderInput from "./header-input";

const Header: FC = () => {
  return (
    <Fragment>
      <div className={styles.header}>
        <BrandIcon />
        <HeaderInput />
        <ProfileDropdown />
      </div>
      <div style={{ height: '200vh' }} className="bg-gray-400"></div>
    </Fragment>
  );
};

export default Header;
