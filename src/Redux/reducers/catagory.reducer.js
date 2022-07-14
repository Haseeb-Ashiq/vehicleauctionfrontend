import { CATAGORY_GET_REQUEST, CATAGORY_GET_SUCCESS } from "../typecontants/constants";

const initial={
    isLoading:false,
    isLoaded:false,
    catagories:[]
}

export const CatagoryReducer=(state=initial,action)=>{
    switch (action.type) {
        case CATAGORY_GET_REQUEST:
            return {
                ...state,
                isLoading:true,
                isLoaded:false,
            }
            case CATAGORY_GET_SUCCESS:
                return {
                    ...state,
                    isLoading:false,
                    isLoaded:true,
                    catagories:[...action.payload]
                }
    
        default:
            return state
    }
}