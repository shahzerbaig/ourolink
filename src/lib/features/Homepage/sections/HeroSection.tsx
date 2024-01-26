import { Box, useBreakpointValue } from "@chakra-ui/react";
import AppPageHeading from "../../../ui/components/AppPageHeading";
import AppMaterialButton from "../../../ui/components/AppMaterialButton";
import { useHomepageViewModel } from "src/lib/providers/HomepageViewModelProvider";
import AppPageSubheading from "src/lib/ui/components/AppPageSubheading";
import { Link } from "react-router-dom";
import { RoutePaths } from "src/lib/navigation/route_paths";
import AnimateOnLoad from "@components/AnimateOnLoad";
import LottieHeroAnimation from "../components/LottieHeroAnimation";

const HeroSection = () => {
  const viewModel = useHomepageViewModel();

  const lottieWidth =
    useBreakpointValue({
      base: "200px",
      md: "250px",
      lg: "300px",
    }) ?? "250px";

  // The animation on load properties
  const animationOnLoadProps = viewModel.animationOnLoadProps;

  return (
    <Box
      display="flex"
      flexDirection={{
        base: "column",
        md: "row",
      }}
    >
      <Box
        justifyContent="center"
        flex="1"
        display="flex"
        flexDirection="column"
      >
        <AnimateOnLoad
          delay={animationOnLoadProps.delay()}
          translateY={animationOnLoadProps.translateY}
        >
          <AppPageHeading>Paint your ideas in pixels</AppPageHeading>
        </AnimateOnLoad>

        <Box height="30px" />

        <AnimateOnLoad
          delay={animationOnLoadProps.delay()}
          translateY={animationOnLoadProps.translateY}
        >
          <AppPageSubheading>
            We help small-to-medium companies and agencies build highly scalable
            softwares and help them do more in less time
          </AppPageSubheading>
        </AnimateOnLoad>

        <Box height="25px" />

        <AnimateOnLoad
          delay={animationOnLoadProps.delay()}
          translateY={animationOnLoadProps.translateY}
        >
          <Link to={RoutePaths.WORK}>
            <AppMaterialButton onClick={() => {}}>
              View our portfolio
            </AppMaterialButton>
          </Link>
        </AnimateOnLoad>
      </Box>

      <Box height="75px" />
      <Box width="75px" />

      <AnimateOnLoad duration={1} delay={0.75} translateY={100}>
        <Box flex="1" display="flex" justifyContent="center" backgroundColor="">
          {/* <HeroImage /> */}

          <LottieHeroAnimation width={lottieWidth} />
        </Box>
      </AnimateOnLoad>
    </Box>
  );
};

export default HeroSection;
