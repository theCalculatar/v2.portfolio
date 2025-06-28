const containerVariants = {
  hidden: {
    opacity: 0.3,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const fipperContainer = {
  hidden: {},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0,
    },
  },
};

const initialChild = {
  hidden: { opacity: 1, y: 0, display: "block" },
  visible: { opacity: 0, y: -20, display: "none" },
};
const previewChild = {
  hidden: { opacity: 0, y: 0, display: "none" },
  visible: { opacity: 1, y: 0, display: "block" },
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export {
  containerVariants,
  initialChild,
  previewChild,
  slideUp,
  fipperContainer,
};
