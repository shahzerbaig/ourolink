import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "../features/Homepage/Homepage";
import Work from "../features/Work/Work";
import { RoutePaths } from "./route_paths";
import { ContactUs } from "../features/ContactUs/ContactUs";
import PrivacyPolicyPage from "../features/PrivacyPolicy/PrivacyPolicyPage";
import TermsAndConditionsPage from "../features/TermsAndConditions/TermsAndConditionsPage";
import { useEffect } from "react";
import RecentWork from "../features/RecentWork/RecentWork";
import Splash from "../features/Splash/Splash";

const AppRouter = () => {
  // Here we are using the useLocation hook to get the current location [current page] of the app.
  const location = useLocation();

  // The useEffect hook gets called the first time when the component is mounted in the DOM.
  // But it takes a second argument which is an array of dependencies.
  // If the dependencies change, the useEffect hook will be called again.
  // So, from the useLocation hook, when the location changes,(the path changes)
  // the useEffect hook will be called again and by using the window.scrollTo method,
  // we are scrolling to the top of the page.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path={RoutePaths.SPLASH} Component={Splash} />
      <Route path={RoutePaths.HOMEPAGE} Component={Homepage} />
      <Route path={RoutePaths.WORK} Component={Work} />
      <Route path={RoutePaths.CONTACT_US} Component={ContactUs} />
      <Route path={RoutePaths.PRIVACY_POLICY} Component={PrivacyPolicyPage} />
      <Route path={RoutePaths.RECENT_WORK} Component={RecentWork} />

      <Route
        path={RoutePaths.TERMS_AND_CONDITIONS}
        Component={TermsAndConditionsPage}
      />
    </Routes>
  );
};

export default AppRouter;
