import { FC, Fragment } from "react";
import styles from './header.module.scss'
import BrandIcon from "@/components/atoms/brand-icon";
import ProfileDropdown from "@/components/melecules/profile-dropdown";

const Header: FC = () => {
  return (
    <Fragment>
      <div className={styles.header}>
        <BrandIcon />
        <ProfileDropdown />
      </div>
      
    </Fragment>
  );
};

export default Header;
