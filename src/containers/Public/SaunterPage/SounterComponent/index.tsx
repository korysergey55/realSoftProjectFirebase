import * as React from 'react'
import styles from './styles.module.scss'
import MapComponent from 'components/MapComponent'
import SearchForm from '../SearchForm'
import SounterList from '../SounterList'
import { ListItems } from 'sources/items'

const SounterComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <SearchForm />
        <ul className={styles.list}>
          {console.log('ListItems', ListItems)}
          {ListItems.map(item => (
            <SounterList
              title={item.title}
              text={item.text}
              distance={item.distance}
              key={item.id}
            />
          ))}
        </ul>
      </div>
      <div className={styles.rigthSide}>
        <MapComponent />
      </div>
    </div>
  )
}

export default SounterComponent
