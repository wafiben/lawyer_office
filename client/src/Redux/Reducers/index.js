import { combineReducers } from "redux";
import authReducer from "./authReducer";
import adminReducer from "./adminReducer";
const rootReducer = combineReducers({
  AuthReducer: authReducer,
  adminReducer:adminReducer
});
export default rootReducer;