import { View, Text } from 'react-native'
import { SearchFilledIcon } from '@lib/icons'

const SearchScreen = () => {
  return (
    <View className="bg-background flex h-screen items-center justify-center gap-6">
      <View className="bg-foreground rounded-full p-6">
        <SearchFilledIcon height={36} width={36} />
      </View>
      <Text className="text-primary text-center text-3xl font-semibold">
        Caregiver Client search
      </Text>
    </View>
  )
}

export default SearchScreen
