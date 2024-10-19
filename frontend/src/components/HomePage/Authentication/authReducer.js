// authReducer.js
export const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? // ? JSON.parse(localStorage.getItem("userInfo"))
      localStorage.getItem("userInfo")
    : null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userInfo: action.payload, // store user info in state
      };
    case "LOGOUT":
      return {
        ...state,
        userInfo: null, // clear user info on logout
      };
    default:
      return state;
  }
};
