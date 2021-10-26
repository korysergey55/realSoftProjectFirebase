import * as React from 'react'
import styles from './styles.module.scss'
import MapComponent from 'components/MapComponent'
import Filter from '../Filter'
import SounterList from '../SounterList'
import { listItems } from 'sources/items'
import { useStore } from 'stores'
import { observer } from 'mobx-react'

const SounterComponent = observer(() => {
  const { sounterState } = useStore()
  const { item } = sounterState

  const addToFavorites = () => {
    console.log('AddToFavorites')
  }
  const removePath = () => {
    console.log('removePath')
  }
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Filter />
        <ul className={styles.list}>
          {listItems.map(item => (
            <SounterList item={item} key={item.id} />
          ))}
        </ul>
      </div>
      <div className={styles.rigthSide}>
        {item ? (
          <>
            <div className={styles.pathContainer}>
              <div className={styles.pathWripper}>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.distance}>{item.distance}km</p>
              </div>
              <p className={styles.text}>{item.shortDescription}</p>
            </div>
            <MapComponent />
            <button
              className={styles.buttonAddToFavorites}
              type="button"
              onClick={addToFavorites}
            >
              Add to favorites
            </button>
            <button
              className={styles.buttonRemove}
              type="button"
              onClick={removePath}
            >
              Remove
            </button>
          </>
        ) : null}
      </div>
    </div>
  )
})

export default SounterComponent
