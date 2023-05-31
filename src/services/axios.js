import Axios from "axios";

export const API_BASE_URL= "https://dummyjson.com";
const axios = Axios.create({ baseURL: API_BASE_URL });

export default axios;
