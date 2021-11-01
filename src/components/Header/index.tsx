import React, { useEffect } from 'react'
import { useStore } from 'stores'
import { observer } from 'mobx-react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { signInWithGoogle, signInWithFacebook, logout } from 'utils/firebase'
import { useHistory } from 'react-router'
// import { toJS } from 'mobx'

const Header = observer(() => {
  const { authAPI } = useStore()
  const history = useHistory()

  useEffect(() => {
    if (authAPI.accessToken) {
      history.push('/sounter')
    }
  }, [authAPI.accessToken, history])

  const loginAuth = async (e: any) => {
    if (e.currentTarget.name === 'google') {
      const res: any = await signInWithGoogle()
      authAPI.setAccessTokenAPI(res.accessToken)
      authAPI.setAuthAPI(res)
    }
    if (e.currentTarget.name === 'facebook') {
      const res: any = await signInWithFacebook()
      authAPI.setAccessTokenAPI(res)
      authAPI.setAuthAPI(res)
    }
  }
  const logoutAuth = () => {
    console.log('logout')
    logout()
    authAPI.setAccessTokenAPI(null)
  }
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <ul className={styles.list}>
            {!authAPI.accessToken ? (
              <>
                <li className={styles.item}>
                  <p className={styles.text}>Logit with Google</p>
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
                  <p className={styles.text}>Logit with Facebook</p>
                  <button
                    className={styles.loginBtn}
                    type="button"
                    name="facebook"
                    onClick={e => loginAuth(e)}
                  >
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      color="white"
                      size="2x"
                    />
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
                  <FontAwesomeIcon icon={faCoffee} color="white" size="2x" />
                </button>
              </li>
            ) : null}
          </ul>
        </div>
      </header>
    </>
  )
})

export default Header
