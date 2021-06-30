import axios from "axios";

export const API = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/random.php",
});
