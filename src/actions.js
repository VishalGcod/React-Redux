import axios from "axios";
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const POST_USER = "POST_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";

export const fetchRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
export const fetchSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};
export const fetchFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const postReq = (data) => {
  return {
    type: POST_USER,
    payload: data,
  };
};

export const delReq = (data) => {
  return {
    type: DELETE_USER,
    payload: data,
  };
};

export const updateReq = (data) => {
  return {
    type: UPDATE_USER,
    payload: data,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const users = res.data;
        dispatch(fetchSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchFailure(errorMsg));
      });
  };
};

export const postUsers = (data) => {
  return (dispatch) => {
    axios
      .post("https://fakestoreapi.com/products", data)
      .then((res) => {
        dispatch(postReq(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const delUsers = (index) => {
  return (dispatch) => {
    axios
      .delete("https://fakestoreapi.com/products/" + index)
      .then((res) => {
        dispatch(delReq(index));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateUsers = (index,data) => {
  return (dispatch) => {
    axios
      .put("https://fakestoreapi.com/products/" + index, { data })
      .then((res) => {
        dispatch(updateReq(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// export const fetchUsers=()=>{
//   return(dispatch)=>{
//       dispatch({type:FETCH_USER_REQUEST})
//       axios.get('https://fakestoreapi.com/products').then((res)=>{
//           dispatch({type:FETCH_USER_SUCCESS,payload:res.data})
//       }).catch((error)=>{dispatch({type:FETCH_USER_FAILURE,payload:error.message})})
//   }
// }
