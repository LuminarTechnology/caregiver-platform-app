import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const SearchIconSmall = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M17.4994 17.4994L13.8828 13.8828"
      stroke="#90928B"
      strokeWidth={1.66661}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.16645 15.8329C12.8482 15.8329 15.8329 12.8482 15.8329 9.16645C15.8329 5.48467 12.8482 2.5 9.16645 2.5C5.48467 2.5 2.5 5.48467 2.5 9.16645C2.5 12.8482 5.48467 15.8329 9.16645 15.8329Z"
      stroke="#90928B"
      strokeWidth={1.66661}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export default SearchIconSmall
