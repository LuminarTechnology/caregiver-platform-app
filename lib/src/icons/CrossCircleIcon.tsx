import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function CrossCircleIcon(props: SvgProps) {
  return (
    <Svg width={26} height={26} viewBox="0 0 26 26" fill="none" {...props}>
      <Path
        d="M17.707 9.707L14.415 13l3.293 3.293a1 1 0 01-1.415 1.415L13 14.413l-3.292 3.293a1.001 1.001 0 01-1.415-1.415L11.586 13 8.293 9.707a1 1 0 111.415-1.415L13 11.587l3.293-3.293a1 1 0 111.415 1.415zM26 13A13 13 0 1113 0a13.014 13.014 0 0113 13zm-2 0a11 11 0 10-11 11 11.012 11.012 0 0011-11z"
        fill="#A41845"
      />
    </Svg>
  )
}

export default CrossCircleIcon
