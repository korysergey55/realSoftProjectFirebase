import React from 'react'
import { useStore } from 'stores'
import { useHistory } from 'react-router'
import { observer } from 'mobx-react'
import { paths } from 'utils/routePath'
import ModalComponent from 'containers/Public/Modal'
import PathFormComponent from 'containers/Public/SaunterPage/PathFormComponent'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons'
// import { toJS } from 'mobx'

const SounterHeader = observer(() => {
  const { sounterStore } = useStore()
  const history = useHistory()

  const addPath = () => {
    sounterStore.setModal()
  }
  return (
    <div className={styles.container}>
      <ModalComponent visible={sounterStore.modal}>
        <PathFormComponent />
      </ModalComponent>
      <button
        className={styles.button}
        type="button"
        onClick={() => history.push(paths.home)}
      >
        <FontAwesomeIcon
          icon={faArrowsAlt}
          color=" rgb(0, 110, 255)"
          size="2x"
        />
        <h2 className={styles.title}>Sounter</h2>
      </button>
      <button type="button" className={styles.buttonAddPath} onClick={addPath}>
        AddPath
      </button>
    </div>
  )
})

export default SounterHeader
