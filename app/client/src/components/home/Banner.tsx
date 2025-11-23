import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

interface BannerProps {
  onGetStarted: () => void
}

export const Banner: React.FC<BannerProps> = ({ onGetStarted }) => {
  return (
    <View className="mb-6 px-4">
      <ImageBackground
        source={require('../../../assets/images/home_banner.png')}
        resizeMode="cover"
        className="overflow-hidden rounded-2xl"
      >
        {/* Gradient positioned BEHIND the content */}
        <LinearGradient
          colors={['rgba(255,255,255,0.85)', 'rgba(255,255,255,0)']} // Dark left → transparent right
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        />

        {/* Content sits on top of the gradient */}
        <View className="flex-row items-center p-5">
          <View className="flex-1 pr-4">
            <Text className="mb-2 text-2xl font-bold">
              Book Care in Seconds
            </Text>
            <Text className="mb-5 opacity-90">
              Fast, easy, and reliable{'\n'}caregiver appointments
            </Text>
            <TouchableOpacity
              onPress={onGetStarted}
              className="w-full rounded-2xl bg-[#A41845] px-6 py-3"
            >
              <Text className="text-center text-lg text-white">
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}
