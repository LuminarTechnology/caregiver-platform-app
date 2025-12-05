import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import MapboxGL from '@rnmapbox/maps'
import { useRouteData } from './useRouteData'

export default function MiniMapScreen({ navigation }) {
  const { clientCoord, providerCoord, route } = useRouteData()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.expandButton}
        onPress={() => navigation.navigate('FullMap')}
      >
        <Text style={styles.expandText}>Expand</Text>
      </TouchableOpacity>

      <View style={styles.mapWrapper}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera
            bounds={{
              ne: [
                Math.max(clientCoord[0], providerCoord[0]),
                Math.max(clientCoord[1], providerCoord[1])
              ],
              sw: [
                Math.min(clientCoord[0], providerCoord[0]),
                Math.min(clientCoord[1], providerCoord[1])
              ],
              paddingTop: 40,
              paddingBottom: 40,
              paddingLeft: 40,
              paddingRight: 40
            }}
            animationMode="none"
            animationDuration={0}
          />

          {/* Route */}
          {route && (
            <MapboxGL.ShapeSource
              id="routeMini"
              shape={{
                type: 'FeatureCollection',
                features: [
                  {
                    type: 'Feature',
                    geometry: route,
                    properties: {}
                  }
                ]
              }}
            >
              <MapboxGL.LineLayer
                id="routeMiniLine"
                style={{ lineWidth: 3, lineColor: 'red' }}
              />
            </MapboxGL.ShapeSource>
          )}

          {/* Client */}
          <MapboxGL.PointAnnotation id="client" coordinate={clientCoord}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: 'green',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>C</Text>
            </View>
          </MapboxGL.PointAnnotation>

          {/* Provider */}
          <MapboxGL.PointAnnotation id="provider" coordinate={providerCoord}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: 'red',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>P</Text>
            </View>
          </MapboxGL.PointAnnotation>
        </MapboxGL.MapView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  mapWrapper: {
    height: '33%',
    borderWidth: 1,
    borderColor: '#ccc'
  },
  map: { flex: 1 },
  expandButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 99,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 6
  },
  expandText: { fontWeight: 'bold' }
})
