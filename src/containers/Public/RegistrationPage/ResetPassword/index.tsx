import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { paths } from 'utils/routePath'
import { sendPasswordResetEmail } from 'utils/Firebase'
import { Form, Input, Button } from 'antd'
import styles from './styles.module.scss'
// import { toJS } from 'mobx'

const ResetPassword = () => {
  const [form] = Form.useForm()
  const history = useHistory()
  const [userEmail, setUserEmail] = useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setUserEmail(value)
  }
  const onFinish = () => {
    resetPasswordResponce()
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  const resetPasswordResponce = () => {
    sendPasswordResetEmail(userEmail)
    history.push(paths.home)
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
        <Form
          form={form}
          name="ResetPassvorfForm"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Enter your Email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input
              name="email"
              value={userEmail}
              placeholder="Enter email to reset password"
              onChange={e => onChange(e)}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Reset password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default ResetPassword
