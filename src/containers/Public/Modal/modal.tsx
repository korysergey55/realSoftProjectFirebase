import React from 'react'
import styles from './styles.module.scss'
import { Modal } from 'antd'
import { useStore } from 'stores'

const ModalComponent: React.FC<any> = ({ visible, children }: any) => {
  const { sounterState } = useStore()

  const handleOk = () => {
    sounterState.setModal()
  }
  const handleCancel = () => {
    sounterState.setModal()
  }

  return (
    <>
      <Modal
        title="Add new path"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        className={styles.modal}
        width="1110px"
      >
        {children}
      </Modal>
    </>
  )
}

export default ModalComponent
