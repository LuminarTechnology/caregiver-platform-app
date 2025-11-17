import React from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import { FilterIcon, SearchIcon } from '@lib/icons'

interface SearchBarProps {
  onFilterPress: () => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onFilterPress }) => {
  return (
    <View className="flex-row items-center gap-2 bg-white p-4">
      {/* Search Input Container */}
      <View className="flex-1 flex-row items-center gap-2 rounded-2xl bg-gray-100 px-4 py-3">
        <SearchIcon height={20} width={20} />
        <TextInput
          className="text-muted flex-1 text-base"
          placeholder="Search messages"
          placeholderTextColor="#888"
        />
      </View>

      {/* Filter Button */}
      <TouchableOpacity
        className="h-16 w-16 items-center justify-center rounded-xl bg-gray-100"
        onPress={onFilterPress}
      >
        <FilterIcon />
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar
