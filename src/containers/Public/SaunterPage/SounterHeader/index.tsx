import React from 'react'
import { useStore } from 'stores'
import { observer } from 'mobx-react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import ModalComponent from 'containers/Public/Modal/modal'
import PathFormComponent from 'containers/Public/PathFormComponent'
import { toJS } from 'mobx'

const SounterHeader = observer(() => {
  const { sounterStore } = useStore()

  const addPath = () => {
    sounterStore.setModal()
  }
  return (
    <div className={styles.container}>
      <ModalComponent visible={sounterStore.modal}>
        <PathFormComponent />
      </ModalComponent>
      <div>
        <FontAwesomeIcon icon={faArrowsAlt} color="grey" size="2x" />
        <h2 className={styles.title}>Sounter</h2>
      </div>
      <button type="button" className={styles.buttonAddPath} onClick={addPath}>
        AddPath
      </button>
    </div>
  )
})

export default SounterHeader
