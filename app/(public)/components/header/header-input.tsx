
import { FC } from "react";
import React, { useState, useEffect } from 'react';
import { motion, useAnimation, Variant, Variants } from 'framer-motion';
import styles from './header-input.module.scss'


const headerOptionVariant: Variants = {
  "close": {
    opacity: 0,
    scale: 0.1,
    transition: {
      ease: "easeOut",
      duration: .3
    }
  },
  "open": {

  }
}


const HeaderInput: FC = () => {
  const controls = useAnimation();
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



  useEffect(() => {
    if (isScrolled) {
      controls.start({  transition: { duration: 0.3 } });
    } else {
      controls.start({  transition: { duration: 0.3 } });
    }
  }, [isScrolled, controls]);



  return (
    <div>
      <motion.div
        className={styles.search_bar}
        animate={controls}
      >
        <motion.div
          className={styles.search_bar__option}
          initial={false}
          variants={headerOptionVariant}
          animate={isScrolled ? "close" : "open"}
        >
          <span>Stays</span>
          <span>Experices</span>
          <span>Online Experices</span>
        </motion.div>
        <motion.div>
          <input type="text" placeholder="Search destinations" />
          <input type="date" placeholder="Check in" />
          <input type="date" placeholder="Check out" />
          <input type="text" placeholder="Add guests" />
          <button>Search</button>
        </motion.div>
      </motion.div>
    </div>
  );

}

export default HeaderInput