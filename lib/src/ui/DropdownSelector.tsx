import { View, Text, TouchableOpacity } from 'react-native'
import { ArrowDownIcon, ArrowUpIcon } from '@lib/icons'

type DropdownSelectorProps = {
  selectedRecommended: string
  setIsDropdownOpen: (open: boolean) => void
  isDropdownOpen: boolean
  recommendedData: string[]
  setSelectedRecommended: (value: string) => void
}

const DropdownSelector = ({
  selectedRecommended,
  setIsDropdownOpen,
  isDropdownOpen,
  recommendedData = [],
  setSelectedRecommended
}: DropdownSelectorProps) => {
  return (
    <View className="relative">
      <View>
        <TouchableOpacity
          className="border-primary flex-row items-center gap-2 rounded-[20px] border-[0.5px] px-3 py-1"
          onPress={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <Text className="text-defaultBlack text-sm font-normal capitalize">
            {selectedRecommended}
          </Text>
          {isDropdownOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </TouchableOpacity>
      </View>

      {/* Simple Dropdown */}
      {isDropdownOpen && (
        <View className="bg-background border-muted absolute left-0 top-12 z-10 min-w-40 rounded-lg border p-2">
          {recommendedData.map((option) => (
            <TouchableOpacity
              key={option}
              className={`rounded-2xl px-3 py-2 ${
                selectedRecommended === option ? 'bg-primary' : ''
              }`}
              onPress={() => {
                setSelectedRecommended(option)
                setIsDropdownOpen(false)
              }}
            >
              <Text
                className={`text-sm capitalize ${
                  selectedRecommended === option
                    ? 'font-medium text-white'
                    : 'text-defaultBlack'
                }`}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  )
}

export default DropdownSelector
