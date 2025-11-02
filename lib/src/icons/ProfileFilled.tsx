import * as React from 'react'
import Svg, { Circle, Ellipse, SvgProps } from 'react-native-svg'
const SVGComponent = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={12} cy={6} r={4} fill="#A41845" />
    <Ellipse cx={12} cy={17} rx={7} ry={4} fill="#A41845" />
  </Svg>
)
export default SVGComponent
