import React from "react";
import listOfEngineeringServices from "@datautils/engineering_services";
import FooterVSpace from "./FooterVSpace";
import FooterText from "./FooterText";
import FooterHeading from "./FooterHeading";

const FooterServices = () => {
  const engineeringServicesMappedComponent = listOfEngineeringServices.map(
    (item, index) => {
      return (
        <React.Fragment key={index}>
          <FooterVSpace />
          <FooterText>{item}</FooterText>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <FooterHeading>Engineering services</FooterHeading>
      {engineeringServicesMappedComponent}
    </>
  );
};

export default FooterServices;
