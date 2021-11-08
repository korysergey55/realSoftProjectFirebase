import React, { useState } from 'react'
import { useStore } from 'stores'
import { observer } from 'mobx-react'
import { IPrint } from 'models/index'
import Item from './Item'
import styles from './styles.module.scss'
// import { toJS } from 'mobx'
const { v4: uuidv4 } = require('uuid')

const PrintInputPage = observer(() => {
  const { inputsStore } = useStore()
  const { inputs } = inputsStore
  const [inputsQantity, setInputsQantity] = useState<number>(0)

  const onChangeQantity = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target
    setInputsQantity(Number(value))
  }

  const onSubmit = () => {
    let inputArrey: IPrint[] = []
    for (let i = 0; i < inputsQantity; i += 1) {
      inputArrey.push({ id: uuidv4(), value: '' })
    }
    inputsStore.setInputs(inputArrey)
  }

  const onChange = (value: string, index: number) => {
    const arr = inputs
    arr[index] = {
      ...arr[index],
      value,
    }
    inputsStore.setInputs(arr)
  }
  return (
    <div className={styles.container}>
      <button className={styles.button} type="button" onClick={onSubmit}>
        PrintInput
      </button>
      <input
        className={styles.qantity}
        type="number"
        min="0"
        value={inputsQantity}
        onChange={e => onChangeQantity(e)}
      />
      {inputs?.map((item, index: number) => (
        <Item key={item.id} item={item} index={index} onChange={onChange} />
      ))}
    </div>
  )
})

export default PrintInputPage
