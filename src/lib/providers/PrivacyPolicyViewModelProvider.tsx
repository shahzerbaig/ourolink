import React, { createContext, useContext } from "react";
import PrivacyPolicyViewModel from "../features/PrivacyPolicy/PrivacyPolicyViewModel";

interface PrivacyPolicyViewModelContextProps {
  viewModel: PrivacyPolicyViewModel;
  children: React.ReactNode;
}

const ViewModelContext = createContext<
  PrivacyPolicyViewModelContextProps | undefined
>(undefined);

export const PrivacyPolicyViewModelProvider: React.FC<
  PrivacyPolicyViewModelContextProps
> = ({ viewModel, children }) => (
  <ViewModelContext.Provider value={{ viewModel, children }}>
    {children}
  </ViewModelContext.Provider>
);

export const usePrivacyPolicyViewModel = () => {
  const context = useContext(ViewModelContext);

  if (!context) {
    throw new Error(
      "usePrivacyPolicyViewModel must be used within a PrivacyPolicyViewModelProvider"
    );
  }

  return context.viewModel;
};
