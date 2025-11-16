import { View, Text, Modal, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  CheckedSquareIcon,
  CloseFilled,
  StarFilled,
  UncheckedSquareIcon
} from '@lib/icons'
import { ScrollView } from 'react-native-gesture-handler'
import PriceRangeSlider from './PriceRangeSlider'
import Button from '@lib/ui/Button'

const FilterModal = ({
  visible,
  setVisible,
  selectedCategories,
  setSelectedCategories,
  servicesCategories,
  selectedFilters,
  setSelectedFilters,
  quickFilters,
  priceRange,
  setPriceRange,
  ratings,
  setRatings
}) => {
  return (
    <Modal
      visible={visible}
      transparent={false}
      animationType="slide"
      onRequestClose={() => setVisible(false)}
    >
      <SafeAreaView className="flex-1 bg-[#FFFFFF]">
        <View className="w-full flex-row items-center justify-between border-b border-[#E1E2DF] px-4 py-5">
          <Text className="text-defaultBlack text-xl font-medium">Filters</Text>
          <Pressable onPress={() => setVisible(false)}>
            <CloseFilled />
          </Pressable>
        </View>

        {/* Content (scrollable) */}
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          {/* // Service Categories */}
          <Text className="text-defaultBlack text-base font-medium">
            Service Categories
          </Text>
          <View className="mt-4 gap-3">
            {servicesCategories.map((category) => (
              <Pressable
                key={category}
                onPress={() => {
                  setSelectedCategories((prev) =>
                    prev.includes(category)
                      ? prev.filter((c) => c !== category)
                      : [...prev, category]
                  )
                }}
                className="flex-row items-center gap-3"
              >
                {selectedCategories.includes(category) ? (
                  <CheckedSquareIcon />
                ) : (
                  <UncheckedSquareIcon />
                )}

                <Text className="text-defaultBlack text-base font-normal capitalize">
                  {category}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* // Price Range Slider */}
          <View className="mt-6">
            <PriceRangeSlider
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </View>

          {/* // Ratings */}
          <View>
            <Text className="text-defaultBlack text-base font-medium">
              Minimum Ratings
            </Text>
            <View className="mt-4 gap-2">
              {Array.from([6, 5, 4], (star, i) => star - 1).map((star) => (
                <View
                  key={star}
                  className={`rounded-[20px] px-4 py-3 ${
                    ratings === star
                      ? 'border-primary border'
                      : 'border-muted border-[0.5px]'
                  }`}
                >
                  <Pressable
                    onPress={() => setRatings(star)}
                    className="flex-row items-center gap-2"
                  >
                    <StarFilled />
                    <Text className=" text-defaultBlack text-base font-normal">
                      {star} Stars
                    </Text>
                  </Pressable>
                </View>
              ))}
            </View>
          </View>

          {/* // Quick Filters */}
          <View className="mt-6">
            <Text className="text-defaultBlack text-base font-medium">
              Quick Filters
            </Text>
            <View className="mt-4 gap-3">
              {quickFilters.map((filter) => (
                <Pressable
                  key={filter}
                  onPress={() => {
                    setSelectedFilters((prev) =>
                      prev.includes(filter)
                        ? prev.filter((c) => c !== filter)
                        : [...prev, filter]
                    )
                  }}
                  className="flex-row items-center gap-3"
                >
                  {selectedFilters.includes(filter) ? (
                    <CheckedSquareIcon />
                  ) : (
                    <UncheckedSquareIcon />
                  )}

                  <Text className="text-defaultBlack text-base font-normal capitalize">
                    {filter}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          <Button
            title="Apply Filters"
            onPress={() => setVisible(false)}
            buttonPrimary
            className="mt-6"
          />
        </ScrollView>
      </SafeAreaView>
    </Modal>
  )
}

export default FilterModal
