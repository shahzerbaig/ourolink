import AnimationOnLoadProperties from "src/lib/utils/animation_on_load_properties";

class WorkViewModel {
  public id: number = 0;

  setWorkId(id: number) {
    this.id = id;
  }

  public animationOnLoadProps = new AnimationOnLoadProperties();

  dispose(): void {
    this.animationOnLoadProps = new AnimationOnLoadProperties();
  }
}

export default WorkViewModel;
