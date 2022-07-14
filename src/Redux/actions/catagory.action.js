import axios from "axios"
import { apiBase } from "../../apiConfig"
import { CATAGORY_GET_REQUEST, CATAGORY_GET_SUCCESS } from "../typecontants/constants"


export const getCatagory=()=>{
    return async (dispatch)=>{
        dispatch({type:CATAGORY_GET_REQUEST,payload:''})
        const cata=await axios.get(`${apiBase}/catagory/getcatagories`);
        if(cata.status===200)
        {
            dispatch({type:CATAGORY_GET_SUCCESS,payload:cata.data.cata})
        }
    }
}