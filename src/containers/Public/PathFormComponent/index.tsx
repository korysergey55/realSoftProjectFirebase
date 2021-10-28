import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { useStore } from 'stores'
import { Form, Input, Button, Row } from 'antd'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import MapComponent from 'components/MapComponent/index'
const { v4: uuidv4 } = require('uuid')

const initialInputState = {
  title: '',
  shortDescription: '',
  fullDescription: '',
  id: null,
}
const initialPathState = {
  title: '',
  shortDescription: '',
  fullDescription: '',
  id: null,
  distance: 0,
}
const maxLength = 160

const PathFormComponent = observer(() => {
  const { sounterStore } = useStore()
  const { distance } = sounterStore

  const [inputValue, setInputValue] = useState<any>({ ...initialInputState })
  const [completedPath, setCompletedPath] = useState<any>({
    ...initialPathState,
  })

  useEffect(() => {
    const inputObjectWithInputIdDistance = {
      ...inputValue,
      id: uuidv4(),
      distance,
    }
    setCompletedPath(inputObjectWithInputIdDistance)
  }, [inputValue, distance])
  console.log('completedPath', completedPath)

  const onChangeInput = (e: any) => {
    const { name, value } = e.target
    setInputValue((prev: any) => ({ ...prev, [name]: value }))
  }
  const onFinish = () => {
    sounterStore.setUserPath(completedPath)
    sounterStore.setModal()
  }
  // console.log('inputValue', inputValue)
  // console.log('sounterState.path', toJS(sounterState.path))

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <Form name="pathForm" onFinish={onFinish}>
            <Form.Item label="Title" className={styles.label}></Form.Item>
            <Input
              name="title"
              value={inputValue.title}
              placeholder="Text input"
              className={styles.input}
              onChange={onChangeInput}
            />
            <Form.Item
              label="Short description"
              className={styles.label}
            ></Form.Item>
            <Input.TextArea
              name="shortDescription"
              value={inputValue.shortDescription}
              placeholder="Text area"
              className={styles.input}
              maxLength={maxLength}
              onChange={onChangeInput}
            />
            <Row
              align="middle"
              justify="end"
            >{`Limit ${inputValue.shortDescription.length} of ${maxLength}`}</Row>
            <Form.Item
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
              <p className={styles.length}>Length {sounterStore.distance}</p>
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
          <MapComponent button={true} click={true} />
        </div>
      </div>
    </>
  )
})

export default PathFormComponent
