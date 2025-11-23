import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const PlusIcon = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M10 5V10M10 10V15M10 10H15M10 10L5 10"
      stroke="#A41845"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default PlusIcon
