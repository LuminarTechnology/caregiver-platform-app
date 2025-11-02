import ArrowBackIcon from '@lib/icons/ArrowBackIcon'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Pressable, Text, View } from 'react-native'

type TopBarProps = {
  title: string
  back?: boolean
  fallback?: string
}

const PageHeader = ({ title, back = true, fallback = 'Main' }: TopBarProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack()
    } else {
      navigation.navigate(fallback)
    }
  }

  return (
    <View className="bg-foreground relative flex-row items-center justify-start px-4 py-4">
      {back && (
        <Pressable onPress={handleBack} className="mr-8" style={{ zIndex: 10 }}>
          <ArrowBackIcon width="16" height="16" fill="#333" />
        </Pressable>
      )}
      <Text className="text-primary text-lg font-bold">{title}</Text>
    </View>
  )
}

export default PageHeader
