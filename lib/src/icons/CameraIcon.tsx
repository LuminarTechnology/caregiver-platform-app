import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg'

function CameraIcon(props: SvgProps) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <G
        clipPath="url(#clip0_2062_9436)"
        stroke={props.stroke ?? 'currentColor'}
        strokeWidth={1.33283}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M9.328 2.666a1.333 1.333 0 011.173.7l.324.6a1.333 1.333 0 001.173.7h1.33a1.333 1.333 0 011.333 1.332v5.998a1.333 1.333 0 01-1.332 1.333H2.665a1.333 1.333 0 01-1.333-1.333V5.998a1.333 1.333 0 011.333-1.333h1.33a1.333 1.333 0 001.173-.698l.326-.603a1.333 1.333 0 011.172-.698h2.661z" />
        <Path d="M7.997 10.663a2 2 0 100-3.999 2 2 0 000 3.999z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2062_9436">
          <Path fill="#fff" d="M0 0H15.994V15.994H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CameraIcon
