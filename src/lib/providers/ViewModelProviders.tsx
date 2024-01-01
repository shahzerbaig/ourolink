import React, { createContext } from "react";
import HomepageViewModel from "../features/Homepage/HomepageViewModel";
import WorkViewModel from "../features/Work/WorkViewModel";

interface ViewModelProvidersContextProps {
  homepageViewModel: HomepageViewModel;
  workViewModel: WorkViewModel;
  children: React.ReactNode;
}

const ViewModelContext = createContext<
  ViewModelProvidersContextProps | undefined
>(undefined);

export const ViewModelProviders: React.FC<ViewModelProvidersContextProps> = ({
  homepageViewModel,
  workViewModel,
  children,
}) => (
  <ViewModelContext.Provider
    value={{ homepageViewModel, workViewModel, children }}
  >
    {children}
  </ViewModelContext.Provider>
);
