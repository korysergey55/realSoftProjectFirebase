import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Input } from 'antd'
const { Search } = Input

const Filter = () => {
  const [filterValue, setFilterValue] = useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFilterValue(value)
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
}

export default Filter
