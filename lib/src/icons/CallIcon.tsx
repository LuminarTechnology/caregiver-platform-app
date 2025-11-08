import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const SVGComponent = (props: SvgProps) => (
  <Svg
    width={13}
    height={13}
    viewBox="0 0 13 13"
    fill="none"
    {...props}
  >
    <Path
      d="M0.5 1.83333C0.5 1.09695 1.09695 0.5 1.83333 0.5H4.01949C4.30645 0.5 4.56121 0.68362 4.65195 0.955848L5.65049 3.95147C5.75541 4.26622 5.61292 4.61021 5.31618 4.75858L3.81134 5.511C4.54617 7.14081 5.85919 8.45383 7.489 9.18866L8.24142 7.68382C8.38979 7.38708 8.73378 7.24459 9.04853 7.34951L12.0442 8.34805C12.3164 8.43879 12.5 8.69355 12.5 8.98051V11.1667C12.5 11.903 11.903 12.5 11.1667 12.5H10.5C4.97715 12.5 0.5 8.02285 0.5 2.5V1.83333Z"
      stroke="#F51448"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
