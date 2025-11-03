import * as React from 'react'
import Svg, { Circle, SvgProps } from 'react-native-svg'
const UncheckedRadioIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={12} cy={12} r={10} stroke="#90928B" strokeWidth={1.5} />
  </Svg>
)
export default UncheckedRadioIcon
