import React from 'react'
import SounterHeader from './SounterHeader'
import SounterComponent from './SounterComponent'
import { observer } from 'mobx-react'

const SaunterPage = observer(() => {
  return (
    <>
      <SounterHeader />
      <SounterComponent />
    </>
  )
})

export default SaunterPage
