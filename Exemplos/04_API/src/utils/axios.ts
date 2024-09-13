import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.github.com/users/rafaelkasper/",
  timeout: 1000,
  /*
  // Token de autenticação em api's fechadas
  headers: {
    Authorization: `Bearer: fdsaf5afafa54f8d8484f5a26df1a88`,
  },
  */
});
