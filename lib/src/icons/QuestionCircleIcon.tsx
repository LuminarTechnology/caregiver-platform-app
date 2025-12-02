import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg'

function QuestionCircleIcon(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <G
        clipPath="url(#clip0_262_3793)"
        stroke={props.stroke ?? 'currentColor'}
        strokeWidth={1.66661}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M10 18.332a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z" />
        <Path d="M7.575 7.5a2.5 2.5 0 014.858.834c0 1.666-2.5 2.5-2.5 2.5M10 14.166h.008" />
      </G>
      <Defs>
        <ClipPath id="clip0_262_3793">
          <Path fill="#fff" d="M0 0H19.9993V19.9993H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default QuestionCircleIcon
