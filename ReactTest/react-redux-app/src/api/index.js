import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/posts";
export const getPosts = () => axios.get(url);
export const postData = (data) => axios.post(url, data);
