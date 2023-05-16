/** @format */

import React from "react";
import FourthWrapper from "./FourthWrapper";

function MyComponent() {
  const links = [
    { url: "https://www.example.com/learn-more", text: "Learn more" },
    { url: "https://www.example.com/apply-now", text: "Apply now" },
  ];

  return (
    <div>
      <h1>My Webseite</h1>
      <FourthWrapper
        title="iPhone 11"
        description="Just the right amount of everything."
        price="From $18.70/mo. or $499 with trade‑in.1."
        links={links}
        whiteBackground={false}
      />
      <FourthWrapper
        title="Latest CDC Response to COVID-19"
        links={[
          { url: "https://www.example.com/watch-psa", text: "Watch the PSA" },
        ]}
        whiteBackground={true}
      />
      {/* Weitere Inhalte der Webseite */}
    </div>
  );
}

export default MyComponent;
