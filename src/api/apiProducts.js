import axios from "axios";

const apiProducts
    = axios.create({
        baseURL: "http://localhost:8000/api/v1/products",
        headers: {
            Accept: "application/json"
        }
    })

export default apiProducts
