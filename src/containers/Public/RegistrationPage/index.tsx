import React, { useState } from 'react'
import { useStore } from 'stores'
import { useHistory } from 'react-router'
import { paths } from 'utils/routePath'
import {
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from 'utils/Firebase/Firebase'
import { Form, Input, Button, Checkbox } from 'antd'
import styles from './styles.module.scss'
// import { toJS } from 'mobx'

interface IformData {
  name?: string
  email?: string
  password?: string
}

const RegistrationPage = () => {
  const { authAPI } = useStore()
  const history = useHistory()
  const [form] = Form.useForm()
  const [login, setLogin] = useState<boolean>(false)
  const [formData, setFormData] = useState<IformData>({
    name: '',
    email: '',
    password: '',
  })

  const setUser = async () => {
    if (login) {
      const res: any = await signInWithEmailAndPassword(
        formData.email,
        formData.password
      )
      if (res) {
        authAPI.setAccessTokenAPI(true)
        authAPI.setUserAPI(res.user)
        history.push(paths.sounter)
      }
    } else {
      await registerWithEmailAndPassword(
        formData.name,
        formData.email,
        formData.password
      )
    }
  }

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = evt.target
    setFormData((prev: any) => ({ ...prev, [name]: value }))
  }

  const onFinish = () => {
    setUser()
    setLogin(true)
    form.setFieldsValue({
      name: '',
      email: '',
      password: '',
    })
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.title}
        type="button"
        onClick={() => history.push(paths.home)}
      >
        Sounter <p className={styles.subtitle}> create own routes</p>
      </button>
      <div className={styles.formContainer}>
        <div className={styles.buttonContainer}>
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
        </div>
        <Form
          form={form}
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
              <Input
                name="name"
                value={formData.name}
                onChange={e => onChange(e)}
              />
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
          {login && (
            <button
              className={styles.buttonResetPassword}
              type="button"
              onClick={() => {
                history.push(paths.resetPassword)
              }}
            >
              Forgot Password
            </button>
          )}

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
