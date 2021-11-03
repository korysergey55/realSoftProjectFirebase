import React from 'react'
import Header from 'components/Header'
import MapComponentMemo from 'components/MapComponentMemo'

const MainPage = () => {
  return (
    <>
      <Header />
      <MapComponentMemo currentPos={true} />
    </>
  )
}

export default MainPage
