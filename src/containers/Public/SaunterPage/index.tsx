import React from 'react'
import { observer } from 'mobx-react'
import SounterHeader from './SounterHeader'
import SounterComponent from './SounterComponent'

const SaunterPage = observer(() => {
  return (
    <>
      <SounterHeader />
      <SounterComponent />
    </>
  )
})

export default SaunterPage
