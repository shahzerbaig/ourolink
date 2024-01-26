import workStack, {
  WorkStackImageProps,
  WorkStackProps,
} from "@datautils/work_stack";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BasePage from "src/lib/base/BasePage";
import { useRecentWorkViewModel } from "src/lib/providers/RecentWorkViewModelProvider";
import RecentWorkHeroSection from "./sections/RecentWorkHeroSection";
import { SectionSpacing } from "@components/SectionSpacing";
import AnimateOnLoad from "@components/AnimateOnLoad";
import { Box, Flex } from "@chakra-ui/react";
import RecentWorkProjectDetails from "./sections/RecentWorkProjectDetails";

export type RecentWorkNavParams = {
  slug: string;
};

const RecentWork = () => {
  const location = useLocation();
  const viewModel = useRecentWorkViewModel();
  const [projectDetails, setProjectDetails] = useState<
    WorkStackProps | undefined
  >();

  useEffect(() => {
    // Access the data passed from the previous page
    const recentWorkNavParams = location.state as RecentWorkNavParams;
    viewModel.setRecentWorkNavParams(recentWorkNavParams);

    const pDetails = viewModel.getProjectDetails();

    setProjectDetails(pDetails);

    return () => {
      viewModel.dispose();
    };
  }, []);

  return (
    <BasePage>
      <RecentWorkHeroSection projectDetails={projectDetails} />
      <Box height="50px" />

      <RecentWorkProjectDetails projectDetails={projectDetails} />
    </BasePage>
  );
};

export default RecentWork;
