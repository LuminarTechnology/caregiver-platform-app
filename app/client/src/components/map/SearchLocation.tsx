import { env } from '@lib/config/env'
import React, { useState } from 'react'
import { TextInput, View, FlatList, TouchableOpacity, Text } from 'react-native'

export default function SearchLocation({ onLocationSelect }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  async function search(q: string) {
    setQuery(q)
    if (q.length < 3) {
      setResults([])
      return
    }

    try {
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        q
      )}.json?access_token=${env.MAPBOX_TOKEN}`

      const res = await fetch(url)
      const data = await res.json()

      if (data?.features) {
        setResults(data.features)
      }
    } catch (err) {
      console.log('Mapbox search error:', err)
    }
  }

  function handleSelect(item: any) {
    const [lng, lat] = item.center
    onLocationSelect({ lat, lng })

    setQuery(item.place_name)
    setResults([])
  }

  return (
    <View className="border-b border-gray-300 bg-white px-4 py-3">
      {/* Input */}
      <TextInput
        className="rounded-lg bg-gray-100 px-4 py-2 text-base"
        placeholder="Search location..."
        value={query}
        onChangeText={search}
      />

      {/* Results */}
      {results.length > 0 && (
        <View className="mt-2 max-h-64 rounded-lg border border-gray-200 bg-white shadow-lg">
          <FlatList
            keyboardShouldPersistTaps="handled"
            data={results}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleSelect(item)}
                className="border-b border-gray-200 px-4 py-3 active:bg-gray-100"
              >
                <Text className="text-gray-700">{item.place_name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  )
}
