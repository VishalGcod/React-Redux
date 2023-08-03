import { FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILURE, POST_USER,DELETE_USER, UPDATE_USER } from "./actions";
const initialFetch = {
    loading: false,
    users: [],
    error: "",
  };
  
  export const fetchReducer = (state = initialFetch, action) => {
    switch (action.type) {
      case FETCH_USER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_USER_SUCCESS:
        return {
          loading: false,
          users: action.payload,
          error: "",
        };
      case FETCH_USER_FAILURE:
        return {
          loading: false,
          users: [],
          error: action.payload,
        };
        case POST_USER:
          return{
            // ...state,
            users:[...state.users,action.payload]
          }
        case DELETE_USER:
          return{
            ...state,
            users:action.payload
          }
          case UPDATE_USER:
            return{
              ...state,
              users:action.payload
            }
      default:
        return state;
    }
  };