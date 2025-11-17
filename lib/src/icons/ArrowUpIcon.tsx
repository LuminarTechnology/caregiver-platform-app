import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const ArrowUpIcon = (props: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5 15L12 8L19 15"
      stroke="#111827"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default ArrowUpIcon
