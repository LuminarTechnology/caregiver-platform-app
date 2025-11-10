import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
const ThreeDotIcon = (props: SvgProps) => (
  <Svg width={4} height={18} viewBox="0 0 4 18" fill="none" {...props}>
    <Path
      d="M1.75 1.75L1.75 1.76M1.75 8.75L1.75 8.76M1.75 15.75L1.75 15.76M1.75 2.75C1.19772 2.75 0.75 2.30228 0.75 1.75C0.75 1.19772 1.19772 0.75 1.75 0.75C2.30228 0.75 2.75 1.19772 2.75 1.75C2.75 2.30228 2.30228 2.75 1.75 2.75ZM1.75 9.75C1.19771 9.75 0.75 9.30228 0.75 8.75C0.75 8.19772 1.19771 7.75 1.75 7.75C2.30228 7.75 2.75 8.19772 2.75 8.75C2.75 9.30228 2.30228 9.75 1.75 9.75ZM1.75 16.75C1.19771 16.75 0.749999 16.3023 0.749999 15.75C0.749999 15.1977 1.19771 14.75 1.75 14.75C2.30228 14.75 2.75 15.1977 2.75 15.75C2.75 16.3023 2.30228 16.75 1.75 16.75Z"
      stroke={props.stroke ?? 'currentColor'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ThreeDotIcon
