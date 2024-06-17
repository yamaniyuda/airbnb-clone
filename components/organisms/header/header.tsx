'use client'

import { FC, useEffect, useState } from "react";
import HeaderTop from "./header-top";
import HeaderContent from "./header-content";
import { motion, Variants } from "framer-motion"
import styles from './_header.module.scss'
import ContentType from "../content-type/content-type";


const headerVariant: Variants = {
  "close": {
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    transition: {
      ease: "easeInOut",
      duration: .3,
      delay: .1
    },
  },
};


const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const handleScroll = () => {
    if (window.scrollY > 50) setIsScrolled(true);
    else setIsScrolled(false);
  };

  return (
    <motion.div initial={false} variants={headerVariant} animate={isScrolled ? "close" : "open"} className={styles.header_container}>
      <HeaderTop />
      <HeaderContent />
      <ContentType />
    </motion.div>
  );
};

export default Header;
