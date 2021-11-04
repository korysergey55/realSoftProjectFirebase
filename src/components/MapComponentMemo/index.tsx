import React, { useCallback, useState, useEffect, useMemo } from 'react'
import { useStore } from 'stores'
import { observer } from 'mobx-react'
import {
  GoogleMap,
  useJsApiLoader,
  DirectionsService,
  DirectionsRenderer,
  DistanceMatrixService,
  Marker,
} from '@react-google-maps/api'
import useGeoPosition from 'utils/CurrentGeoposition/index'
import { Select } from 'antd'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
// import { toJS } from 'mobx'
const containerStyle = {
  width: '100%',
  height: '500px',
}
interface IMap {
  button?: boolean
  click?: boolean
  currentPos?: boolean
}
const { Option } = Select

const MapComponentMemo: React.FC<IMap> = observer(
  ({ button = false, click = false, currentPos = false }) => {
    const { sounterStore } = useStore()
    const { positions } = useGeoPosition()
    const [currentPosition, setCurrentPosition] = useState<any>(null)
    const [map, setMap] = useState(null)

    const [marker, setMarker] = useState<any>()
    const [distanceLength, setDistanceLength] = useState<number>(0)
    const [travelMode, setTravelMode] = useState<any>('WALKING')
    //Directions service
    const [origin, setOrigin] = useState<any>(null)
    const [destination, setDestination] = useState<any>(null)
    const [waypoints, setWaypoints] = useState<any>([])
    const [response, setResponse] = useState<any>(null)
    // DistanceMatrix
    const [originMatrix, setOriginMatrix] = useState<any>([])
    const [destinationMatrix, setDestinationMatrix] = useState<any>([])
    const [responceMatrix, setResponseMatrix] = useState<any>(null)

    useEffect(() => {
      positions &&
        setCurrentPosition({
          lat: positions?.latitude,
          lng: positions?.longitude,
        })
    }, [positions])

    useEffect(() => {
      const isMarkers = () => {
        if (sounterStore.item) {
          const markerArr = sounterStore.item.markersArr
          setMarker(markerArr)
        }
        if (click) {
          setMarker([])
        }
      }
      isMarkers()
    }, [sounterStore.item, click])

    useEffect(() => {
      if (marker && marker.length > 1) {
        changeWaipointsDistance(marker)
        changeDistanceMatrix(marker)
        sounterStore.setUserMarkers(marker)
      }
    }, [marker])

    useEffect(() => {
      const findTotalDistance = () => {
        let totalRoadDistance = 0
        if (responceMatrix !== null) {
          responceMatrix?.rows[0]?.elements?.map(
            (item: any) => (totalRoadDistance += item.distance?.value)
          )
          setDistanceLength(totalRoadDistance)
        }
      }
      findTotalDistance()
    }, [responceMatrix])

    useEffect(() => {
      if (distanceLength > 0) {
        sounterStore.setDistance(distanceLength)
      }
    }, [distanceLength, sounterStore])

    const clearMarkers = () => {
      setMarker([])
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

    //Directions service
    const directionsServiceOptions = useMemo(() => {
      return {
        destination: destination,
        origin: origin,
        travelMode: travelMode,
        waypoints: waypoints,
        optimizeWaypoints: true,
      }
    }, [destination, origin, travelMode, waypoints])

    const changeWaipointsDistance = (markerArr: any) => {
      const waypoints = markerArr.map((marker: any) => ({
        location: { lat: marker.lat, lng: marker.lng },
        stopover: true,
      }))
      const origin = waypoints.shift().location
      const destination = waypoints.pop().location
      setOrigin(origin)
      setDestination(destination)
      setWaypoints(waypoints)
    }

    const directionsCallback = useCallback(
      res => {
        if (res !== null) {
          if (res.status === 'OK') {
            setResponse(res)
          } else {
          }
        }
      },
      [destination, origin, waypoints, travelMode]
    )

    // DistanceMatrix
    const optionsMatrix = useMemo(() => {
      return {
        destinations: [...destinationMatrix],
        origins: [...originMatrix],
        travelMode: travelMode,
        avoidHighways: false,
        avoidTolls: false,
      }
    }, [destinationMatrix, originMatrix, travelMode])

    const changeDistanceMatrix = (markerArr: any) => {
      const origins = [markerArr[0]]
      const destinations = markerArr
      setOriginMatrix(origins)
      setDestinationMatrix(destinations)
    }

    const distanceMatrixCallback = useCallback(res => {
      if (res !== null) {
        let eachElementOK = false
        res.rows[0].elements.forEach((el: any) => {
          eachElementOK = el.status === 'OK'
        })
        if (eachElementOK) {
          setResponseMatrix(res)
        } else {
        }
      }
    }, [])

    function onChange(value: any) {
      setTravelMode(value)
    }
    console.log(travelMode)

    return (
      <div className={styles.container}>
        {button && (
          <>
            <button
              type="button"
              className={styles.clearMap}
              onClick={clearMarkers}
            >
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                color="grey"
                size="1x"
                className={styles.btnIcon}
              />
              Clear Map
            </button>
            <Select
              className={styles.select}
              showSearch
              style={{ width: 200 }}
              placeholder="Select trevel mode"
              optionFilterProp="children"
              onChange={onChange}
            >
              <Option value="DRIVING">DRIVING</Option>
              <Option value="WALKING">WALKING</Option>
              {/* <Option value="BICYCLING">BICYCLING</Option> */}
            </Select>
          </>
        )}
        <div className={styles.containerStyle}>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={currentPosition}
              zoom={100}
              onLoad={onLoad}
              onUnmount={onUnmount}
              onClick={click ? onMapClick : () => {}}
            >
              {currentPos && (
                <Marker
                  label="currentPosition"
                  position={currentPosition}
                  draggable={false}
                ></Marker>
              )}
              {destination && origin && (
                <DirectionsService
                  options={directionsServiceOptions}
                  callback={directionsCallback}
                />
              )}
              <DistanceMatrixService
                options={optionsMatrix}
                callback={distanceMatrixCallback}
              />
              {marker && marker.length > 1 ? (
                <DirectionsRenderer
                  options={{
                    directions: { ...response },
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
)
export default React.memo(MapComponentMemo)
