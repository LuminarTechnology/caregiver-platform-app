import Svg, { Path } from 'react-native-svg'

export const CheckMarkIcon = ({ width = 14, height = 14, color = '#fff' }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M20 6L9 17L4 12"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
