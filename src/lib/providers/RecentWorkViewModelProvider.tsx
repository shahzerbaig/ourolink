import React, { createContext, useContext } from "react";
import RecentWorkViewModel from "../features/RecentWork/RecentWorkViewModel";

interface RecentWorkViewModelContextProps {
  viewModel: RecentWorkViewModel; // Adjust the type accordingly
  children: React.ReactNode;
}

const ViewModelContext = createContext<
  RecentWorkViewModelContextProps | undefined
>(undefined);

export const RecentWorkViewModelProvider: React.FC<
  RecentWorkViewModelContextProps
> = ({ viewModel, children }) => (
  <ViewModelContext.Provider value={{ viewModel, children }}>
    {children}
  </ViewModelContext.Provider>
);

export const useRecentWorkViewModel = () => {
  const context = useContext(ViewModelContext);

  if (!context) {
    throw new Error(
      "useRecentWorkViewModel must be used within a RecentWorkViewModelProvider"
    );
  }

  return context.viewModel;
};
