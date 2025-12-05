// src/components/map/FullMapModal.tsx
import React, { useState } from 'react'
import { Modal, View, Text, TouchableOpacity } from 'react-native'
import Mapbox, {
  Camera,
  MarkerView,
  ShapeSource,
  LineLayer
} from '@rnmapbox/maps'
import * as Location from 'expo-location'
import SearchLocation from './SearchLocation'

export default function FullMapModal({
  visible,
  onClose,
  client,
  provider,
  routeGeoJson
}) {
  const [current, setCurrent] = useState({
    lat: client.lat,
    lng: client.lng
  })

  async function getCurrentLocation() {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') return

      const loc = await Location.getCurrentPositionAsync({})
      setCurrent({
        lat: loc.coords.latitude,
        lng: loc.coords.longitude
      })
    } catch (err) {
      console.log('Location error:', err)
    }
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View className="flex-1 bg-white">
        {/* Top Bar */}
        <View className="flex-row items-center justify-between border-b border-gray-300 px-4 py-3">
          <Text className="text-lg font-semibold">Select Location</Text>

          <TouchableOpacity
            onPress={onClose}
            className="rounded-lg bg-gray-200 px-4 py-2"
          >
            <Text className="text-gray-700">Close</Text>
          </TouchableOpacity>
        </View>

        {/* Search Component */}
        <SearchLocation onLocationSelect={setCurrent} />

        {/* MAP */}
        <View className="flex-1">
          <Mapbox.MapView className="flex-1">
            <Camera
              zoomLevel={13}
              centerCoordinate={[current.lng, current.lat]}
              animationMode="flyTo"
            />

            {/* Selected Location */}
            <MarkerView coordinate={[current.lng, current.lat]}>
              <View className="h-5 w-5 rounded-full border-2 border-white bg-green-600" />
            </MarkerView>

            {/* Client */}
            <MarkerView coordinate={[client.lng, client.lat]}>
              <View className="h-4 w-4 rounded-full border-2 border-white bg-blue-500" />
            </MarkerView>

            {/* Provider */}
            <MarkerView coordinate={[provider.lng, provider.lat]}>
              <View className="h-4 w-4 rounded-full border-2 border-white bg-red-500" />
            </MarkerView>

            {/* Route */}
            {routeGeoJson && (
              <ShapeSource id="routeLine2" shape={routeGeoJson}>
                <LineLayer
                  id="routeLayer2"
                  style={{
                    lineWidth: 4,
                    lineColor: '#2563EB' // blue-600
                  }}
                />
              </ShapeSource>
            )}
          </Mapbox.MapView>

          {/* Floating Button: Current Location */}
          <TouchableOpacity
            onPress={getCurrentLocation}
            className="absolute bottom-6 right-6 rounded-full bg-white p-3 shadow-lg"
          >
            <Text className="text-lg">📍</Text>
          </TouchableOpacity>
        </View>

        {/* Lat/Lng */}
        <View className="border-t border-gray-300 p-4">
          <Text className="text-gray-700">
            Lat: {current.lat.toFixed(6)} | Lng: {current.lng.toFixed(6)}
          </Text>
        </View>
      </View>
    </Modal>
  )
}
