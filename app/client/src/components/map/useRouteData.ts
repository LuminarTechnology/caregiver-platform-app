import { env } from '@lib/config/env'
import { useEffect, useState } from 'react'

export function useRouteData() {
  const clientCoord = [90.399452, 23.777176]
  const providerCoord = [90.412521, 23.752866]

  const [route, setRoute] = useState(null)

  useEffect(() => {
    fetchRoute()
  }, [])

  const fetchRoute = async () => {
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${clientCoord[0]},${clientCoord[1]};${providerCoord[0]},${providerCoord[1]}?geometries=geojson&access_token=${env.MAPBOX_TOKEN}`

    const res = await fetch(url)
    const data = await res.json()

    if (data.routes?.length) {
      setRoute(data.routes[0].geometry)
    }
  }

  return {
    clientCoord,
    providerCoord,
    route
  }
}
