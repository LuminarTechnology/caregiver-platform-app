import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function GoogleIcon(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.351z"
        fill="#4285F4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 20c2.7 0 4.964-.895 6.618-2.427l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.604 0-4.808-1.759-5.595-4.123H1.064v2.591A9.996 9.996 0 0010 20z"
        fill="#34A853"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.405 11.896A5.99 5.99 0 014.205 10c0-.659.113-1.296.318-1.896V5.513H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.487l3.341-2.591z"
        fill="#FBBC05"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.709 2.24 1.064 5.513l3.341 2.591C5.192 5.736 7.396 3.977 10 3.977z"
        fill="#EA4335"
      />
    </Svg>
  )
}

export default GoogleIcon
