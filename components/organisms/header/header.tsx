'use client'

import { createContext, FC, Suspense, useCallback, useContext, useEffect, useState } from "react";
import HeaderTop from "./header-top";
import HeaderContent from "./header-content";
import { motion, Variants } from "framer-motion"
import styles from './_header.module.scss'
import ContentType from "../content-type/content-type";
import { headerVariant } from "./_variant_data";
import { useSearchParams } from "next/navigation";


interface HeaderProps {
  isDetail?: boolean
}


interface HeaderContextProps {
  isScrolled: boolean
  isDetail: boolean
  isMapContent: boolean
  showBlockHandler: any
}


const HeaderContentProvider = createContext<HeaderContextProps>({
  isDetail: false,
  isMapContent: false,
  isScrolled: false,
  showBlockHandler: () => {}
})


const useHeaderContentProvider = () => useContext(HeaderContentProvider)


const Header: FC<HeaderProps> = ({ isDetail = false }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [showBlackEl, setShowBlockEl] = useState<boolean>(false)
  const searchParams = useSearchParams()


  useEffect(() => {
    if (isDetail) return
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const showBlockHandler = (value = true) => {
    setShowBlockEl(value)
  }


  const handleScroll = () => {
    setShowBlockEl(false)
    if (window.scrollY > 50) setIsScrolled(true);
    else setIsScrolled(false);

  };


  const checkShowHideHeaderTop = useCallback(() => {
    const show = searchParams.get('show') || 'list'
    return !(show === 'map' || isDetail)
  }, [searchParams, isDetail])




  return (
    <HeaderContentProvider.Provider value={{ isDetail, isScrolled, showBlockHandler, isMapContent: searchParams.get('show') === 'map' }}>
      <motion.div initial={false} variants={headerVariant} animate={isScrolled ? "close" : "open"} className={styles.header_container}>
       <Suspense>
          { checkShowHideHeaderTop() && <HeaderTop />}
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