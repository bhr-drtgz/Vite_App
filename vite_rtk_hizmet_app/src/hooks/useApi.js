import axios from "axios";

export default function useApi() {
    axios.defaults.baseURL = "https://api.adoptez1artisan.com"

    const token = localStorage.getItem("token")
    if(token){
        axios.defaults.headers.common={
            "Authorization": "Bearer " + token
        }
    }

    return axios
}