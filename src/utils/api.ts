import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://realsoftproject-5d44c-default-rtdb.firebaseio.com/',
})
