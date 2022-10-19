import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="586" cy="229" r="8" />
    <rect x="512" y="223" rx="5" ry="5" width="220" height="10" />
    <circle cx="579" cy="229" r="8" />
    <rect x="564" y="222" rx="5" ry="5" width="220" height="10" />
    <circle cx="586" cy="228" r="8" />
    <rect x="521" y="225" rx="5" ry="5" width="220" height="10" />
    <circle cx="583" cy="224" r="8" />
    <rect x="492" y="215" rx="5" ry="5" width="220" height="10" />
    <circle cx="126" cy="128" r="125" />
    <rect x="0" y="272" rx="20" ry="20" width="260" height="18" />
    <rect x="1" y="312" rx="20" ry="20" width="260" height="88" />
    <rect x="5" y="430" rx="7" ry="7" width="100" height="27" />
    <rect x="123" y="420" rx="15" ry="15" width="135" height="45" />
  </ContentLoader>
);

export default MyLoader;
