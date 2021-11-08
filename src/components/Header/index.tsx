import React from 'react'
import { useStore } from 'stores'
import { observer } from 'mobx-react'
import { useHistory } from 'react-router'
import { paths } from 'utils/routePath'
import { signInWithGoogle, signInWithFacebook, logout } from 'utils/Firebase'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
// import { toJS } from 'mobx'

const Header = observer(() => {
  const { authAPI } = useStore()
  const history = useHistory()

  const loginAuth = async (e: any) => {
    if (e.currentTarget.name === 'google') {
      const res: any = await signInWithGoogle()
      if (res) {
        authAPI.setAccessTokenAPI(res.credential.accessToken)
        authAPI.setUserAPI(res.user)
        history.push(paths.sounter)
      }
    }
    if (e.currentTarget.name === 'facebook') {
      const res: any = await signInWithFacebook()
      if (res) {
        authAPI.setAccessTokenAPI(res)
        history.push(paths.sounter)
      }
    }
  }

  const logoutAuth = () => {
    logout()
    authAPI.setAccessTokenAPI(null)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.itemTitle}>
            <button
              className={styles.title}
              onClick={() => history.push(paths.sounter)}
            >
              Sounter <p className={styles.subtitle}> create own routes</p>
            </button>
          </li>
          {!authAPI.accessToken ? (
            <>
              <li className={styles.item}>
                <p className={styles.text}>Login with:</p>
                <button
                  className={styles.loginBtn}
                  type="button"
                  name="google"
                  onClick={e => loginAuth(e)}
                >
                  <FontAwesomeIcon icon={faGoogle} color="white" size="2x" />
                </button>
              </li>
              <li className={styles.item}>
                <p className={styles.text}></p>
                <button
                  className={styles.loginBtn}
                  type="button"
                  name="facebook"
                  onClick={e => loginAuth(e)}
                >
                  <FontAwesomeIcon icon={faFacebookF} color="white" size="2x" />
                </button>
              </li>
              <li className={styles.item}>
                <p className={styles.text}></p>
                <button
                  className={styles.loginBtn}
                  type="button"
                  name="email"
                  onClick={() => {
                    history.push('/registration')
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} color="white" size="2x" />
                </button>
              </li>
            </>
          ) : null}
          {authAPI.accessToken ? (
            <li className={styles.item}>
              <p className={styles.text}>Logout</p>
              <button
                className={styles.loginBtn}
                type="button"
                name="facebook"
                onClick={logoutAuth}
              >
                <FontAwesomeIcon icon={faSignOutAlt} color="white" size="2x" />
              </button>
            </li>
          ) : null}
        </ul>
      </div>
    </header>
  )
})

export default Header
