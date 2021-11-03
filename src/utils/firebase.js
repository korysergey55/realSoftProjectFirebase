import firebase from 'firebase'

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
    // console.log(res.credential)
    // console.log(res.user)
    return res.credential
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}
const signInWithFacebook = async () => {
  try {
    const res = await auth.signInWithPopup(facebookProvider)
    console.log(res)
    return res
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}
const signInWithEmailAndPassword = async (email, password) => {
  try {
    const res = await auth.signInWithEmailAndPassword(email, password)
    // console.log(res)
    return res
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}
const logout = () => {
  auth.signOut()
}
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password)
    const user = res.user
    await db.collection('users').add({
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    })
    return res
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}
export {
  auth,
  db,
  signInWithGoogle,
  logout,
  signInWithFacebook,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
}