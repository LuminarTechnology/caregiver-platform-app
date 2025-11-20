import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
const ForwardCircleIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" width={24} height={24} {...props}>
    <Path
      d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256z"
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={32}
    />
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M216 352l96-96-96-96"
    />
  </Svg>
)
export default ForwardCircleIcon
