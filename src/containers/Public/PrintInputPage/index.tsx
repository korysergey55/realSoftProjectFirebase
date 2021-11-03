import React, { useMemo, useState } from 'react'
import { useStore } from 'stores'
import { observer } from 'mobx-react'
import styles from './styles.module.scss'

const { v4: uuidv4 } = require('uuid')

const PrintInputPage = observer(() => {
  const { inputsStore } = useStore()
  const [inputs, setInputs] = useState<object[]>([])
  const [inputsValues, setInputsValues] = useState<object[]>([])
  const [inputsQantity, setInputsQantity] = useState<number>(0)
  const [qantity, setQantity] = useState<number>(0)

  const onChangeQantity = (evt: any) => {
    const { value } = evt.target
    setInputsQantity(value)
  }

  const onChange = (evt: any) => {
    const { value, name } = evt.target
    setInputsValues((prev: any) => [
      ...prev.filter((item: any) => !item[name]),
      { [name]: value },
    ])
    inputsStore.setInputs(inputsValues)
  }
  const submitQantity = () => {
    setQantity(inputsQantity)
  }

  const printInputs = useMemo(() => {
    let inputArrey: object[] = []
    for (let i = 0; i < qantity; i += 1) {
      inputArrey.push({ value: i, id: uuidv4() })
    }
    setInputs(inputArrey)
  }, [qantity])

  return (
    <div className={styles.container}>
      <button className={styles.button} type="button" onClick={submitQantity}>
        PrintInput
      </button>
      <input
        className={styles.qantity}
        type="number"
        min="0"
        onChange={onChangeQantity}
      />
      {inputs &&
        inputs.map((item: any, index: number) => (
          <label className={styles.label} key={index}>
            {index}
            <input
              className={styles.input}
              name={item.id}
              onChange={onChange}
              key={index}
            />
          </label>
        ))}
    </div>
  )
})

export default PrintInputPage
