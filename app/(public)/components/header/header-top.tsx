'use client'

import { FC, useEffect, useState } from "react";
import { motion, Variants } from 'framer-motion'
import styles from './header-top.module.scss'


const headerTopVariant: Variants = {
  "close": {
    display: "none",
    transition: {
      ease: "easeInOut",
      duration: .3,
      delay: .1
    },
    translateY: 50,
    scale: .5,
    opacity: 0,
    height: 0
  },
  open: {
    translateY: 0,
    scale: 1,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.3,
    }
  },
}


const HeaderTop: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) setIsScrolled(true);
    else setIsScrolled(false);
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div initial={false} variants={headerTopVariant} animate={isScrolled ? "close" : "open"} className={styles.header_top}>
      <motion.span className={styles.header_top__span}>
        Learn more about Icons
      </motion.span>
    </motion.div>
  )
}

export default HeaderTop