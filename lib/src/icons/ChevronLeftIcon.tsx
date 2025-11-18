import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const ChevronLeftIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15 6C15 6 15 6 9 12C15 18 15 18 15 18"
      stroke="#292A27"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ChevronLeftIcon
