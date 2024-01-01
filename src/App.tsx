import "./App.css";
import { HomepageViewModelProvider } from "./lib/providers/HomepageViewModelProvider";
import HomepageViewModel from "./lib/features/Homepage/HomepageViewModel";
import AppRouter from "./lib/navigation/app_router";
import WorkViewModel from "./lib/features/Work/WorkViewModel";
import { WorkViewModelProvider } from "./lib/providers/WorkViewModelProvider";
import { ContactUsViewModelProvider } from "./lib/providers/ContactUsViewModelProvider";
import ContactUsViewModel from "./lib/features/ContactUs/ContactUsViewModel";
import { PrivacyPolicyViewModelProvider } from "./lib/providers/PrivacyPolicyViewModelProvider";
import PrivacyPolicyViewModel from "./lib/features/PrivacyPolicy/PrivacyPolicyViewModel";
import { TermsAndConditionsViewModelProvider } from "./lib/providers/TermsAndConditionsViewModelProvider";
import TermsAndConditionsViewModel from "./lib/features/TermsAndConditions/TermsAndConditionsViewModel";

function App() {
  const homepageViewModel = new HomepageViewModel();
  const workViewModel = new WorkViewModel();
  const contactUsViewModel = new ContactUsViewModel();
  const privacyPolicyViewModel = new PrivacyPolicyViewModel();
  const termsAndConditionsViewModel = new TermsAndConditionsViewModel();

  return (
    <HomepageViewModelProvider viewModel={homepageViewModel}>
      <WorkViewModelProvider viewModel={workViewModel}>
        <ContactUsViewModelProvider viewModel={contactUsViewModel}>
          <PrivacyPolicyViewModelProvider viewModel={privacyPolicyViewModel}>
            <TermsAndConditionsViewModelProvider
              viewModel={termsAndConditionsViewModel}
            >
              <AppRouter />
            </TermsAndConditionsViewModelProvider>
          </PrivacyPolicyViewModelProvider>
        </ContactUsViewModelProvider>
      </WorkViewModelProvider>
    </HomepageViewModelProvider>
  );
}

export default App;
