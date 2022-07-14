import { GET_ONE_PRODUCT, GET_PRODUCT_CATAGORY_REQUEST, GET_PRODUCT_CATAGORY_SUCCESS, PRODUCT_REQUEST, PRODUCT_REQUEST_SUCCESS, WISH_LIST_GET_REQUEST, WISH_LIST_GET_SUCCESS, WISH_LIST_REQUEST, WISH_LIST_SUCCESS } from "../typecontants/constants";

const initial={
    isLoading:false,
    isLoaded:false,
    wishListLoaded:false,
    wishListLoading:false,
    products:[],
    filterProducts:[],
    wish:[],
    product:''
}

export const ProductReducer=(state=initial,action)=>{
switch (action.type) {
    case PRODUCT_REQUEST:
        return {
            ...state,
            isLoading:true,
            isLoaded:false
        }
        case PRODUCT_REQUEST_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isLoading:false,
                isLoaded:true,
                filterProducts:[],
                products:[...action.payload]
            }
            case GET_ONE_PRODUCT:
                return {
                    ...state,
                    product:state.products.find(pro=>pro._id===action.payload)
                }
                case WISH_LIST_REQUEST:
                    return {
                        ...state,
                    }
                case WISH_LIST_SUCCESS:
                    return {
                        ...state,
                        wishListLoaded:true,
                        wish:[...action.payload]
                    }
                    case WISH_LIST_GET_REQUEST:
                        return {
                            ...state,
                            wishListLoading:true,
                            wishListLoaded:false
                        }
                        case WISH_LIST_GET_SUCCESS:
                            return {
                                ...state,
                                wishListLoading:false,
                                wishListLoaded:true,
                                wish:[...action.payload]
                            }
                            case GET_PRODUCT_CATAGORY_REQUEST:
                                return {
                                    ...state,
                                    isLoading:true,
                                    isLoaded:false
                                }
                            case GET_PRODUCT_CATAGORY_SUCCESS:
                                return {
                                    ...state,
                                    isLoading:false,
                                    isLoaded:true,
                                    filterProducts:[...action.payload]
                                }

    default:
        return state;
}
}