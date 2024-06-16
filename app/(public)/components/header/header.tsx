'use client'

import { FC } from "react";
import styles from './header.module.scss'
import HeaderTop from "./header-top";
import HeaderContent from "./header-content";
import { motion } from "framer-motion"

const Header: FC = () => {
  return (
    <motion.div className={styles.header_container}>
      <HeaderTop />
      <HeaderContent />
    </motion.div>
  );
};

export default Header;
