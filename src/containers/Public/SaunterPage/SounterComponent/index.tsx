import React from 'react'
import { useStore } from 'stores'
import { observer } from 'mobx-react'
import { writeUserPathDatabase, remuveUserPathDatabase } from 'utils/Firebase'
import Filter from '../Filter'
import SounterList from '../SounterList'
import MapComponentMemo from 'components/MapComponentMemo'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import { toJS } from 'mobx'

const SounterComponent = observer(() => {
  const { sounterStore, authAPI } = useStore()
  const { item, filteredUserPath } = sounterStore

  const addToFavorites = () => {
    sounterStore.setFavorite()
  }
  const removePath = (id: string) => {
    sounterStore.removeUserPath(id)
    sounterStore.setItem(null)
    if (authAPI.user) {
      writeUserPathDatabase(sounterStore.userPath, authAPI.user?.uid)
    }
    // if (authAPI.user) {
    //   const userId = authAPI.user?.uid
    //   const pathId = sounterStore.userPath.find(item => item.id === id)
    //   remuveUserPathDatabase(pathId, userId)
    // }
  }
  const convertorKm = (distance: number) => {
    const result = (distance / 1000).toFixed(1)
    return result
  }

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
                <p className={styles.distance}>
                  {convertorKm(item.distance)} km
                </p>
              </div>
              <p className={styles.text}>{item.shortDescription}</p>
            </div>
            <MapComponentMemo key={item.id} />
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
          <>
            <FontAwesomeIcon
              icon={faArrowsAlt}
              color="rgb(31, 162, 250)"
              size="10x"
              className={styles.icon}
            />
            <h2 className={styles.notPathYet}>Select any path!</h2>
          </>
        )}
      </div>
    </div>
  )
})

export default SounterComponent
