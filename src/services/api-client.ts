import axios from "axios";

export default axios.create({
    params: {
        key: '3a5373cf1d664e6da6959d167c11209c'
    },
    baseURL: 'https://api.rawg.io/api'
})