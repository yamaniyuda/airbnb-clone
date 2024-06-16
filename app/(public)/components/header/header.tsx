import { FC, Fragment } from "react";
import styles from './header.module.scss'
import BrandIcon from "@/components/atoms/brand-icon";
import ProfileDropdown from "@/components/melecules/profile-dropdown";
import HeaderInput from "./header-input";
import HeaderTop from "./header-top";

const Header: FC = () => {
  return (
    <div className={styles.header_container}>
      <HeaderTop />
      <div className={styles.header_content}>
        <BrandIcon />
        <HeaderInput />
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Header;
