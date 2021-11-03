/* global google */
// @ts-ignore
import React, { useCallback, useState, useEffect, useMemo } from 'react'
import styles from './styles.module.scss'
import {
  GoogleMap,
  useJsApiLoader,
  DirectionsService,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { Marker } from '@react-google-maps/api'
import useGeoPosition from 'utils/CurrentGeoposition'

const containerStyle = {
  width: '100%',
  height: '400px',
}
const center = {
  lat: 49.446912,
  lng: 32.0536576,
}

const MapPage = () => {
  const { positions } = useGeoPosition()
  const [currentPosition, setCorrentPosition] = useState<any>({})
  const [map, setMap] = useState(null)

  //directions service
  // 'Chicago, IL' 'Los Angeles, CA' 'DRIVING'
  const [travelMode, setTravelMode] = useState<string>('DRIVING')
  const [origin, setOrigin] = useState<string>('')
  const [destination, setDestination] = useState<string>('')
  const [response, setResponse] = useState(null)
  const [formState, setFormState] = useState<any>({})

  useEffect(() => {
    positions &&
      setCorrentPosition({
        lat: positions?.latitude,
        lng: positions?.longitude,
      })
  }, [positions])

  //map component code
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

  //directions service
  const onChangeTravelMode = (evt: any) => {
    const { name } = evt.target
    setTravelMode(name)
  }
  const onChangeInput = (evt: any) => {
    const { name, value } = evt.target
    if (name === 'ORIGIN') {
      setOrigin(value)
    }
    if (name === 'DESTINATION') {
      setDestination(value)
    }
  }

  const onSubmitBuildRoute = useCallback(() => {
    setFormState({
      destination: destination,
      origin: origin,
      travelMode: travelMode,
    })
  }, [destination, origin, travelMode])

  const directionsCallback = useCallback(res => {
    if (res !== null) {
      if (res.status === 'OK') {
        setResponse(res)
      } else {
        console.log('response: ', res)
      }
    }
  }, [])

  const directionsServiceOptions = useMemo(() => {
    return {
      destination: formState.destination,
      origin: formState.origin,
      travelMode: formState.travelMode,
    }
  }, [formState])

  const onMapClick = useCallback((...args) => {
    console.log('onClick args: ', args)
  }, [])

  return (
    <div className={styles.container}>
      <h2>MapPage</h2>
      <div className={styles.containerStyle}>
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
            {destination && origin && (
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

      <div className={styles.direction}>
        <div className={styles.inputContainer}>
          <div className={styles.inputWripper}>
            <label htmlFor="ORIGIN">Origin</label>
            <br />
            <input
              name="ORIGIN"
              value={origin}
              className={styles.input}
              type="text"
              onChange={onChangeInput}
            />
          </div>
          <div className={styles.inputWripper}>
            <label htmlFor="DESTINATION">Destination</label>
            <br />
            <input
              name="DESTINATION"
              value={destination}
              className={styles.input}
              type="text"
              onChange={onChangeInput}
            />
          </div>
        </div>

        <div className={styles.radioContainer}>
          <div className={styles.radioWripper}>
            <input
              className={styles.inputRadio}
              name="DRIVING"
              type="radio"
              checked={travelMode === 'DRIVING'}
              onChange={onChangeTravelMode}
            />
            <label className={styles.laberRadio} htmlFor="DRIVING">
              Driving
            </label>
          </div>

          <div className={styles.radioWripper}>
            <input
              className={styles.inputRadio}
              name="BICYCLING"
              type="radio"
              checked={travelMode === 'BICYCLING'}
              onChange={onChangeTravelMode}
            />
            <label className={styles.laberRadio} htmlFor="BICYCLING">
              Bicycling
            </label>
          </div>

          <div className={styles.radioWripper}>
            <input
              className={styles.inputRadio}
              name="TRANSIT"
              type="radio"
              checked={travelMode === 'TRANSIT'}
              onChange={onChangeTravelMode}
            />
            <label className={styles.laberRadio} htmlFor="TRANSIT">
              Transit
            </label>
          </div>

          <div className={styles.radioWripper}>
            <input
              className={styles.inputRadio}
              name="WALKING"
              type="radio"
              checked={travelMode === 'WALKING'}
              onChange={onChangeTravelMode}
            />
            <label className={styles.laberRadio} htmlFor="WALKING">
              Walking
            </label>
          </div>
        </div>
        <button
          className={styles.buildRoute}
          type="button"
          onClick={onSubmitBuildRoute}
        >
          Build Route
        </button>
      </div>
    </div>
  )
}

export default React.memo(MapPage)
