import { FilterIcon, SearchIconSmall } from '@lib/icons'
import SearchInput from '@lib/ui/SearchInput'
import { useState } from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  FlatList
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FilterModal from '../components/search/FilterModal'
import DropdownSelector from '@lib/ui/DropdownSelector'
import CaregiverCard from '../components/search/CaregiverCard'

const ServicesCategories = [
  'child care',
  'elderly care',
  'post-operative care',
  'specialized dementia care'
]
const quickFilters = ['verified only', 'available now']

const recommendedData = [
  'recommended',
  'highly rated',
  'price: low to high',
  'price: high to low',
  'most experienced'
]

const SearchScreen = () => {
  const [SearchQuery, setSearchQuery] = useState('')
  const [filterVisible, setFilterVisible] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    'child care'
  ])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([
    'child care'
  ])
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
    min: 0,
    max: 5000
  })
  const [ratings, setRatings] = useState<number | null>(5)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedRecommended, setSelectedRecommended] =
    useState<string>('most experienced')

  const caregivers = [
    {
      id: 1,
      name: 'Nusrat Jahan',
      location: 'Gulshan, Dhaka',
      rating: 5,
      reviews: 203,
      pricePerHour: 35,
      yearsOfExperience: 10,
      isVerified: true,
      isAvailable: true
    },
    {
      id: 2,
      name: 'Rahim Uddin',
      location: 'Banani, Dhaka',
      rating: 4.8,
      reviews: 150,
      pricePerHour: 30,
      yearsOfExperience: 8,
      isVerified: false,
      isAvailable: false
    },
    {
      id: 3,
      name: 'Ayesha Siddiqua',
      location: 'Dhanmondi, Dhaka',
      rating: 4.9,
      reviews: 180,
      pricePerHour: 40,
      yearsOfExperience: 12,
      isVerified: true,
      isAvailable: true
    },
    {
      id: 4,
      name: 'Karim Hossain',
      location: 'Uttara, Dhaka',
      rating: 4.7,
      reviews: 120,
      pricePerHour: 28,
      yearsOfExperience: 6,
      isVerified: false,
      isAvailable: true
    },
    {
      id: 5,
      name: 'Karim Hossain',
      location: 'Uttara, Dhaka',
      rating: 4.7,
      reviews: 120,
      pricePerHour: 28,
      yearsOfExperience: 6,
      isVerified: false,
      isAvailable: true
    },
    {
      id: 6,
      name: 'Karim Hossain',
      location: 'Uttara, Dhaka',
      rating: 4.7,
      reviews: 120,
      pricePerHour: 28,
      yearsOfExperience: 6,
      isVerified: false,
      isAvailable: true
    }
  ]

  return (
    <SafeAreaView className="bg-secondary flex-1">
      <View className="flex-1">
        <View className="bg-[#FFFFFF] p-4">
          <Text className="text-defaultBlack text-2xl font-medium">
            Find Caregivers
          </Text>
          <SearchInput
            value={SearchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            placeholder="Search by name or specialty..."
            className="my-4"
            leftIcon={<SearchIconSmall />}
          />

          <View className="flex-row items-center gap-2">
            {/* Filter Button */}
            <View className="flex-row">
              <View className="border-primary rounded-[20px] border-[0.5px] px-3 py-1">
                <Pressable
                  onPress={() => setFilterVisible(true)}
                  className="flex-row items-center gap-2"
                >
                  <FilterIcon />
                  <Text className="text-defaultBlack text-sm font-normal">
                    Filters
                  </Text>
                </Pressable>
              </View>
            </View>

            {/* Recommended Button */}
            <DropdownSelector
              selectedRecommended={selectedRecommended}
              setIsDropdownOpen={setIsDropdownOpen}
              isDropdownOpen={isDropdownOpen}
              recommendedData={recommendedData}
              setSelectedRecommended={setSelectedRecommended}
            />
          </View>

          <FilterModal
            visible={filterVisible}
            setVisible={setFilterVisible}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            servicesCategories={ServicesCategories}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            quickFilters={quickFilters}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            ratings={ratings}
            setRatings={setRatings}
          />
        </View>

        <View className="px-4">
          <Text className="text-subBlack pt-2 text-sm">4 caregivers found</Text>

          {/* caregiver card */}
          <View className="mt-4 gap-3">
            <FlatList
              data={caregivers}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <CaregiverCard caregiver={item} />}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingVertical: 12,
                gap: 12,
                paddingBottom: 170
              }}
              keyboardShouldPersistTaps="handled"
              windowSize={5}
              maxToRenderPerBatch={5}
              initialNumToRender={7}
              updateCellsBatchingPeriod={50}
              getItemLayout={(data, index) => ({
                length: 120,
                offset: 120 * index,
                index
              })}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen
