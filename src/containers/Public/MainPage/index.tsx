import React from 'react'
import Header from 'components/Header'
import MapComponentMemo from 'components/MapComponentMemo'

const MainPage = () => {
  return (
    <div>
      <Header />
      <MapComponentMemo currentPos={true} />
    </div>
  )
}

export default MainPage
