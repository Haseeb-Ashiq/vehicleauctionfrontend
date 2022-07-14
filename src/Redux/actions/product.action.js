import axios from "axios"
import { apiBase } from "../../apiConfig"
import { GET_ONE_PRODUCT, GET_PRODUCT_CATAGORY_REQUEST, GET_PRODUCT_CATAGORY_SUCCESS, PRODUCT_REQUEST, PRODUCT_REQUEST_SUCCESS, WISH_LIST_GET_REQUEST, WISH_LIST_GET_SUCCESS, WISH_LIST_REQUEST, WISH_LIST_SUCCESS } from "../typecontants/constants"

export const getProduct=()=>{
    return async (dispatch) => {
        dispatch({type:PRODUCT_REQUEST,payload:''})
        const product=await axios.get(`http://localhost:5000/api/product/getproducts`)
        console.log(product)
        if(product.status===200)
        {
            dispatch({type:PRODUCT_REQUEST_SUCCESS,payload:product.data.pro})
        }

    }
}
export const getOneProduct=(id)=>{
    return async (dispatch) => {
        dispatch({type:GET_ONE_PRODUCT,payload:id})
    }
}

export const addWishList=(obj)=>{
    return async (dispatch) => {
        dispatch({type:WISH_LIST_REQUEST,payload:''})
        let wishlist=JSON.parse(window.localStorage.getItem('wish-list'));
        let wishArr=[];
        console.log(wishlist)
        if(wishlist===null)
        {
            wishArr.push(obj);
        }
        else{
            wishArr.push(...wishlist,obj)
        }
        window.localStorage.setItem('wish-list',JSON.stringify(wishArr))
        dispatch({type:WISH_LIST_SUCCESS,payload:wishArr})
    }
}

export const getWishList=()=>{
    return async (dispatch) => {
        dispatch({type:WISH_LIST_GET_REQUEST,payload:''})
        let wishlist=JSON.parse(window.localStorage.getItem('wish-list'));
        dispatch({type:WISH_LIST_GET_SUCCESS,payload:wishlist})
    }
}

export const getProductByCatagory=(id)=>{
    return async (dispatch) => {
        dispatch({type:GET_PRODUCT_CATAGORY_REQUEST,payload:''});
        const product= await axios.get(`${apiBase}/product/getproductbyid/${id}`)
        if(product.status===200)
        {
            dispatch({type:GET_PRODUCT_CATAGORY_SUCCESS,payload:product.data._pro})
        }
    }
}