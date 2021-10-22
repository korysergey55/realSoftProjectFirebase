import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyDwpUrScZfWnJtvC1bA3j1iF14-ZE-ff-U',
  authDomain: 'realsoftproject-5d44c.firebaseapp.com',
  databaseURL: 'https://realsoftproject-5d44c-default-rtdb.firebaseio.com/',
  projectId: 'realsoftproject-5d44c',
  OAuth: 'https://realsoftproject-5d44c.firebaseapp.com/__/auth/handler',
}
const app = firebase.initializeApp(config)
const auth = app.auth()
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

const logout = () => {
  auth.signOut()
}
export { auth, signInWithGoogle, logout, signInWithFacebook }
