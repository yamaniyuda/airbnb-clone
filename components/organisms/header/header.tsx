'use client'

import { FC } from "react";
import HeaderTop from "./header-top";
import HeaderContent from "./header-content";
import { motion } from "framer-motion"
import styles from './_header.module.scss'

const Header: FC = () => {
  return (
    <motion.div className={styles.header_container}>
      <HeaderTop />
      <HeaderContent />
    </motion.div>
  );
};

export default Header;
