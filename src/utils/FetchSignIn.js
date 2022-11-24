import axios from "axios";
import Cookies from 'js-cookie'
import jwt_decode from "jwt-decode";

export async function FetchSignIn(login, password) {
  try {
      const { data } = await axios.post('http://localhost:5000/auth/login', {email: login, password: password})
      Cookies.set('token', data.token)
      const user = jwt_decode(data.token)
      console.log(user)
      Cookies.set('email', user.email)
  } catch (error) {
      console.log(error)
  }
}