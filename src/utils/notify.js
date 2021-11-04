import { store } from 'react-notifications-component'

const Notification = typeNotification => {
  if (typeNotification === 'success') {
    return store.addNotification({
      title: 'Wonderful!',
      message: 'Wonderful!',
      type: 'success',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 3000,
        onScreen: false,
      },
    })
  }

  if (typeNotification === 'loginSuccess') {
    return store.addNotification({
      title: 'Welcome',
      message: 'You was secsesful Login in',
      type: 'success',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 3000,
        onScreen: false,
      },
    })
  }
  if (typeNotification === 'registrationSuccess') {
    return store.addNotification({
      title: 'Welcome',
      message: 'You was secsesful Registratered! Login in please',
      type: 'success',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 3000,
        onScreen: false,
      },
    })
  }
  if (typeNotification === 'logoutSuccess') {
    return store.addNotification({
      title: 'Goodbay',
      message: 'You was secsesful Logout! See you next time',
      type: 'warning',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 4000,
        onScreen: false,
      },
    })
  }
  if (typeNotification === 'error') {
    return store.addNotification({
      title: 'Error!',
      message: 'Error',
      type: 'danger',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 3000,
        onScreen: false,
      },
    })
  }
  return
}
export default Notification
