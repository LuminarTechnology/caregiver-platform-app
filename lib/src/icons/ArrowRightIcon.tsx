import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function ArrowRightIcon(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M7.5 15l5-5-5-5"
        stroke={props.stroke ?? 'currentColor'}
        strokeWidth={1.66661}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ArrowRightIcon
