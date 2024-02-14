import axios from "axios";

const apiUsers
    = axios.create({
        baseURL: "http://localhost:8000/api/v1/users",
        headers: {
            Accept: "application/json"
        }
    })

export default apiUsers
