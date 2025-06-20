const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

export { containerVariants, initialChild, previewChild };
