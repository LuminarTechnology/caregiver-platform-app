import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { ArticleCard, Article } from './ArticleCard'
import { ForwardCircleIcon } from '@lib/icons'

interface ArticlesSectionProps {
  articles: Article[]
  onArticlePress: (article: Article) => void
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  articles,
  onArticlePress
}) => {
  return (
    <View className="mb-6">
      <TouchableOpacity
        onPress={() => {
          /* Navigate to all articles screen */
        }}
        className="mb-3 flex-row items-center justify-between px-4"
      >
        <View className="flex-1">
          <Text className="text-lg font-bold text-[#292A27]">
            Article for You
          </Text>
        </View>
        <ForwardCircleIcon />
      </TouchableOpacity>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onPress={() => onArticlePress(article)}
          />
        ))}
      </ScrollView>
    </View>
  )
}
