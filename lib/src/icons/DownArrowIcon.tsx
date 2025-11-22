import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
const DownArrowIcon = (props: SvgProps) => (
  <Svg width={14} height={8} viewBox="0 0 14 8" fill="none" {...props}>
    <Path
      d="M12.4167 0.75L6.58333 6.58333L0.75 0.75"
      stroke={props.stroke ?? 'currentColor'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default DownArrowIcon
