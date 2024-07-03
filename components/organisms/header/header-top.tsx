'use client'

import { FC } from "react";
import { motion } from 'framer-motion'
import styles from './_header.module.scss'
import { useHeaderContentProvider } from "./header";
import { headerTopVariant } from "./_variant_data";


const HeaderTop: FC = () => {
  const { isScrolled } = useHeaderContentProvider()

 
  return (
    <motion.div initial={false} variants={headerTopVariant} animate={isScrolled  ? "close" : "open"} className={styles.header_top}>
      <motion.span className={styles.header_top__span}>
        Learn more about Icons
      </motion.span>
    </motion.div>
  )
}

export default HeaderTop