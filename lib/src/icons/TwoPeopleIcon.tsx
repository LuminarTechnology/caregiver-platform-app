import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg'

function TwoPeopleIcon(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <G
        clipPath="url(#clip0_262_3779)"
        stroke={props.stroke ?? 'currentColor'}
        strokeWidth={1.66661}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M13.333 17.5v-1.667A3.333 3.333 0 0010 12.5H5a3.333 3.333 0 00-3.333 3.333V17.5M13.333 2.607a3.333 3.333 0 010 6.454M18.333 17.499v-1.667a3.333 3.333 0 00-2.5-3.225M7.5 9.166a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666z" />
      </G>
      <Defs>
        <ClipPath id="clip0_262_3779">
          <Path fill="#fff" d="M0 0H19.9993V19.9993H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default TwoPeopleIcon
