import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { Form, Input, Button, Checkbox } from 'antd'
import { useStore } from 'stores'
import {
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from 'utils/firebase'
import { toJS } from 'mobx'
import { useHistory } from 'react-router'

const RegistrationPage = () => {
  const { authAPI } = useStore()
  const history = useHistory()
  const [ligin, setLogin] = useState<boolean>(false)
  const [registration, setRegistration] = useState<boolean>(false)
  const [userForm, setUserForm] = useState<any>({
    name: '',
    email: '',
    password: '',
  })

  useEffect(() => {
    const setUser = async () => {
      if (ligin) {
        const res: any = await signInWithEmailAndPassword(
          userForm.email,
          userForm.password
        )
        if (res) {
          authAPI.setAccessTokenAPI(res)
          history.push('/sounter')
        }
      } else {
        const res: any = await registerWithEmailAndPassword(
          userForm.name,
          userForm.email,
          userForm.password
        )
        if (res) {
          console.log('res-registerWithEmailAndPassword', res)
        }
      }
    }
    setUser()
  }, [userForm])

  const onFinish = (values: any) => {
    const name = values.name
    const email = values.email
    const password = values.password
    setUserForm({ name, email, password })
  }
  console.log('userForm', toJS(userForm))

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className={styles.container}>
      <a className={styles.title} href="/">
        Sounter <p className={styles.subtitle}> create own routes</p>
      </a>
      <div className={styles.formContainer}>
        <button
          className={styles.buttonsChange}
          type="button"
          onClick={() => setLogin(false)}
        >
          Registration
        </button>
        <button
          className={styles.buttonsChange}
          type="button"
          onClick={() => setLogin(true)}
        >
          Login
        </button>
        <Form
          name="RegistrationLoginForm"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {!ligin && (
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your Name!' }]}
            >
              <Input />
            </Form.Item>
          )}
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default RegistrationPage
