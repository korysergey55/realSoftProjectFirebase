import React from 'react'
import MapComponent from 'components/MapComponent'
import { observer } from 'mobx-react'

const MapPage = observer(() => {
  return (
    <>
      <MapComponent currentPos={true} />
    </>
  )
})

export default MapPage
