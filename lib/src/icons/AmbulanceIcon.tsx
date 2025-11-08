import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface CustomSvgProps extends SvgProps {
  strokeColor?: string;
}

const SVGComponent = ({ strokeColor = "#292A27", ...props }: CustomSvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M8.33333 8.33301H5"
      stroke={strokeColor}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.6665 14.9997V4.99967C11.6665 4.55765 11.4909 4.13372 11.1783 3.82116C10.8658 3.5086 10.4419 3.33301 9.99984 3.33301H3.33317C2.89114 3.33301 2.46722 3.5086 2.15466 3.82116C1.8421 4.13372 1.6665 4.55765 1.6665 4.99967V14.1663C1.6665 14.3874 1.7543 14.5993 1.91058 14.7556C2.06686 14.9119 2.27882 14.9997 2.49984 14.9997H4.1665"
      stroke={strokeColor}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.8332 15.0003H17.4998C17.7209 15.0003 17.9328 14.9125 18.0891 14.7562C18.2454 14.6 18.3332 14.388 18.3332 14.167V11.4337C18.333 11.2588 18.2779 11.0885 18.1756 10.9467C18.0733 10.8049 17.929 10.6989 17.7632 10.6437L16.1607 10.1095C16.0568 10.0748 15.9609 10.02 15.8782 9.94824C15.7956 9.87646 15.7279 9.78911 15.679 9.69116L14.3965 7.12783C14.3273 6.98943 14.221 6.87301 14.0894 6.79162C13.9579 6.71023 13.8062 6.66707 13.6515 6.66699H11.6665"
      stroke={strokeColor}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.6665 6.66699V10.0003"
      stroke={strokeColor}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.5 15H12.5"
      stroke={strokeColor}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.1667 16.6663C15.0871 16.6663 15.8333 15.9201 15.8333 14.9997C15.8333 14.0792 15.0871 13.333 14.1667 13.333C13.2462 13.333 12.5 14.0792 12.5 14.9997C12.5 15.9201 13.2462 16.6663 14.1667 16.6663Z"
      stroke={strokeColor}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.83317 16.6663C6.75365 16.6663 7.49984 15.9201 7.49984 14.9997C7.49984 14.0792 6.75365 13.333 5.83317 13.333C4.9127 13.333 4.1665 14.0792 4.1665 14.9997C4.1665 15.9201 4.9127 16.6663 5.83317 16.6663Z"
      stroke={strokeColor}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SVGComponent;
