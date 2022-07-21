import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk";
import { authReducer } from "./authReducer";
import { changePasswordReducer } from "./changePasswordReducer";
import { loginReducer } from "./loginReducer";
import { profileReducer } from "./profileReducer";
import { progressReducer } from "./progressReducer";
import { registrationReducer } from "./registrationReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    profile:profileReducer,
    auth:authReducer,
    progress:progressReducer
  /*   registration:registrationReducer,
    profile:profileReducer,
    changePassword:changePasswordReducer */
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer >

