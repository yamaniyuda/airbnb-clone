import BrandIcon from "@/components/atoms/brand-icon";
import { FC, useEffect, useState } from "react";
import ProfileDropdown from "@/components/melecules/profile-dropdown";
import { motion, Variants } from "framer-motion";
import styles from "./_header.module.scss";
import Search from "../search/search";


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



interface HeaderContentProps {
  showBlockElHandler: VoidFunction
}



const HeaderContent: FC<HeaderContentProps> = ({ showBlockElHandler }) => {
  const [animate, setAnimate] = useState<string>()


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const handleScroll = () => {
    if (window.scrollY > 50) setAnimate("close");
    else setAnimate("open");
  };


  const showHeaderFixedHandler = () => {
    setAnimate("hidden_open_click")
    showBlockElHandler()
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
      <Search showHeaderFixedHandler={showHeaderFixedHandler} />
      <ProfileDropdown />
    </motion.div>
  );
};

export default HeaderContent;
