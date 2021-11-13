import React from 'react'
import Header from 'components/Header'
import MapComponentMemo from 'components/MapComponentMemo'

const MainPage = () => {
  return (
    <div>
      <Header />
      <MapComponentMemo currentPos={false} mark={false} />
    </div>
  )
}

export default MainPage
