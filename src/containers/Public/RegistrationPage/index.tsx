import React, { useState, useEffect } from 'react'
import { useStore } from 'stores'
import { useHistory } from 'react-router'
import {
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from 'utils/Firebase'
import { Form, Input, Button, Checkbox } from 'antd'
import styles from './styles.module.scss'
// import { toJS } from 'mobx'

const RegistrationPage = () => {
  const { authAPI } = useStore()
  const history = useHistory()
  const [login, setLogin] = useState<boolean>(false)
  const [formData, setFormData] = useState<any>({
    name: '',
    email: '',
    password: '',
  })
  const [completedForm, setCompletedForm] = useState<any>({
    name: '',
    email: '',
    password: '',
  })

  useEffect(() => {
    const setUser = async () => {
      if (login) {
        const res: any = await signInWithEmailAndPassword(
          completedForm.email,
          completedForm.password
        )
        if (res) {
          authAPI.setAccessTokenAPI(res)
          history.push('/sounter')
        }
      } else {
        const res: any = await registerWithEmailAndPassword(
          completedForm.name,
          completedForm.email,
          completedForm.password
        )
        if (res) {
          console.log('res-registerWithEmailAndPassword', res)
        }
      }
    }
    setUser()
  }, [completedForm])

  const onChange = (evt: any) => {
    const { value, name } = evt.target
    setFormData((prev: any) => ({ ...prev, [name]: value }))
  }
  const onFinish = (values: any) => {
    // const { name, email, password } = values
    setCompletedForm(formData)
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className={styles.container}>
      <a className={styles.title} href="/home">
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
          {!login && (
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your Name!' }]}
            >
              <Input name="name" value={formData.name} onChange={onChange} />
            </Form.Item>
          )}
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input name="email" value={formData.email} onChange={onChange} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              name="password"
              value={formData.password}
              onChange={onChange}
            />
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
