import { Box, Center, HStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "src/lib/navigation/route_paths";
import LogoImage from "../Homepage/components/LogoImage";
import { motion } from "framer-motion";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const delay = 2000; // Set the delay in milliseconds

    const timeoutId = setTimeout(() => {
      navigate(RoutePaths.HOMEPAGE, { replace: true });
    }, delay);

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Center height="100vh" alignItems="center" justifyContent="center">
      <HStack alignItems="end">
        <Box pos="relative" bg="">
          <LogoImage
            height={{
              base: "30px",
              sm: "30px",
              md: "35px",
              lg: "45px",
              xl: "45px",
            }}
          />
          <motion.div
            initial={{ left: "30%" }}
            animate={{ left: "100%" }}
            transition={{
              duration: 2,
              delay: 0.5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            style={{
              zIndex: 1,
              top: 0,
              height: "100%",
              position: "absolute",
              background: "white",
              width: "10px",
              opacity: 0.8,
            }}
          ></motion.div>
        </Box>
      </HStack>
    </Center>
  );
};

export default Splash;

// Drawer Code

// const Splash = () => {
//   return (
//     <Flex height="100vh">
//       <motion.div
//         style={{ background: "red" }}
//         animate={{ flex: 0 }}
//         initial={{ flex: 1 }}
//         transition={{ duration: 2, delay: 1 }}
//       ></motion.div>
//       <motion.div
//         style={{ background: "transparent" }}
//         animate={{ flex: 1 }}
//         initial={{ flex: 0 }}
//         transition={{ duration: 2, delay: 1 }}
//       ></motion.div>
//       <motion.div
//         style={{ background: "green" }}
//         animate={{ flex: 0 }}
//         initial={{ flex: 1 }}
//         transition={{ duration: 2, delay: 1 }}
//       ></motion.div>
//     </Flex>
//   );
// };
// export default Splash;
