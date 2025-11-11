import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const MoreIcon = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M9.99984 10.8346C10.4601 10.8346 10.8332 10.4615 10.8332 10.0013C10.8332 9.54106 10.4601 9.16797 9.99984 9.16797C9.5396 9.16797 9.1665 9.54106 9.1665 10.0013C9.1665 10.4615 9.5396 10.8346 9.99984 10.8346Z"
      stroke="#111111"
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.99984 5.00065C10.4601 5.00065 10.8332 4.62756 10.8332 4.16732C10.8332 3.70708 10.4601 3.33398 9.99984 3.33398C9.5396 3.33398 9.1665 3.70708 9.1665 4.16732C9.1665 4.62756 9.5396 5.00065 9.99984 5.00065Z"
      stroke="#111111"
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.99984 16.6667C10.4601 16.6667 10.8332 16.2936 10.8332 15.8333C10.8332 15.3731 10.4601 15 9.99984 15C9.5396 15 9.1665 15.3731 9.1665 15.8333C9.1665 16.2936 9.5396 16.6667 9.99984 16.6667Z"
      stroke="#111111"
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default MoreIcon
