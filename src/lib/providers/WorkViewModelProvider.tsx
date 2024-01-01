import React, { createContext, useContext } from "react";
import WorkViewModel from "../features/Work/WorkViewModel";

interface WorkViewModelContextProps {
  viewModel: WorkViewModel; // Adjust the type accordingly
  children: React.ReactNode;
}

const ViewModelContext = createContext<WorkViewModelContextProps | undefined>(
  undefined
);

export const WorkViewModelProvider: React.FC<WorkViewModelContextProps> = ({
  viewModel,
  children,
}) => (
  <ViewModelContext.Provider value={{ viewModel, children }}>
    {children}
  </ViewModelContext.Provider>
);

export const useWorkViewModel = () => {
  const context = useContext(ViewModelContext);

  if (!context) {
    throw new Error(
      "useWorkViewModel must be used within a WorkViewModelProvider"
    );
  }

  return context.viewModel;
};
