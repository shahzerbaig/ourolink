import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  translateX?: number;
  translateY?: number;
}

const AnimateOnLoad = ({
  children,
  duration = 0.5,
  delay,
  translateX,
  translateY = 0,
}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: translateX,
        translateY: translateY,
      }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: duration, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnLoad;
