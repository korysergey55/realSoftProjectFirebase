import firebase from 'firebase'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import sauntrStore from 'stores/saunter'

let configKorySergey = {
  apiKey: process.env.REACT_APP_WEB_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  OAuth: process.env.REACT_APP_OAUTH,
}
// let configRealSoft = {
//   apiKey: 'AIzaSyDwpUrScZfWnJtvC1bA3j1iF14-ZE-ff-U',
//   authDomain: 'realsoftproject-5d44c.firebaseapp.com',
//   databaseURL: 'https://realsoftproject-5d44c-default-rtdb.firebaseio.com/',
//   projectId: 'realsoftproject-5d44c',
//   OAuth: 'https://realsoftproject-5d44c.firebaseapp.com/__/auth/handler',
// }
const app = firebase.initializeApp(configKorySergey)
const auth = app.auth()
const db = app.firestore()
auth.languageCode = 'en'
const googleProvider = new firebase.auth.GoogleAuthProvider()
const facebookProvider = new firebase.auth.FacebookAuthProvider()

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider)
    if (res) {
      toast.success('You was successfully Login!', {
        theme: 'colored',
      })
    }
    return res
  } catch (err) {
    console.error(err)
    toast.error(`${err.message}`, {
      theme: 'colored',
    })
  }
}
const signInWithFacebook = async () => {
  try {
    const res = await auth.signInWithPopup(facebookProvider)
    return res
  } catch (err) {
    console.error(err)
    toast.error(`${err.message}`, {
      theme: 'colored',
    })
  }
}
const signInWithEmailAndPassword = async (email, password) => {
  try {
    const res = await auth.signInWithEmailAndPassword(email, password)
    if (res) {
      toast.success('You was successfully Login!', {
        theme: 'colored',
      })
    }
    return res
  } catch (err) {
    console.error(err)
    toast.error(`${err.message}`, {
      theme: 'colored',
    })
  }
}
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password)
    if (res) {
      toast.success('You was successfully registered. Login please!', {
        theme: 'colored',
      })
    }
    const user = res.user
    await db.collection('users').add({
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    })
  } catch (err) {
    console.error(err)
    toast.error(`${err.message}`, {
      theme: 'colored',
    })
  }
}
const sendPasswordResetEmail = async email => {
  try {
    const res = await auth.sendPasswordResetEmail(email)
    toast('Password reset link sent! Check your email!', {
      theme: 'colored',
    })
  } catch (err) {
    console.error(err)
    toast.error(`${err.message}`, {
      theme: 'colored',
    })
  }
}

const logout = () => {
  auth.signOut()
  toast.success('signOut success!', {
    theme: 'colored',
  })
}

const writeUserPathDatabase = (path, userId) => {
  firebase
    .database()
    .ref('users/' + userId)
    .set(path)
  toast.success('Path added to database!', {
    theme: 'colored',
  })
}

const reedUserPathDatabase = postId => {
  const userPathRef = firebase.database().ref('users/' + postId)
  userPathRef.on('value', snapshot => {
    const data = snapshot.val()
    if (data) {
      sauntrStore.setUserPath(data)
    }
  })
}

export {
  auth,
  db,
  signInWithGoogle,
  logout,
  signInWithFacebook,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  writeUserPathDatabase,
  reedUserPathDatabase,
}
