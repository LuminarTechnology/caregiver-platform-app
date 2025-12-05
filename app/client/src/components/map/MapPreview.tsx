// src/components/map/MapPreview.tsx
import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import Mapbox, {
  Camera,
  MarkerView,
  ShapeSource,
  LineLayer
} from '@rnmapbox/maps'
import FullMapModal from './FullMapModal'

export default function MapPreview({ client, provider, routeGeoJson }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Small preview */}
      <TouchableOpacity
        className="h-44 w-full overflow-hidden rounded-xl border border-gray-300"
        onPress={() => setOpen(true)}
        activeOpacity={0.9}
      >
        <Mapbox.MapView className="flex-1">
          <Camera
            zoomLevel={12}
            centerCoordinate={[client.lng, client.lat]}
            animationMode="flyTo"
          />

          {/* Client Marker */}
          <MarkerView coordinate={[client.lng, client.lat]}>
            <View className="h-4 w-4 rounded-full border-2 border-white bg-blue-500" />
          </MarkerView>

          {/* Provider Marker */}
          <MarkerView coordinate={[provider.lng, provider.lat]}>
            <View className="h-4 w-4 rounded-full border-2 border-white bg-red-500" />
          </MarkerView>

          {/* Route */}
          {routeGeoJson && (
            <ShapeSource id="route" shape={routeGeoJson}>
              <LineLayer
                id="routeLine"
                style={{
                  lineWidth: 4,
                  lineColor: '#2563EB' // Tailwind 'blue-600'
                }}
              />
            </ShapeSource>
          )}
        </Mapbox.MapView>
      </TouchableOpacity>

      {/* Fullscreen Map */}
      <FullMapModal
        visible={open}
        onClose={() => setOpen(false)}
        client={client}
        provider={provider}
        routeGeoJson={routeGeoJson}
      />
    </>
  )
}
