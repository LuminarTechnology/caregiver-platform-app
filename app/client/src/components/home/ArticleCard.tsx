import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

export interface Article {
  id: number
  title: string
  emoji: string
}

interface ArticleCardProps {
  article: Article
  onPress: () => void
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onPress
}) => {
  return (
    <TouchableOpacity onPress={onPress} className="mr-4 w-32">
      <View className="mb-2 h-56 w-32 justify-center overflow-hidden rounded-2xl bg-[#FFF7F9]">
        <View className="mx-auto mb-2 h-28 w-28 items-center justify-center overflow-hidden rounded-2xl bg-white">
          <Image
            source={require('../../../assets/images/article.png')}
            className="h-full w-full"
            resizeMode="cover"
          />
        </View>
        <View className="px-2">
          <Text className="mb-1 text-sm text-[#292A27]">{article.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
