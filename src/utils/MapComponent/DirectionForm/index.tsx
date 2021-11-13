import React, { useState } from 'react'
import styles from './styles.module.scss'

interface IProps {
  onSubmitBuildRoute: (
    travelMode: string,
    origin: string,
    destination: string
  ) => void
}

const DirectionServiseForm: React.FC<IProps> = ({ onSubmitBuildRoute }) => {
  const [travelMode, setTravelMode] = useState<string>('DRIVING')
  const [origin, setOrigin] = useState<string>('')
  const [destination, setDestination] = useState<string>('')

  const onChangeTravelMode = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = evt.target
    setTravelMode(name)
  }
  const onChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target
    if (name === 'ORIGIN') {
      setOrigin(value)
    }
    if (name === 'DESTINATION') {
      setDestination(value)
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <div className={styles.inputWripper}>
          <label className={styles.label} htmlFor="ORIGIN">
            Origin
          </label>
          <br />
          <input
            className={styles.input}
            name="ORIGIN"
            value={origin}
            type="text"
            placeholder="from..."
            onChange={onChangeInput}
          />
        </div>
        <div className={styles.inputWripper}>
          <label className={styles.label} htmlFor="DESTINATION">
            Destination
          </label>
          <br />
          <input
            className={styles.input}
            name="DESTINATION"
            value={destination}
            type="text"
            placeholder="to..."
            onChange={onChangeInput}
          />
        </div>
        <button
          className={styles.button}
          type="button"
          onClick={() => onSubmitBuildRoute(travelMode, origin, destination)}
        >
          Build Route
        </button>
      </div>

      <div className={styles.radioContainer}>
        <div className={styles.radioWripper}>
          <input
            className={styles.inputRadio}
            name="DRIVING"
            type="radio"
            checked={travelMode === 'DRIVING'}
            onChange={onChangeTravelMode}
          />
          <label className={styles.laberRadio} htmlFor="DRIVING">
            Driving
          </label>
        </div>

        <div className={styles.radioWripper}>
          <input
            className={styles.inputRadio}
            name="BICYCLING"
            type="radio"
            checked={travelMode === 'BICYCLING'}
            onChange={onChangeTravelMode}
          />
          <label className={styles.laberRadio} htmlFor="BICYCLING">
            Bicycling
          </label>
        </div>

        <div className={styles.radioWripper}>
          <input
            className={styles.inputRadio}
            name="TRANSIT"
            type="radio"
            checked={travelMode === 'TRANSIT'}
            onChange={onChangeTravelMode}
          />
          <label className={styles.laberRadio} htmlFor="TRANSIT">
            Transit
          </label>
        </div>

        <div className={styles.radioWripper}>
          <input
            className={styles.inputRadio}
            name="WALKING"
            type="radio"
            checked={travelMode === 'WALKING'}
            onChange={onChangeTravelMode}
          />
          <label className={styles.laberRadio} htmlFor="WALKING">
            Walking
          </label>
        </div>
      </div>
    </div>
  )
}

export default DirectionServiseForm
