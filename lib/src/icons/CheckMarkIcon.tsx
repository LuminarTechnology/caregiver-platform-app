import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function CheckMarkIcon(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M20 6L9 17L4 12"
        fill="#999594"
      />
    </Svg>
  )
}

export default CheckMarkIcon
