import { BID_REQUEST, BID_SUCCESS, GET_BID_REQUEST, GET_BID_SUCCESS } from "../typecontants/constants";

const initial={
    isBiding:false,
    isBid:false,
    isBidLoading:false,
    isBidLoaded:false,
    bid:'',
    bids:[]
}

export const bidReducer=(state=initial,action) =>{
    switch (action.type) {
        case BID_REQUEST:
            return {
                isBiding:true,
                isBid:false,
                bid:action.payload
            }
            case BID_SUCCESS:
                console.log('bid reducer: ',action.payload)
                return {
                    isBiding:false,
                    isBid:true,
                    bid:action.payload
                }
                case GET_BID_REQUEST:
                    return {
                        isBidLoading:true,
                        isBidLoaded:false
                    }
                    case GET_BID_SUCCESS:
                        return {
                            isBidLoading:false,
                            isBidLoaded:true,
                            bids:[...action.payload]
                        }

    
        default:
            return state;
    }
}