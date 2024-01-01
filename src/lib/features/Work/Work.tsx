import BasePage from "src/lib/base/BasePage";
import { useWorkViewModel } from "src/lib/providers/WorkViewModelProvider";
import WorkHeroSection from "./sections/WorkHeroSection";
import { SectionSpacing } from "src/lib/ui/components/SectionSpacing";
import ProjectsSection from "./sections/ProjectsSection";
import LetsGetInTouch from "src/lib/ui/components/LetsGetInTouch";

const Work = () => {
  const workV = useWorkViewModel();

  return (
    <BasePage>
      {/* HERO SECTION */}
      <WorkHeroSection />
      <SectionSpacing />

      {/* PROJECTS SECTION */}
      <ProjectsSection />
      <SectionSpacing />

      <LetsGetInTouch />
    </BasePage>
  );
};

export default Work;
