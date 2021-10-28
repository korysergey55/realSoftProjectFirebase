import * as React from 'react'
import styles from './styles.module.scss'
import MapComponent from 'components/MapComponent'

const MapPage = () => {
  return (
    <>
      <MapComponent currentPos={true} />
    </>
  )
}

export default MapPage
