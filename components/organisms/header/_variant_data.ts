import { Variants } from "framer-motion";

export const headerVariant: Variants = {
  "close": {
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    transition: {
      ease: "easeInOut",
      duration: .3,
      delay: .1
    },
  },
};


export const headerTopVariant: Variants = {
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