import { FETCH_DATA } from "./actionType"
import axios from 'axios'

export const fetchUserData = (data)=>{
    return {
        type : FETCH_DATA,
        payload : data
    }
}

export const FetchData = () =>{
    return (dispatch) =>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            console.log(res.data)
            let users = res.data
            dispatch(fetchUserData(users))
        })
    }
}