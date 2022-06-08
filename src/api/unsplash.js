import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: { Authorization: "Client-ID JQ7_fX-QpOyjVi-vnRq4fO9CQ9LQPFZNnaVVNnci5_U" }
})