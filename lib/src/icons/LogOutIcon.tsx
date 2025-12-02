import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function LogOutIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M16 17l5-5-5-5M21 12H9M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"
        stroke={props.stroke ?? 'currentColor'}
        strokeWidth={1.66661}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default LogOutIcon
