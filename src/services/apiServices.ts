import axios from "axios";

const BASE_URL = 'https://randomuser.me/api/';

const apiServices = axios.create({
  baseURL: BASE_URL,
  headers: {
        'Content-Type' : 'application/json'
  },
})

export const fetchData = async (endpoint:any) => {
  try {
      const response = await apiServices.get(endpoint);
      return response.data;
  } catch(error) {
      throw error;
  }
}