import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function HomeFilledIcon(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.52 5.823C0 6.77 0 7.915 0 10.203v1.522c0 3.9 0 5.851 1.172 7.063C2.343 20 4.229 20 8 20h4c3.771 0 5.657 0 6.828-1.212C20 17.576 20 15.626 20 11.725v-1.521c0-2.289 0-3.433-.52-4.381-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C12.111.622 11.108 0 10 0 8.892 0 7.89.622 5.884 1.867l-2 1.241C1.987 4.286 1.038 4.874.519 5.823zm6.927 7.575a.75.75 0 10-.894 1.204A5.766 5.766 0 0010 15.75a5.766 5.766 0 003.447-1.148.75.75 0 10-.894-1.204A4.267 4.267 0 0110 14.25a4.267 4.267 0 01-2.553-.852z"
        fill="#A41845"
      />
    </Svg>
  )
}

export default HomeFilledIcon
