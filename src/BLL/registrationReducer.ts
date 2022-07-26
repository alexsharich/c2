import { API } from "../DAL/api"
import { authAC } from "./authReducer"
import { progressAC } from "./progressReducer"

type ActionType = RegisterActionType

const initialState={
    
}

type InitialStateType = {

}

export const registrationReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'REGISTER':
            return { ...state }
        default:
            return state
    }
}

type RegisterActionType = ReturnType<typeof registerAC>

export const registerAC = (data: any) => ({ type: 'REGISTER', data } as const)

export const registerTC = (email: string, password: string): any => (dispatch: any) => {
    dispatch(progressAC('progress'))
    API.registration(email, password)
        .then(res => {
            dispatch(authAC(true))
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            dispatch(progressAC(null))
        })
}