import workStack, { WorkStackProps } from "@datautils/work_stack";
import { RecentWorkNavParams } from "./RecentWork";
import AnimationOnLoadProperties from "src/lib/utils/animation_on_load_properties";

class RecentWorkViewModel {
  private recentWorkNavParams!: RecentWorkNavParams;

  get getRecentWorkNavParams(): RecentWorkNavParams {
    return this.recentWorkNavParams;
  }

  setRecentWorkNavParams(recentWorkNavParams: RecentWorkNavParams): void {
    this.recentWorkNavParams = recentWorkNavParams;
  }

  getProjectDetails(): WorkStackProps | undefined {
    let workStackProps: WorkStackProps | undefined;

    workStack.find((value) => {
      if (value.slug === this.recentWorkNavParams.slug) {
        workStackProps = value;
      }
    });

    return workStackProps;
  }

  public animationOnLoadProps = new AnimationOnLoadProperties();

  dispose(): void {
    this.animationOnLoadProps = new AnimationOnLoadProperties();
  }
}

export default RecentWorkViewModel;
