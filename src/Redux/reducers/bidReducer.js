import { BID_REQUEST, BID_SUCCESS, GET_BID_REQUEST, GET_BID_SUCCESS, VIEW_AUCTION_REQUEST, VIEW_AUCTION_SUCCESS } from "../typecontants/constants";

const initial={
    isBiding:false,
    isBid:false,
    isBidLoading:false,
    isBidLoaded:false,
    isAuctionLoaded:false,
    bid:'',
    bids:[],
    auction:[]
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
                        case VIEW_AUCTION_REQUEST:
                            return {
                                ...state,
                                isAuctionLoaded:false
                            }
                            case VIEW_AUCTION_SUCCESS:
                                return {
                                    ...state,
                                    isAuctionLoaded:true,
                                    auction:[...action.payload].reverse()
                                }

    
        default:
            return state;
    }
}