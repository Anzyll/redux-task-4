import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./usertype"
import axios from "axios"
const fetchUserRequest=()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}

const fetchUserSuccess=(user)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:user
    }
}

const fetchUserFailure=(error)=>{
    return{
        type:FETCH_USER_FAILURE,
        payload:error
    }
}

 export const fetchUsers =()=>{
    return async(dispatch)=>{
        dispatch(fetchUserRequest)
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            const users = response.data
            dispatch(fetchUserSuccess(users))
        }
        catch(error){
            const errorMsg = error.message
            dispatch(fetchUserFailure(errorMsg))
        }

    }

}