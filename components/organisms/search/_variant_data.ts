import { Variants } from "framer-motion"

export const inputOpenVariant: Variants = {
  "close": {
    opacity: 0,
    scale: 0.1,
    display: "none",
    transition: {
      ease: "easeInOut",
      duration: .2,
    },
  },
  "open": {
    opacity: 1,
    scale: 1,
    visibility: "visible",
    transition: {
      ease: "easeInOut",
      duration: .2,
    },
  },
}


export const inputCloseVariant: Variants = {
  "open": {
    opacity: 1,
    display: "flex",
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: .2,
      delay: .2
    },
  },
  "close": {
    opacity: 0,
    display: "none",
    scale: 0.1,
    transition: {
      ease: "easeInOut",
      duration: .1,
    },
  }
}


export const searchInputVariant: Variants = {
  "close": {
    width: "400px",
    height: "7vh",
    transition: {
      ease: "easeInOut",
      duration: .2,
    },
  },
  "open": {
    width: "851px",
    height: "max-content",
    transition: {
      ease: "easeInOut",
      duration: .2,
    },
  }
}


export const searchButtonVariant: Variants = {
  "close": {
    padding: '0.5rem',
    transition: {
      ease: "easeInOut",
      duration: .2,
    },
  },
  "open": {
    padding: '1.25rem',
    transition: {
      ease: "easeInOut",
      duration: .2,
    },
  }
}


export const headerOptionVariant: Variants = {
  "close": {
    opacity: 0,
    scale: 0.1,
    height: 0,
    margin: 0,
    transition: {
      ease: "easeInOut",
      duration: .3,
      delay: .1
    },
  },
  "open": {
    opacity: 1,
    scale: 1,
    height: "auto",
    marginBottom: "1rem",
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  }
};