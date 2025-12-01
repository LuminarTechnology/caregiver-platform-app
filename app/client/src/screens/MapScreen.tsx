import React from 'react'
import { StyleSheet, View } from 'react-native'
import Mapbox from '@rnmapbox/maps'

const bangladeshGeoJSON = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [88.084, 26.631],
            [92.673, 26.631],
            [92.673, 20.703],
            [88.084, 20.703],
            [88.084, 26.631]
          ]
        ]
      }
    }
  ]
}

export default function MapScreen() {
  return (
    <View style={styles.page}>
      <Mapbox.MapView style={styles.map}>
        <Mapbox.Camera
          centerCoordinate={[90.4125, 23.8103]} // Center of Bangladesh
          zoomLevel={6}
        />

        {/* Bangladesh highlight */}
        <Mapbox.ShapeSource id="bd-source" shape={bangladeshGeoJSON}>
          <Mapbox.FillLayer
            id="bd-fill"
            style={{
              fillColor: 'rgba(0, 123, 255, 0.3)',
              fillOutlineColor: 'blue'
            }}
          />
        </Mapbox.ShapeSource>
      </Mapbox.MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  page: { flex: 1 },
  map: { flex: 1 }
})
