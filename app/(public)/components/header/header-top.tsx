'use client'

import { FC } from "react";
import { motion, Variants } from 'framer-motion'
import styles from './header-top.module.scss'


const headerTopVariant: Variants = {
  "close": {
    
  },
  "open": {
    
  }
}


const HeaderTop: FC = () => {
  return (
    <motion.div className={styles.header_top}>
      <motion.span className={styles.header_top__span}>
        Learn more about Icons
      </motion.span>
    </motion.div>
  )
}

export default HeaderTop