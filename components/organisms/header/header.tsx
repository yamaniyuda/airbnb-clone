'use client'

import { createContext, FC, Suspense, useContext, useEffect, useState } from "react";
import HeaderTop from "./header-top";
import HeaderContent from "./header-content";
import { motion, Variants } from "framer-motion"
import styles from './_header.module.scss'
import ContentType from "../content-type/content-type";
import { headerVariant } from "./_variant_data";


interface HeaderProps {
  isDetail?: boolean
}


interface HeaderContextProps {
  isScrolled: boolean
  isDetail: boolean
  showBlockHandler: VoidFunction
}


const HeaderContentProvider = createContext<HeaderContextProps>({
  isDetail: false,
  isScrolled: false,
  showBlockHandler: () => {}
})


const useHeaderContentProvider = () => useContext(HeaderContentProvider)


const Header: FC<HeaderProps> = ({ isDetail = false }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [showBlackEl, setShowBlockEl] = useState<boolean>(false)


  useEffect(() => {
    if (isDetail) return
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const showBlockHandler = () => {
    setShowBlockEl(!showBlackEl)
  }


  const handleScroll = () => {
    if (window.scrollY > 50) setIsScrolled(true);
    else setIsScrolled(false);
    setShowBlockEl(false)
  };


  return (
    <HeaderContentProvider.Provider value={{ isDetail, isScrolled, showBlockHandler }}>
      <motion.div initial={false} variants={headerVariant} animate={isScrolled ? "close" : "open"} className={styles.header_container}>
       <Suspense>
          { !isDetail && <HeaderTop />}
          <HeaderContent />
          { !isDetail && <ContentType /> }
        </Suspense>
        { showBlackEl && <div className={styles.header_content__fixed}></div> }
      </motion.div>
    </HeaderContentProvider.Provider>
  );
};

export default Header;
export { useHeaderContentProvider }