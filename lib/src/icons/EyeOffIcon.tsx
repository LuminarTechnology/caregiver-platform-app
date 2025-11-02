import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function EyeOffIcon(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.28 3.22a.75.75 0 00-1.06 1.06l2.446 2.447C1.542 8.193 0 10 0 10s3.333 5 10 5c1.586 0 2.98-.29 4.214-.774l3.506 3.506a.75.75 0 101.06-1.06l-15-15zm11.894 11.894C12.78 15.71 11.386 16 10 16c-6.667 0-10-5-10-5s1.542-1.807 3.666-3.273l2.18 2.18A3.75 3.75 0 0010 11.75c.224 0 .443-.023.655-.066l1.519 1.518z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 5c3.067 0 5.578 2.058 7 5-.364.753-.84 1.45-1.407 2.07l1.06 1.06c.703-.77 1.297-1.645 1.747-2.577C18.578 7.058 16.067 5 13 5l-3-3-3 3zm3.75 5a3.75 3.75 0 01-4.488 3.677l1.061-1.06a2.25 2.25 0 002.387-2.388l1.06-1.06c.144.463.22.957.22 1.471z"
        fill="#000"
      />
    </Svg>
  )
}

export default EyeOffIcon
