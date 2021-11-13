import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { useStore } from 'stores'
import { reedUserPathDatabase } from 'utils/Firebase/Firebase'
import SounterHeader from './SounterHeader'
import SounterComponent from './SounterComponent'

const SaunterPage = observer(() => {
  const { authAPI } = useStore()
  useEffect(() => {
    if (authAPI.user) {
      reedUserPathDatabase(authAPI.user.uid)
    }
  }, [authAPI])
  return (
    <>
      <SounterHeader />
      <SounterComponent />
    </>
  )
})

export default SaunterPage
