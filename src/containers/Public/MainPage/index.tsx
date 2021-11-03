import React from 'react'
import Header from 'components/Header'
import MapComponent from 'components/MapComponent'

const MainPage = () => {
  return (
    <>
      <Header />
      <MapComponent currentPos={true} />
    </>
  )
}

export default MainPage
