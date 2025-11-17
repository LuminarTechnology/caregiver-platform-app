import * as React from 'react'
import Svg, { G, Path, SvgProps } from 'react-native-svg'

const ArrowDownIcon = (props: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <G opacity={0.5}>
      <Path
        d="M4 6L8 10L12 6"
        stroke="#4E4E4E"
        strokeWidth={1.33283}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
)
export default ArrowDownIcon
