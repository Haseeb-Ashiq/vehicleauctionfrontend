import axios from "axios"
import { apiBase } from "../../apiConfig"
import { GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "../typecontants/constants"
export const signupUser=(obj)=>{

    return async (dispatch) => {
        dispatch({type:USER_REGISTER_REQUEST,payload:''})
        const user= await axios.post(`${apiBase}/user/register`,obj);
        console.log(user)
        if(user.status===201)
        {
            dispatch({type:USER_REGISTER_SUCCESS,payload:user.data._user})
        }
    }

}
export const signinUser=(obj)=>{
    return async (dispatch) => {
        dispatch({type:LOGIN_REQUEST,payload:''})
        console.log(obj)
        const user= await axios.post(`${apiBase}/user/login`,obj)
        window.localStorage.setItem('userCredential',JSON.stringify(user.data._user));
        console.log(user.status)
        if(user.status===200)
        {
            dispatch({type:LOGIN_SUCCESS,payload:user.data._user})
        }
         else
        {
            dispatch({type:LOGIN_FAILE,payload:''})
        }
    }
}
export const getUser=()=>{
    return async (dispatch) => {
        dispatch({type:GET_USER_REQUEST,payload:''})
        // const user= await axios.get(`${apiBase}/user/getuser/${id}`)
        const user = JSON.parse(window.localStorage.getItem('userCredential'))
        if(user!==null)
        {
            dispatch({type:GET_USER_SUCCESS,payload:user})
        }
    }
}
export const userUpdate=({obj,id})=>{
    return async (dispatch) => {
        dispatch({type:USER_UPDATE_REQUEST,payload:''})
        const user=await axios.patch(`${apiBase}/user/userprofileupdate/${id}`,obj)
        if(user.status===201)
        {
            dispatch({type:USER_UPDATE_SUCCESS,payload:user.data._user})
        }
    }
}
export const logOut=()=>{
    return async (dispatch) => {
        dispatch({type:LOGOUT_REQUEST,payload:''})
        window.localStorage.removeItem('userCredential');
        dispatch({type:LOGOUT_SUCCESS,payload:'logout successfull'})
    }
}