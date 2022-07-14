import axios from "axios"
import { apiBase } from "../../apiConfig"
import { BID_REQUEST, BID_SUCCESS, GET_BID_REQUEST, GET_BID_SUCCESS } from "../typecontants/constants"


export const addBid=(obj)=>{
    return async (dispatch) => {
        dispatch({type:BID_REQUEST,payload:''})
        const bidRes= await axios.post(`${apiBase}/bid/addbid`,obj);
        if(bidRes.status===201)
        {
            dispatch({type:BID_SUCCESS,payload:bidRes.data._bids})
        }
    }
}
export const getBids=(id)=>{
    return async (dispatch) => {
        dispatch({type:GET_BID_REQUEST,payload:''})
        const bids=await axios.get(`${apiBase}/bid/getbidsbyid/${id}`)
        if(bids.status===200)
        {
            dispatch({type:GET_BID_SUCCESS,payload:bids.data.bid_list})
        }
    }
}