/* global google */
import React, { useCallback, useState, useEffect, useMemo } from 'react'
import useGeoPosition from 'utils/CurrentGeoposition'
import {
  GoogleMap,
  useJsApiLoader,
  DirectionsService,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { Marker } from '@react-google-maps/api'
import DirectionServiseForm from './DirectionForm'
import styles from './styles.module.scss'

const containerStyle = {
  width: '100%',
  height: '400px',
}

const MapComponent = () => {
  const { positions } = useGeoPosition()
  const [currentPosition, setCorrentPosition] = useState<any>({})
  const [map, setMap] = useState(null)
  const [response, setResponse] = useState(null)
  const [formState, setFormState] = useState<any>({
    travelMode: 'DRIVING',
    destination: '',
    origin: '',
  })

  useEffect(() => {
    positions &&
      setCorrentPosition({
        lat: positions?.latitude,
        lng: positions?.longitude,
      })
  }, [positions])

  //Map component code
  const { isLoaded } = useJsApiLoader({
    id: 'myprojectrealsoft',
    googleMapsApiKey: 'AIzaSyARFt_e8aIQbS3evmvme0k4dInWVus72gw',
  })
  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds()
    map.fitBounds(bounds)
    setMap(map)
  }, [])
  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])
  const onMapClick = useCallback((...args) => {
    console.log('onClick args: ', args)
  }, [])

  //Directions service  code
  const directionsServiceOptions = useMemo(() => {
    return {
      destination: formState.destination,
      origin: formState.origin,
      travelMode: formState.travelMode,
    }
  }, [formState])

  const directionsCallback = useCallback(
    res => {
      if (res !== null) {
        if (res.status === 'OK') {
          setResponse(res)
        } else {
          console.log('response: ', res)
        }
      }
    },
    [formState]
  )

  const onSubmitBuildRoute = (
    travelMode: string,
    origin: string,
    destination: string
  ) => {
    setFormState({
      destination: destination,
      origin: origin,
      travelMode: travelMode,
    })
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>GoogleMap</h2>
      <div className={styles.mapContainer}>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={currentPosition}
            zoom={100}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onClick={onMapClick}
          >
            <Marker position={currentPosition}></Marker>
            {formState.destination && formState.origin && (
              <DirectionsService
                options={directionsServiceOptions}
                callback={directionsCallback}
              />
            )}
            {response !== null && (
              <DirectionsRenderer
                options={{
                  directions: response,
                }}
              />
            )}
          </GoogleMap>
        ) : null}
      </div>
      <DirectionServiseForm onSubmitBuildRoute={onSubmitBuildRoute} />
    </div>
  )
}

export default React.memo(MapComponent)
