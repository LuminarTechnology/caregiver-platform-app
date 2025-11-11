import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function EyeIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12 4.5C7.305 4.5 3.245 7.225 1.125 11.5C3.245 15.775 7.305 18.5 12 18.5C16.695 18.5 20.755 15.775 22.875 11.5C20.755 7.225 16.695 4.5 12 4.5ZM12 16.25C9.385 16.25 7.25 14.115 7.25 11.5C7.25 8.885 9.385 6.75 12 6.75C14.615 6.75 16.75 8.885 16.75 11.5C16.75 14.115 14.615 16.25 12 16.25ZM12 8.75C10.48 8.75 9.25 9.98 9.25 11.5C9.25 13.02 10.48 14.25 12 14.25C13.52 14.25 14.75 13.02 14.75 11.5C14.75 9.98 13.52 8.75 12 8.75Z"
        fill="#999594"
      />
    </Svg>
  )
}

export default EyeIcon
