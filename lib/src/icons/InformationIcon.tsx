import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function InformationIcon(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M10.833 13.333H10V10h-.833M10 6.667h.008M17.5 10a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
        stroke={props.stroke ?? 'currentColor'}
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default InformationIcon
