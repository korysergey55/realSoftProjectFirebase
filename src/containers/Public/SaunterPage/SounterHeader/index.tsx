import * as React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import { useStore } from 'stores'
import { observer } from 'mobx-react'
import ModalComponent from 'containers/Public/Modal/modal'
import PathFormComponent from 'containers/Public/PathFormComponent'

const SounterHeader = observer(() => {
  const { sounterState } = useStore()

  const addPath = () => {
    sounterState.setModal()
  }
  return (
    <div className={styles.container}>
      <ModalComponent visible={sounterState.modal}>
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
