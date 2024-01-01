import React, { createContext, useContext } from "react";
import TermsAndConditionsViewModel from "../features/TermsAndConditions/TermsAndConditionsViewModel";

interface TermsAndConditionsViewModelContextProps {
  viewModel: TermsAndConditionsViewModel;
  children: React.ReactNode;
}

const ViewModelContext = createContext<
  TermsAndConditionsViewModelContextProps | undefined
>(undefined);

export const TermsAndConditionsViewModelProvider: React.FC<
  TermsAndConditionsViewModelContextProps
> = ({ viewModel, children }) => (
  <ViewModelContext.Provider value={{ viewModel, children }}>
    {children}
  </ViewModelContext.Provider>
);

export const useTermsAndConditionsViewModel = () => {
  const context = useContext(ViewModelContext);

  if (!context) {
    throw new Error(
      "useTermsAndConditionsViewModel must be used within a TermsAndConditionsViewModelProvider"
    );
  }

  return context.viewModel;
};
