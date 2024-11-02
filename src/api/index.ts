import axios from 'axios'

const baseUrl = import.meta.env.VITE_APP_API_HOST

export default {
  send: async (forename: string, surname: string, email: string, message: string) => {
    const res = await axios.post(`${baseUrl}email`, {
      forename: forename,
      surname: surname,
      email: email,
      message: message
    })

    return res
  }
}
