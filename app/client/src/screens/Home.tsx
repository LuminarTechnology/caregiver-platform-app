import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Header } from '../components/screens/home/Header'
import { CareSelection } from '../components/screens/home/CareSelection'
import { Banner } from '../components/screens/home/Banner'
import { CaregiversSection } from '../components/screens/home/CaregiversSection'
import { ArticlesSection } from '../components/screens/home/ArticlesSection'
import { Caregiver } from '../components/screens/home/CaregiverCard'
import { Article } from '../components/screens/home/ArticleCard'
import { caregivers, articles } from '../constants/home'

const HomeScreen: React.FC = () => {
  const [selectedCare, setSelectedCare] = useState<'child' | 'elderly'>('child')

  const handleGetStarted = () => {
    console.log('Get Started pressed')
    // Navigate to booking screen
  }

  const handleCaregiverPress = (caregiver: Caregiver) => {
    console.log('Caregiver pressed:', caregiver)
    // Navigate to caregiver details screen
  }

  const handleArticlePress = (article: Article) => {
    console.log('Article pressed:', article)
    // Navigate to article details screen
  }

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="bg-white" showsVerticalScrollIndicator={false}>
        <Header userName="Safiul" location="Dhaka, Bangladesh" />
        <CareSelection
          selectedCare={selectedCare}
          onSelectCare={setSelectedCare}
        />
        <Banner onGetStarted={handleGetStarted} />
        <CaregiversSection
          caregivers={caregivers}
          onCaregiverPress={handleCaregiverPress}
        />
        <ArticlesSection
          articles={articles}
          onArticlePress={handleArticlePress}
        />
      </ScrollView>
    </View>
  )
}

export default HomeScreen
