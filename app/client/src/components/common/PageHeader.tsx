import ArrowBackIcon from '@lib/icons/ArrowBackIcon'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Pressable, Text, View } from 'react-native'

type TopBarProps = {
  title: string
  back?: boolean
  fallback?: string
  className?: string
}

const PageHeader = ({
  title,
  back = true,
  fallback = 'Main',
  className = ''
}: TopBarProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack()
    } else {
      navigation.navigate(fallback)
    }
  }

  return (
    <View
      className={`${className} relative flex-row items-center justify-start px-4 py-4`}
    >
      {back && (
        <Pressable onPress={handleBack} className="mr-2" style={{ zIndex: 10 }}>
          <ArrowBackIcon width="16" height="16" fill="#333" />
        </Pressable>
      )}
      <Text className={`${className} font-medium`}>{title}</Text>
    </View>
  )
}

export default PageHeader
