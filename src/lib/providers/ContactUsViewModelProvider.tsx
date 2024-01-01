import React, { createContext, useContext } from "react";
import ContactUsViewModel from "../features/ContactUs/ContactUsViewModel";

interface ContactUsViewModelContextProps {
  viewModel: ContactUsViewModel; // Adjust the type accordingly
  children: React.ReactNode;
}

const ViewModelContext = createContext<
  ContactUsViewModelContextProps | undefined
>(undefined);

export const ContactUsViewModelProvider: React.FC<
  ContactUsViewModelContextProps
> = ({ viewModel, children }) => (
  <ViewModelContext.Provider value={{ viewModel, children }}>
    {children}
  </ViewModelContext.Provider>
);

export const useContactUsViewModel = () => {
  const context = useContext(ViewModelContext);

  if (!context) {
    throw new Error(
      "useContactUsViewModel must be used within a ContactUsViewModelProvider"
    );
  }

  return context.viewModel;
};
