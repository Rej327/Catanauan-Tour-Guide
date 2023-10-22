import React from "react";
import CookieConsent from "react-cookie-consent";
import { FaCookieBite } from "react-icons/fa";

const Cookie = () => {
  const isBlockedByClient =
    typeof window !== "undefined" && window.innerWidth == 0;

  if (isBlockedByClient) {
    // Display a fallback message or alternative UI
    return (
      <div>
        This website uses cookies to enhance the user experience.{" "}
        {/* Add any custom message or UI here */}
      </div>
    );
  }

  const Text = () => {
    return (
      <div className="md:absolute bottom-6 flex gap-4 items-center my-auto mt-2">
        <div className="w-auto">
          <FaCookieBite className="text-[#E7C278] text-3xl" />
        </div>
        <p className="text-base">
          This website uses cookies to enhance the user experience.
        </p>
      </div>
    );
  };

  const ButtonProps = () => {
    return <button>I Understand</button>;
  };

  return (
    <div className="flex items-center">
      <CookieConsent
        debug={true}
        customButtonProps={<ButtonProps />}
        location="bottom"
        buttonText="I Understand"
        cookieName="Cookie Policy"
        style={{ background: "#FCE9CB" }}
        buttonStyle={{
          color: "#012854",
          fontSize: "15px",
          backgroundColor: "#F9DBA9",
          paddingLeft: "15px",
          paddingRight: "15px",
          paddingTop: "12px",
          paddingBottom: "12px",
          fontFamily: "Lato",
          borderRadius: "15px",
          marginBottom: "0px",
          marginTop: "0px",
        }}
        containerClasses="py-4"
        acceptOnScroll={true}
        acceptOnScrollPercentage={10}
        expires={365}
      >
        <Text />
      </CookieConsent>
    </div>
  );
};

export default Cookie;
