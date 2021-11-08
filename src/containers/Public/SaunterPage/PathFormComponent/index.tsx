import React, { useEffect, useState } from 'react'
import { useStore } from 'stores'
import { observer } from 'mobx-react'
import { IInputValue, ICompletedPath } from 'models/index'
import { writeUserPathDatabase, updateUserPathDatabase } from 'utils/Firebase'
import { Form, Input, Button, Row } from 'antd'
import MapComponentMemo from 'components/MapComponentMemo'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faCheck } from '@fortawesome/free-solid-svg-icons'
import { toJS } from 'mobx'

const { v4: uuidv4 } = require('uuid')
const maxLength = 160

const PathFormComponent = observer(() => {
  const { sounterStore, authAPI } = useStore()
  const { distance, userArrMarkers } = sounterStore
  const [inputValue, setInputValue] = useState<IInputValue>({
    title: '',
    shortDescription: '',
    fullDescription: '',
    id: null,
  })
  const [completedPath, setCompletedPath] = useState<ICompletedPath>({
    title: '',
    shortDescription: '',
    fullDescription: '',
    id: null,
    distance: 0,
    favorite: false,
    markersArr: null,
  })

  useEffect(() => {
    const createCompletedPath = () => {
      const completedObject = {
        ...inputValue,
        id: uuidv4(),
        distance,
        markersArr: toJS(userArrMarkers),
      }
      setCompletedPath(completedObject)
    }
    createCompletedPath()
  }, [inputValue, distance, userArrMarkers])

  const onChangeInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setInputValue((prev: any) => ({ ...prev, [name]: value }))
  }

  const getResetForm = () => {
    setInputValue({
      title: '',
      shortDescription: '',
      fullDescription: '',
      id: null,
    })
    sounterStore.setDistance(0)
    sounterStore.setItem(null)
    sounterStore.setModal()
  }

  const onFinish = () => {
    sounterStore.addUserPath(completedPath)
    if (authAPI.user) {
      const allStorePaths = sounterStore.userPath
      const userId = authAPI.user?.uid
      writeUserPathDatabase(allStorePaths, userId)
    }
    // if (authAPI.user) {
    //   const userId = authAPI.user?.uid
    //   updateUserPathDatabase(completedPath, userId)
    // }

    getResetForm()
  }

  const convertorKm = (item: number) => {
    const result = (item / 1000).toFixed(1)
    return result
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Form
          name="pathForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Title"
            className={styles.label}
            rules={[{ required: true, message: 'Please enter title' }]}
          ></Form.Item>
          <Input
            name="title"
            value={inputValue.title}
            placeholder="Text input"
            className={styles.input}
            onChange={e => onChangeInput(e)}
            minLength={5}
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
            onChange={e => onChangeInput(e)}
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
            onChange={e => onChangeInput(e)}
          />
          <div className={styles.lengthContainer}>
            <FontAwesomeIcon icon={faMapMarkedAlt} color="grey" size="2x" />
            <p className={styles.length}>
              Length {convertorKm(sounterStore.distance)} km
            </p>
          </div>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.buttonAddPath}
            >
              <FontAwesomeIcon
                icon={faCheck}
                color="white"
                size="1x"
                className={styles.btnIcon}
              />
              Add path
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className={styles.rigthSide}>
        <MapComponentMemo button={true} click={true} currentPos={true} />
      </div>
    </div>
  )
})

export default PathFormComponent
