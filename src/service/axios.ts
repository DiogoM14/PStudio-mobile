import axios from "axios";

export const api = axios.create({
  baseURL: "https://pelourinhostudio.herokuapp.com/",
})