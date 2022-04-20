const initState = { user: {}, isAuth: false };
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "ss":return {...state,isAuth: true};
    default:
      return state;
  }
};
export default authReducer;
