import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <div className="pizza-block-wrapper">
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={466}
      viewBox="0 0 280 466"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="0" y="265" rx="10" ry="10" width="280" height="27" />
      <rect x="0" y="313" rx="10" ry="10" width="280" height="88" />
      <rect x="0" y="425" rx="10" ry="10" width="92" height="30" />
      <rect x="130" y="420" rx="20" ry="20" width="150" height="45" />
      <circle cx="140" cy="121" r="120" />
    </ContentLoader>
  </div>
);

export default MyLoader;
