import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import MapComponent from 'components/MapComponent'
import Filter from '../Filter'
import SounterList from '../SounterList'
import { useStore } from 'stores'
import { observer } from 'mobx-react'

const SounterComponent = observer(() => {
  const { sounterStore } = useStore()
  const { item, filteredUserPath } = sounterStore

  useEffect(() => {}, [sounterStore])

  const addToFavorites = () => {
    sounterStore.setFavorite()
  }
  const removePath = (id: any) => {
    sounterStore.removeUserPath(id)
    sounterStore.setItem(null)
  }
  const convertor = (item: any) => {
    const result = (item / 1000).toFixed(1)
    return result
  }

  // filteredUserPath
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Filter />
        <ul className={styles.list}>
          {filteredUserPath.length > 0 ? (
            filteredUserPath.map(item => (
              <SounterList item={item} key={item.id} />
            ))
          ) : (
            <h2 className={styles.notPathYet}>Not Path yet!</h2>
          )}
        </ul>
      </div>
      <div className={styles.rigthSide}>
        {item ? (
          <>
            <div className={styles.pathContainer}>
              <div className={styles.pathWripper}>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.distance}>{convertor(item.distance)} km</p>
              </div>
              <p className={styles.text}>{item.shortDescription}</p>
            </div>
            <MapComponent key={item.id} pathMarkers={item.markersArr} />
            <button
              className={styles.buttonAddToFavorites}
              type="button"
              onClick={addToFavorites}
            >
              {!item.favorite ? 'Add to favorites' : 'Remuve from favorites'}
            </button>
            <button
              className={styles.buttonRemove}
              type="button"
              onClick={() => removePath(item.id)}
            >
              Remove
            </button>
          </>
        ) : (
          <h2 className={styles.notPathYet}>
            Add Path to see Map and Directions!
          </h2>
        )}
      </div>
    </div>
  )
})

export default SounterComponent
