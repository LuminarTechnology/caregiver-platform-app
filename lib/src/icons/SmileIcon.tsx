import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg'

const SmileIcon = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <G clipPath="url(#clip0_257_3712)">
      <Path
        d="M9.99957 18.3321C14.6018 18.3321 18.3326 14.6013 18.3326 9.99908C18.3326 5.39685 14.6018 1.66602 9.99957 1.66602C5.39734 1.66602 1.6665 5.39685 1.6665 9.99908C1.6665 14.6013 5.39734 18.3321 9.99957 18.3321Z"
        stroke="#6B7280"
        strokeWidth={1.66661}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.6665 11.666C6.6665 11.666 7.91646 13.3326 9.99973 13.3326C12.083 13.3326 13.333 11.666 13.333 11.666"
        stroke="#6B7280"
        strokeWidth={1.66661}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.49951 7.5H7.50784"
        stroke="#6B7280"
        strokeWidth={1.66661}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.4995 7.5H12.5078"
        stroke="#6B7280"
        strokeWidth={1.66661}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_257_3712">
        <Rect width={19.9993} height={19.9993} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SmileIcon
