import axios from "axios"
import { apiUri } from "@/config"
const getApi = async (url, data = {}) => {
  const response = await api.get(url, {
    params: data,
  })
  return response
}

const postApi = async (url, data, config = {}) => {
  return await api.post(url, data, config)
}

export const addReq = (data) => postApi(`/addSome`, data)
export const getReq = (data) => getApi(`/getSome`, data)

let apiBaseURL = apiUri
if (process.env.NODE_ENV === "development") {
  // apiBaseURL = "http://192.168.1.5:5000"
}

export const api = axios.default.create({
  timeout: 30000,
  baseURL: apiBaseURL,
  // withCredentials: true,
  // crossDomain: true,
})

api.interceptors.request.use(
  async (config) => {
    return config
  },
  (error) => {
    console.error("Request error:", error.message)
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (e) => {
    const responseData = e.data
    return responseData
  },
  (error) => {
    console.error("Response error:", error.message)
    return Promise.reject(error.response?.data)
  }
)
