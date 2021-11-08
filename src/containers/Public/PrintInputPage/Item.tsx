import React from 'react'
import { IPrint } from 'models/index'
import styles from './styles.module.scss'

interface IProps {
  item: IPrint
  index: number
  onChange: (value: string, index: number) => void
}

const Item = ({ item, index, onChange }: IProps) => {
  return (
    <label className={styles.label} key={index}>
      {index}
      <input
        className={styles.input}
        name={item.id}
        value={item.value}
        onChange={e => onChange(e.target.value, index)}
      />
    </label>
  )
}

export default React.memo(
  Item,
  (prevProps, nextProps) => prevProps.item.value === nextProps.item.value
)
