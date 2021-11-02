import React from 'react'
import styles from './styles.module.scss'
import Load from 'react-loader-spinner'

const Loader: React.FC = () => {
  return (
    <>
      <div className={styles.loader}>
        <Load
          type="Circles"
          color="#227fcb"
          height={80}
          width={80}
          timeout={3000}
        />
        <h2 className={styles.loadingText}>...Loading</h2>
      </div>
    </>
  )
}

export default Loader
