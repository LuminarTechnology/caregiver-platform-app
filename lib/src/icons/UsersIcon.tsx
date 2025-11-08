import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const SVGComponent = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M14.9998 17.4997C14.9998 15.7316 14.2975 14.0359 13.0472 12.7856C11.797 11.5354 10.1013 10.833 8.33317 10.833C6.56506 10.833 4.86937 11.5354 3.61913 12.7856C2.36888 14.0359 1.6665 15.7316 1.6665 17.4997"
      stroke="#292A27"
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.33317 10.8333C10.6344 10.8333 12.4998 8.96785 12.4998 6.66667C12.4998 4.36548 10.6344 2.5 8.33317 2.5C6.03198 2.5 4.1665 4.36548 4.1665 6.66667C4.1665 8.96785 6.03198 10.8333 8.33317 10.8333Z"
      stroke="#292A27"
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.3333 16.6663C18.3333 13.858 16.6667 11.2497 15 9.99967C15.5478 9.58865 15.9859 9.04891 16.2755 8.42823C16.565 7.80755 16.6971 7.12507 16.66 6.44117C16.6229 5.75728 16.4178 5.09308 16.0629 4.50734C15.7079 3.9216 15.2141 3.43239 14.625 3.08301"
      stroke="#292A27"
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
