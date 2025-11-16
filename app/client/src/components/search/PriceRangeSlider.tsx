import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider'

const PriceRangeSlider = ({
  priceRange,
  setPriceRange
}: {
  priceRange: { min: number; max: number }
  setPriceRange: React.Dispatch<
    React.SetStateAction<{ min: number; max: number }>
  >
}) => {
  const { width } = Dimensions.get('window')
  const initialValues = [0, 5000]
  const [values, setValues] = useState(initialValues)

  const handleValuesChange = (newValues: number[]) => {
    setPriceRange({ min: newValues[0], max: newValues[1] })
  }

  return (
    <View>
      <View className="flex-row items-center justify-between">
        <Text className="text-defaultBlack text-base font-medium">
          Price Range
        </Text>
        <Text>
          ৳{priceRange.min} - ৳{priceRange.max}/hr
        </Text>
      </View>

      <View className="px-4">
        <MultiSlider
          containerStyle={{
            width: '100%'
          }}
          values={values}
          min={0}
          max={5000}
          step={1}
          onValuesChange={handleValuesChange}
          sliderLength={width - 50}
          selectedStyle={{
            backgroundColor: '#A41845',
            width: '100%'
          }}
          unselectedStyle={{
            backgroundColor: '#FFF7F9',
            width: '100%'
          }}
          markerStyle={{
            height: 16,
            width: 16,
            borderRadius: 50,
            backgroundColor: '#FFFFFF',
            borderWidth: 1,
            borderColor: '#A41845',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 2,
            marginTop: 16
          }}
          pressedMarkerStyle={{
            backgroundColor: '#A41845',
            transform: [{ scale: 1.1 }]
          }}
          trackStyle={{ height: 16, borderRadius: 10 }}
        />
      </View>
    </View>
  )
}

export default PriceRangeSlider
