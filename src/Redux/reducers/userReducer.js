import { GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "../typecontants/constants";

const initial = {
    isLoading: false,
    isLoaded: false,
    isLogingout:false,
    isLogout:false,
    users: [],
    user: '',
    updatedUser: '',
    isUpdating: false,
    isUpdated: false
}

export const userReducer = (state = initial, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
            }
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isLoaded: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoaded: true,
                isLoading: false,
                user: action.payload
            }
        case LOGIN_FAILE:
            return {
                ...state,
                isLoading: false,
                isLoaded: false
            }
            case LOGOUT_REQUEST:
                return {
                    ...state,
                    isLogingout:true,
                    isLogout:false
                }
                case LOGOUT_SUCCESS:
                    return {
                        ...state,
                        isLogingout:false,
                        isLogout:true,
                        isLoaded:false
                    }
        case GET_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
                isLoaded: false
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                user: action.payload
            }
        case USER_UPDATE_REQUEST:
            return {
                ...state,
                isUpdating: true,
                isUpdated: false
            }
        case USER_UPDATE_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                isUpdated: true,
                updatedUser: action.payload
            }

        default:
            return state;
    }
}