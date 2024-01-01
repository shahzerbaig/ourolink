import React, { createContext, useContext } from "react";
import HomepageViewModel from "../features/Homepage/HomepageViewModel";

interface HomepageViewModelContextProps {
  viewModel: HomepageViewModel; // Adjust the type accordingly
  children: React.ReactNode;
}

const ViewModelContext = createContext<
  HomepageViewModelContextProps | undefined
>(undefined);

export const HomepageViewModelProvider: React.FC<
  HomepageViewModelContextProps
> = ({ viewModel, children }) => (
  <ViewModelContext.Provider value={{ viewModel, children }}>
    {children}
  </ViewModelContext.Provider>
);

export const useHomepageViewModel = () => {
  const context = useContext(ViewModelContext);

  if (!context) {
    throw new Error(
      "useHomepageViewModel must be used within a HomepageViewModelProvider"
    );
  }

  return context.viewModel;
};
