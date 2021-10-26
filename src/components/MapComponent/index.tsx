/* global google */
// @ts-ignore
import React, { useCallback, useState, useEffect, useMemo } from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import {
  GoogleMap,
  useJsApiLoader,
  DirectionsService,
  DirectionsRenderer,
  DistanceMatrixService,
} from '@react-google-maps/api'
import { Marker } from '@react-google-maps/api'
import useGeoPosition from 'containers/Public/MainPage/CurrentGeoposition'

const containerStyle = {
  width: '100%',
  height: '500px',
}

interface IMap {
  button?: boolean
}
const MapComponent: React.FC<IMap> = ({ button = false }) => {
  const { positions } = useGeoPosition()
  const [currentPosition, setCurrentPosition] = useState<any>({})
  const [map, setMap] = useState(null)

  //directions service
  // 'Chicago, IL' 'Los Angeles, CA' 'DRIVING'
  const [travelMode, setTravelMode] = useState<any>('WALKING')
  const [origin, setOrigin] = useState<any>([])
  const [destination, setDestination] = useState<any>([])
  const [response, setResponse] = useState(null)
  const [startMarkerPosition, setStartMarkerPosition] = useState<any>({
    lat: '',
    lng: '',
  })
  const [endMarkerPosition, setEndMarkerPosition] = useState<any>({
    lat: '',
    lng: '',
  })

  useEffect(() => {
    positions &&
      setCurrentPosition({
        lat: positions?.latitude,
        lng: positions?.longitude,
      })
    setOrigin([currentPosition])
    setDestination([
      { lat: positions?.latitude + 0.0001, lng: positions?.longitude + 0.0001 },
    ])
  }, [positions])

  //map code
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

  //directions service code
  const directionsCallback = useCallback(res => {
    console.log('responseOK: ', res)
    if (res !== null) {
      if (res.status === 'OK') {
        setResponse(res)
      } else {
        // console.log('response: ', res)
      }
    }
  }, [])
  const directionsServiceOptions = useMemo(() => {
    return {
      destination: destination[0],
      origin: origin[0],
      travelMode: travelMode,
    }
  }, [destination, origin, travelMode])

  // DistanceMatrix code
  const directionsMatrixOptions = useMemo(() => {
    return {
      destinations: [...destination],
      origins: [...origin],
      travelMode: travelMode,
    }
  }, [destination, origin, travelMode])

  const distanceMatrixCallback = useCallback(res => {
    if (res !== null) {
      console.log('distanceMatrixCallback-responseOK: ', res)
      if (res.status === 'OK') {
        setResponse(res)
      } else {
        console.log('response: ', res)
      }
    }
  }, [])

  const onDragStartMarker = (e: any) => {
    const lat: any = e.latLng.lat()
    const lng: any = e.latLng.lng()
    setStartMarkerPosition({
      lat,
      lng,
    })
    setOrigin([startMarkerPosition])
  }
  const onDragEndMarker = (e: any) => {
    const lat: any = e.latLng.lat()
    const lng: any = e.latLng.lng()
    setEndMarkerPosition({
      lat,
      lng,
    })
    setDestination([endMarkerPosition])
  }

  const addMarker = () => {
    console.log('addMarker')
  }

  return (
    <div className={styles.container}>
      {button && (
        <button type="button" className={styles.addMarker} onClick={addMarker}>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            color="grey"
            size="1x"
            className={styles.btnIcon}
          />
          Add marker
        </button>
      )}
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
            <Marker
              label="currentPosition"
              position={currentPosition}
              // draggable={true}
              // onDragEnd={onDragEndMarker}
            ></Marker>
            {destination && origin && (
              <DistanceMatrixService
                options={{ ...directionsMatrixOptions }}
                callback={distanceMatrixCallback}
              />
            )}
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
                  draggable: true,
                }}
              />
            )}
          </GoogleMap>
        ) : null}
      </div>
    </div>
  )
}
export default React.memo(MapComponent)
