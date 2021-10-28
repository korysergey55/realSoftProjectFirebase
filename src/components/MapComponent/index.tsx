/* global google */
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
  Marker,
} from '@react-google-maps/api'
import useGeoPosition from 'components/CurrentGeoposition/index'
import { toJS } from 'mobx'
import { useStore } from 'stores'

const containerStyle = {
  width: '100%',
  height: '500px',
}
interface IMap {
  button?: boolean
}
// 'Chicago, IL' 'Los Angeles, CA' 'DRIVING'

const MapComponent: React.FC<IMap> = ({ button = false }) => {
  const { sounterState } = useStore()
  const { positions } = useGeoPosition()
  const [currentPosition, setCurrentPosition] = useState<any>({})
  const [map, setMap] = useState(null)

  //directions service
  const [options, setOptions] = useState<any>({
    destination: '',
    origin: '',
    travelMode: 'WALKING',
    waypoints: [],
    optimizeWaypoints: true,
  })
  const [response, setResponse] = useState(null)

  // DistanceMatrix
  const [optionsMatrix, setOptionsMatrix] = useState<any>({
    destinations: [],
    origins: [],
    travelMode: 'WALKING',
    avoidHighways: false,
    avoidTolls: false,
  })
  const [responceMatrix, setResponseMatrix] = useState<any>(null)

  const [marker, setMarker] = useState<any>([])
  const [length, setLength] = useState<any>(0)

  useEffect(() => {
    positions &&
      setCurrentPosition({
        lat: positions?.latitude,
        lng: positions?.longitude,
      })
  }, [positions])

  useEffect(() => {
    if (marker.length > 1) {
      distance(marker)
      distanceMatrix(marker)
      sounterState.setUserMarkers(marker)
    }
  }, [marker])

  useEffect(() => {
    roadLength()
  }, [responceMatrix])

  useEffect(() => {
    if (length > 0) {
      sounterState.setDistance(length)
    }
  }, [length])

  const addMarker = () => {
    setMarker([...marker, { ...currentPosition }])
  }
  const roadLength = () => {
    let totalRoadLength = 0
    if (responceMatrix !== null) {
      const itemValue = responceMatrix.rows[0].elements.map((item: any) => {
        totalRoadLength += item.distance.value
      })
      setLength(totalRoadLength)
    }
  }

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

  const onMapClick = (...args: any) => {
    const e = args[0]
    const lat: any = e.latLng.lat()
    const lng: any = e.latLng.lng()

    const arr = [...marker, { lat, lng }]
    setMarker(arr)
  }

  //directions service code
  const directionsCallback = useCallback(res => {
    // console.log('directionsCallback', toJS(res))
    if (res !== null) {
      if (res.status === 'OK') {
        setResponse(res)
      } else {
      }
    }
  }, [])

  const distance = (markerArr: any) => {
    const waypoints = markerArr.map((marker: any) => ({
      location: { lat: marker.lat, lng: marker.lng },
      stopover: true,
    }))
    const origin = waypoints.shift().location
    const destination = waypoints.pop().location
    setOptions({
      ...options,
      waypoints,
      origin,
      destination,
    })
  }

  // DistanceMatrix code
  const distanceMatrixCallback = useCallback(res => {
    // console.log('distanceMatrixCallback', toJS(res))
    if (res !== null) {
      let eachElement = false
      res.rows[0].elements.forEach((el: any) => {
        eachElement = el.status === 'OK'
      })
      if (eachElement) {
        setResponseMatrix(res)
      } else {
      }
    }
  }, [])

  const distanceMatrix = (markerArr: any) => {
    const origins = [markerArr[0]]
    const destinations = markerArr
    setOptionsMatrix({
      ...optionsMatrix,
      origins,
      destinations,
    })
  }

  // const directionsMatrixOptions = useMemo(() => {
  //   return {
  //     destinations: [...destinationMatrix],
  //     origins: [...originDistanceMatrix],
  //     travelMode: travelMode,
  //   }
  // }, [destinationMatrix, originDistanceMatrix, travelMode])

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
            {/* <Marker
              label="currentPosition"
              position={currentPosition}
              // draggable={true}
            ></Marker> */}
            {marker && (
              <DirectionsService
                options={options}
                callback={directionsCallback}
              />
            )}
            <DistanceMatrixService
              options={optionsMatrix}
              callback={distanceMatrixCallback}
            />

            {marker &&
              marker.length === 1 &&
              marker.map((el: any) => (
                <Marker position={el} draggable={true} key={el.lat + el.lng} />
              ))}
            {marker && marker.length > 1 ? (
              <DirectionsRenderer
                options={{
                  directions: response,
                  draggable: true,
                }}
              />
            ) : null}
          </GoogleMap>
        ) : null}
      </div>
    </div>
  )
}
export default React.memo(MapComponent)
