import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function AppleIcon(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.275 3.319c.738.886 1.225 2.064 1.092 3.266-.998.05-2.213-.67-2.95-1.556-.723-.86-1.198-2.012-1.076-3.19 1.11.085 2.245.762 2.934 1.48zM15.834 15.5c.434-.628.783-1.453.783-2.23 0-1.125-.48-1.95-.934-2.577-.586-.813-1.42-1.468-2.26-1.468-.553 0-1.138.21-1.65.21-.56 0-1.18-.21-1.78-.21-1.54 0-2.7 1.386-2.7 3.958 0 2.743 1.92 5.617 3.84 5.617.48 0 1.18-.21 1.78-.21.59 0 1.45.21 1.94.21 1.34 0 2.38-2.064 3.17-3.75z"
        fill="#000"
      />
    </Svg>
  )
}

export default AppleIcon
