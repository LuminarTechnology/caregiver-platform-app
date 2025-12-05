import React, { useState } from 'react'
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Keyboard
} from 'react-native'
import MapboxGL from '@rnmapbox/maps'
import { useRouteData } from './useRouteData'
import { env } from '@lib/config/env'

export default function FullMapScreen() {
  const { clientCoord, providerCoord, route } = useRouteData()
  const [searchText, setSearchText] = useState('')
  const [searchCoord, setSearchCoord] = useState<number[] | null>(null)

  const searchLocation = async () => {
    if (!searchText) return
    Keyboard.dismiss()

    try {
      const url = `https://api.mapbox.com/search/geocode/v6/forward?country=bd?q=${searchText}&access_token=${env.MAPBOX_TOKEN}&limit=1`

      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      if (data.features && data.features.length > 0) {
        // Correctly access coordinates from the geometry object for Mapbox v6
        const [lon, lat] = data.features[0].geometry.coordinates
        console.log(data.features)
        // Note: Geocoding returns [longitude, latitude]
        setSearchCoord([lon, lat])
      } else {
        // Handle case where no features are found (e.g., show an error to the user)
        console.log('No search results found.')
      }
    } catch (err) {
      console.log('Search error:', err)
    }
  }

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchWrapper}>
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search location"
          style={styles.input}
        />
        <TouchableOpacity onPress={searchLocation} style={styles.button}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Go</Text>
        </TouchableOpacity>
      </View>

      {/* Map */}
      <MapboxGL.MapView style={styles.map}>
        {/* Camera */}
        <MapboxGL.Camera
          bounds={{
            ne: [
              Math.max(clientCoord[0], providerCoord[0], searchCoord?.[0] || 0),
              Math.max(clientCoord[1], providerCoord[1], searchCoord?.[1] || 0)
            ],
            sw: [
              Math.min(clientCoord[0], providerCoord[0], searchCoord?.[0] || 0),
              Math.min(clientCoord[1], providerCoord[1], searchCoord?.[1] || 0)
            ],
            padding: 50
          }}
        />

        {/* Route */}
        {route && (
          <MapboxGL.ShapeSource
            id="routeFull"
            shape={{
              type: 'FeatureCollection',
              features: [{ type: 'Feature', geometry: route, properties: {} }]
            }}
          >
            <MapboxGL.LineLayer
              id="routeFullLine"
              style={{ lineWidth: 5, lineColor: 'red' }}
            />
          </MapboxGL.ShapeSource>
        )}

        {/* Client Marker */}
        <MapboxGL.PointAnnotation id="clientFull" coordinate={clientCoord}>
          <View style={styles.clientMarker}>
            <Text style={styles.markerText}>C</Text>
          </View>
        </MapboxGL.PointAnnotation>

        {/* Provider Marker */}
        <MapboxGL.PointAnnotation id="providerFull" coordinate={providerCoord}>
          <View style={styles.providerMarker}>
            <Text style={styles.markerText}>P</Text>
          </View>
        </MapboxGL.PointAnnotation>

        {/* Search Pin */}
        {searchCoord && (
          <MapboxGL.PointAnnotation id="searchPin" coordinate={searchCoord}>
            <View style={styles.searchPin}>
              <Text style={styles.pinText}>📍</Text>
            </View>
          </MapboxGL.PointAnnotation>
        )}
      </MapboxGL.MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },

  searchWrapper: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    zIndex: 99,
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 6
  },
  button: {
    marginLeft: 8,
    backgroundColor: '#1e90ff',
    padding: 8,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },

  clientMarker: {
    width: 30,
    height: 30,
    backgroundColor: 'green',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  providerMarker: {
    width: 30,
    height: 30,
    backgroundColor: 'red',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  markerText: {
    color: 'white',
    fontWeight: 'bold'
  },
  searchPin: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  pinText: { fontSize: 24 }
})
