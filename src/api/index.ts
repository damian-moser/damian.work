import axios from 'axios'

const baseUrl = 'http://localhost:8080/api/'

export default {
  send: async (forename: string, surname: string, email: string, message: string) => {
    axios.post(
      `${baseUrl}email`,
      {
        forename: forename,
        surname: surname,
        email: email,
        message: message
      },
      {
        withCredentials: true
      }
    )
  }
}
