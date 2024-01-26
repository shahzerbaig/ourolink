import iconArrowUp from "@assets/icon_arrow_up.svg";
import { useEffect, useState } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import scrollToTopOfPage from "src/lib/utils/scroll_to_top_of_page";
import { AnimatePresence, motion } from "framer-motion";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and update the state
      const isScrolled = window.scrollY > 100; // You can adjust the threshold as needed
      setIsVisible(isScrolled);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: isVisible ? 0.3 : 1 }}
        >
          <Flex
            onClick={scrollToTopOfPage}
            cursor="pointer"
            flexDir="column"
            justifyContent="center"
            align="center"
            zIndex={1}
            bottom={{
              base: 1,
              md: 5,
            }}
            right={{
              base: 1,
              md: 5,
            }}
            position="fixed"
            bg=""
            height="100px"
            width="100px"
          >
            <Image
              boxSize={{
                base: "30px",
                md: "40px",
                lg: "50px",
              }}
              alt="Icon arrow up"
              src={iconArrowUp}
            />
            <Text
              fontSize={{
                base: "10px",
                md: "11px",
                lg: "13px",
              }}
            >
              Scroll to top
            </Text>
          </Flex>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
