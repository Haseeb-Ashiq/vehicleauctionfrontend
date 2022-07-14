import { combineReducers } from "redux";
import { bidReducer } from "./Redux/reducers/bidReducer";
import { CatagoryReducer } from "./Redux/reducers/catagory.reducer";
import { ProductReducer } from "./Redux/reducers/productReducer";
import { userReducer } from "./Redux/reducers/userReducer";


export const rootReducer=combineReducers({
    Product:ProductReducer,
    User:userReducer,
    Catagory:CatagoryReducer,
    Bid:bidReducer
})