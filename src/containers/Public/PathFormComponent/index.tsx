import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { useStore } from 'stores'
import { Form, Input, Button } from 'antd'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import MapComponent from 'components/MapComponent/index'
const { v4: uuidv4 } = require('uuid')

const initialState = {
  title: '',
  shortDescription: '',
  fullDescription: '',
  id: null,
}

const PathFormComponent = observer(() => {
  const { sounterState } = useStore()
  const [inputValue, setInputValue] = useState<any>({ ...initialState })
  const [completedPath, setCompleterPath] = useState<any>(null)

  useEffect(() => {
    const inputObjectWithId = { ...inputValue, id: uuidv4() }
    setCompleterPath(inputObjectWithId)
  }, [inputValue])

  const onChangeInput = (e: any) => {
    const { name, value } = e.target
    setInputValue((prev: any) => ({ ...prev, [name]: value }))
  }
  const onFinish = () => {
    sounterState.setPath(completedPath)
    sounterState.setModal()
  }
  console.log('inputValue', inputValue)
  console.log('sounterState.path', toJS(sounterState.path))

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <Form name="pathForm" onFinish={onFinish}>
            <Form.Item
              name="labelTitle"
              label="Title"
              className={styles.label}
            ></Form.Item>
            <Input
              name="title"
              value={inputValue.title}
              placeholder="Text input"
              className={styles.input}
              onChange={onChangeInput}
            />
            <Form.Item
              name="shortDescription"
              label="Short description"
              className={styles.label}
            ></Form.Item>
            <Input.TextArea
              name="shortDescription"
              value={inputValue.shortDescription}
              placeholder="Text area"
              className={styles.input}
              maxLength={160}
              showCount={{
                formatter: ({ count, maxLength }) =>
                  `Limit ${count} of ${maxLength}`,
              }}
              onChange={onChangeInput}
            />
            <Form.Item
              name="fullDescription"
              label="Full description"
              className={styles.label}
            ></Form.Item>
            <Input.TextArea
              name="fullDescription"
              value={inputValue.fullDescription}
              placeholder="Text area"
              className={styles.inputFullDescription}
              onChange={onChangeInput}
            />
            <div className={styles.lengthContainer}>
              <FontAwesomeIcon icon={faMapMarkedAlt} color="grey" size="2x" />
              <p className={styles.length}>Length 1.13km</p>
            </div>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.buttonAddPath}
              >
                <FontAwesomeIcon
                  icon={faCheck}
                  color="grey"
                  size="1x"
                  className={styles.btnIcon}
                />
                Add path
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className={styles.rigthSide}>
          <MapComponent button={true} />
        </div>
      </div>
    </>
  )
})

export default PathFormComponent
