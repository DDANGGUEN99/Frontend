import { motion } from 'framer-motion';

const Animate = ({ animate, children }) => {
  
  return (
    <motion.div
      initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit}
    >
      {children}
    </motion.div>
  );
};

export default Animate;
