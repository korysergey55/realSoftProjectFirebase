import React from 'react'
import { useStore } from 'stores'
import { observer } from 'mobx-react'
import { Modal } from 'antd'
import styles from './styles.module.scss'

const ModalComponent: React.FC<any> = observer(({ visible, children }: any) => {
  const { sounterStore } = useStore()

  const handleOk = () => {
    sounterStore.setModal()
  }
  const handleCancel = () => {
    sounterStore.setModal()
  }

  return (
    <>
      <Modal
        title="Add new path"
        className={styles.modal}
        width="1110px"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {children}
      </Modal>
    </>
  )
})

export default ModalComponent
