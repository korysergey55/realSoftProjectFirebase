import * as React from 'react'
import IList from 'models/index'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const SounterList: React.FC<IList> = ({ title, text, distance }) => {
  const GetDirections = () => {
    console.log('GetDirections')
  }
  return (
    <li className={styles.item}>
      <FontAwesomeIcon
        icon={faArrowsAlt}
        color="grey"
        size="2x"
        className={styles.icon}
      />
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
      <p className={styles.distance}>{distance}</p>
      <button
        type="button"
        className={styles.buttonGetDirections}
        onClick={GetDirections}
      >
        <FontAwesomeIcon icon={faArrowRight} color="grey" size="2x" />
      </button>
    </li>
  )
}

export default SounterList
