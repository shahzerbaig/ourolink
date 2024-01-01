import { Box } from "@chakra-ui/react";
import AppPageHeading from "../../../ui/components/AppPageHeading";
import AppMaterialButton from "../../../ui/components/AppMaterialButton";
import HeroImage from "../components/HeroImage";
import { useHomepageViewModel } from "src/lib/providers/HomepageViewModelProvider";
import AppPageSubheading from "src/lib/ui/components/AppPageSubheading";
import { Link } from "react-router-dom";
import { RoutePaths } from "src/lib/navigation/route_paths";

const HeroSection = () => {
  const viewModel = useHomepageViewModel();

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
        <AppPageHeading>Paint your ideas in pixels</AppPageHeading>
        <Box height="30px" />

        <AppPageSubheading>
          We help small-to-medium companies and agencies build highly scalable
          softwares and help them do more in less time
        </AppPageSubheading>

        <Box height="25px" />
        <Link to={RoutePaths.WORK}>
          <AppMaterialButton onClick={() => {}}>
            View our portfolio
          </AppMaterialButton>
        </Link>
      </Box>

      <Box height="75px" />

      <Box flex="1" display="flex" justifyContent="center" backgroundColor="">
        <HeroImage />
      </Box>
    </Box>
  );
};

export default HeroSection;
