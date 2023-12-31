import { Box, Image, Text } from "@chakra-ui/react";
import "@fontsource/poppins/300.css";
import icon_north_east from "../../../../assets/icon_north_east.png";

export interface SingleProject {
  projectName: string;
  category: string;
  imageURL: string;
}

interface Props {
  project: SingleProject;
}

const ProjectImage = ({ project }: Props) => {
  return (
    <Image
      fit="cover"
      height="80%"
      borderRadius={12}
      src={project.imageURL}
    ></Image>
  );
};

const ProjectDetails = ({ project }: Props) => {
  return (
    <Box justifyContent="space-between" flexDirection="row" display="flex">
      <Box alignItems="start" flexDirection="column" display="flex">
        {/* PROJECT NAME */}
        <Text letterSpacing={2} fontWeight="bold" fontSize={17}>
          {project.projectName}
        </Text>

        <Box height={2} />

        {/* PROJECT CATEGORY */}
        <Text letterSpacing={2} fontWeight="300" fontSize={13}>
          {project.category}
        </Text>

        <Box height={2} />
      </Box>

      {/* ARROW ICON */}
      <Image boxSize={5} fit="contain" src={icon_north_east}></Image>
    </Box>
  );
};

const SingleProjectSkeleton = ({ project }: Props) => {
  return (
    <Box
      // TODO
      // cursor="pointer"
      boxShadow="0px 2px 10px rgba(0, 0, 0, 0.1)"
      borderRadius={10}
      borderWidth={0.1}
      borderColor="#4F4F4F"
      borderStyle="solid"
      backgroundColor="#F8F8F8"
      textAlign="center"
      paddingX={4}
      paddingTop={4}
      paddingBottom="30px"
    >
      <ProjectImage project={project} />
      <Box height={5} />
      <ProjectDetails project={project} />
    </Box>
  );
};

export default SingleProjectSkeleton;
