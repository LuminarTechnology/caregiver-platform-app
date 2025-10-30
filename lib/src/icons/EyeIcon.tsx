import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function EyeIcon(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 5c-3.067 0-5.578 2.058-7 5 1.422 2.942 3.933 5 7 5s5.578-2.058 7-5c-1.422-2.942-3.933-5-7-5zm0 8.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
        fill="#000"
      />
      <Path
        d="M10 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
        fill="#000"
      />
    </Svg>
  )
}

export default EyeIcon
