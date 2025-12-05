import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import MapboxGL from '@rnmapbox/maps'

MapboxGL.setAccessToken('YOUR_MAPBOX_ACCESS_TOKEN')

export default function MapTestScreen() {
  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false)
  }, [])

  return (
    <View style={styles.container}>
      <MapboxGL.MapView style={styles.map} zoomEnabled scrollEnabled>
        <MapboxGL.Camera
          zoomLevel={12}
          centerCoordinate={[90.399452, 23.777176]} // Dhaka
        />
      </MapboxGL.MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  }
})
