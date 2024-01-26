import listOfIndustryExperiences from "@datautils/industry_experiences";
import React from "react";
import AnimationOnLoadProperties from "src/lib/utils/animation_on_load_properties";

class HomepageViewModel {
  noOfVDividersInIndustryExp: Record<string, number> = {
    base: 1,
    lg: 2,
  };

  noOfColInIndustryExp: Record<string, number> = {
    base: this.noOfVDividersInIndustryExp.base + 1,
    lg: this.noOfVDividersInIndustryExp.lg + 1,
  };

  // Each cell in a Row
  noOfCellsInEachRowInIndustryExp: { [key: string]: number } = {
    base: 2,
    lg: 3,
  };

  noOfRowsInIndustryExp: Record<string, number> = {
    base: Math.round(
      listOfIndustryExperiences.length /
        this.noOfCellsInEachRowInIndustryExp.base
    ),
    lg: Math.round(
      listOfIndustryExperiences.length / this.noOfCellsInEachRowInIndustryExp.lg
    ),
  };

  // The Reference Object for the Engineering Services Section
  private _engineeringServicesRefObj: React.RefObject<HTMLDivElement> =
    React.createRef();

  // Getter for the Engineering Services Reference Object
  get engineeringServicesRefObj(): React.RefObject<HTMLDivElement> {
    return this._engineeringServicesRefObj;
  }

  // Setter for the Engineering Services Reference Object
  setEngineeringServicesRefObj(ref: React.RefObject<HTMLDivElement>): void {
    this._engineeringServicesRefObj = ref;
  }

  private _currentProjectIndexOnWorkPage: number = 0;

  get currentProjectIndexOnWorkPage(): number {
    return this._currentProjectIndexOnWorkPage;
  }

  setCurrentProjectIndexOnWorkPage(index: number): void {
    this._currentProjectIndexOnWorkPage = index;
  }

  public animationOnLoadProps = new AnimationOnLoadProperties();

  dispose(): void {
    this.animationOnLoadProps = new AnimationOnLoadProperties();
  }
}

export default HomepageViewModel;
