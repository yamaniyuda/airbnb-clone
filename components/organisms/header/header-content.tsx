import BrandIcon from "@/components/atoms/brand-icon";
import { FC, useEffect, useState } from "react";
import HeaderInput from "./header-input";
import ProfileDropdown from "@/components/melecules/profile-dropdown";
import { motion, Variants } from "framer-motion";
import styles from "./_header.module.scss";


const headerContainerVariant: Variants = {
  "close": {
    borderRadius: 0,
    transition: {
      ease: "easeInOut",
      duration: .3,
      delay: .1
    },
  },
};



const HeaderContent: FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  /**
   * handleScroll
   * Will handle scroll and update state `isScrolled`
   * @returns {void}
   */
  const handleScroll = () => {
    if (window.scrollY > 50) setIsScrolled(true);
    else setIsScrolled(false);
  };


  return (
    <motion.div
      initial={false}
      variants={headerContainerVariant}
      className={styles.header_content}
      animate={isScrolled ? "close" : "open"}
    >
      <BrandIcon />
      <HeaderInput />
      <ProfileDropdown />
    </motion.div>
  );
};

export default HeaderContent;
