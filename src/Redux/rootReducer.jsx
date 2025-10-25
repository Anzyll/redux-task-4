import { combineReducers } from "redux";
import IcecreamReducer from "./icecream/IcecreamReducer";
import reducer from "./cake/CakeReducer";
import { userReducer } from "./user/userReducer";

const rootReducer=combineReducers({
    icecream:IcecreamReducer,
    cake:reducer,
    user:userReducer
})
export default rootReducer