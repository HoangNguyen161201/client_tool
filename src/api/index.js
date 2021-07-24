import axios from "axios";
const URL = 'https://servertool.herokuapp.com';
export const GET = (url)=>{
    return axios.get(URL+url).then(e=>e.data);
}
export const POST = (url,value)=>{
    return axios.post(URL+url,value).then(e=>e.data);
}
export const POSTFILE = (url,value)=>{
    return axios.post(URL+url,value,{
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    });
}