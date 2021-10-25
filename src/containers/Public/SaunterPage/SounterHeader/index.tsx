import * as React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons'

const SounterHeader = () => {
  const addPath = () => {
    console.log('addpath')
  }
  return (
    <div className={styles.container}>
      <div>
        <FontAwesomeIcon icon={faArrowsAlt} color="grey" size="2x" />
        <h2 className={styles.title}>Sounter</h2>
      </div>
      <button type="button" className={styles.buttonAddPath} onClick={addPath}>
        AddPath
      </button>
    </div>
  )
}

export default SounterHeader
