import BrandIcon from "@/components/atoms/brand-icon";
import { FC, useCallback, useEffect, useState } from "react";
import ProfileDropdown from "@/components/melecules/profile-dropdown";
import { motion, Variants } from "framer-motion";
import styles from "./_header.module.scss";
import Search from "../search/search";
import { useHeaderContentProvider } from "./header";


const headerContainerVariant: Variants = {
  "close": {
    borderRadius: 0,
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    position: "relative",
    height: "max-content",
    transition: {
      ease: "easeInOut",
      duration: .3,
      delay: 0
    },
  },
  "hidden_open_click": {
    borderRadius: 0,
    borderTop: "none",
    position: "fixed",
    top: "0px",
    zIndex: 50,
    width: "100%",
    height: "max-content",
    transition: {
      ease: "easeInOut",
      duration: .1,
    },
  },
  "open": {
    position: "relative",
    height: "max-content",
    transition: {
      ease: "easeInOut",
      duration: .3,
    },
  }
};



interface HeaderContentProps {}



const HeaderContent: FC<HeaderContentProps> = () => {
  const [animate, setAnimate] = useState<string>()
  const { isScrolled, showBlockHandler, isDetail } = useHeaderContentProvider()


  useEffect(() => {
    if (isDetail) {setAnimate("close"); return}
    if (isScrolled) setAnimate("close")
    else setAnimate("open")
    
  }, [isScrolled])


  const showHeaderFixedHandler = (showBlockHeader = true) => {
    setAnimate("hidden_open_click")
    showBlockHandler(showBlockHeader)
  }


  return (
    <motion.div
      initial={false}
      variants={headerContainerVariant}
      className={`
        ${styles.header_content} 
      `}
      animate={animate}
    >
      <BrandIcon />
      <Search showHeaderFixedHandler={showHeaderFixedHandler} isDetail={isDetail} />
      <ProfileDropdown />
    </motion.div>
  );
};

export default HeaderContent;
