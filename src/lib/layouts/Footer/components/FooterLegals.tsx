import React from "react";
import FooterTextButton, { FooterTextButtonProps } from "./FooterTextButton";
import FooterVSpace from "./FooterVSpace";
import FooterHeading from "./FooterHeading";
import FooterText from "./FooterText";

const FooterLegals = () => {
  const listOfLegals: FooterTextButtonProps[] = [
    {
      label: "Contact us",
      onClick: () => {},
    },
    {
      label: "Privacy Policy",
      onClick: () => {},
    },

    {
      label: "Terms and conditions",
      onClick: () => {},
    },
  ];

  const legalsMappedComponent = listOfLegals.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <FooterVSpace />
        <FooterTextButton
          onClick={() => {
            item.onClick();
          }}
        >
          {item.label}
        </FooterTextButton>
      </React.Fragment>
    );
  });

  return (
    <>
      <FooterHeading>Legal</FooterHeading>
      {legalsMappedComponent}
      <FooterVSpace />
      <FooterVSpace />

      <FooterHeading>For sales</FooterHeading>
      <FooterVSpace />
      <FooterText>ourolink@business.com</FooterText>
      <FooterVSpace />
      <FooterVSpace />

      <FooterHeading>For jobs</FooterHeading>
      <FooterVSpace />
      <FooterText>talent.ourolink@business.com</FooterText>
    </>
  );
};

export default FooterLegals;