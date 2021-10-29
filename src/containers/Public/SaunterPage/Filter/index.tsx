import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Input } from 'antd'
import { useStore } from 'stores'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
const { Search } = Input

const Filter = observer(() => {
  const { sounterStore } = useStore()

  const [filterValue, setFilterValue] = useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFilterValue(value)
    sounterStore.getFilterUserPath(value)
  }

  return (
    <>
      <Search
        placeholder="Search..."
        allowClear={true}
        size="large"
        className={styles.input}
        name="filter"
        value={filterValue}
        onChange={onChange}
      />
    </>
  )
})

export default Filter
