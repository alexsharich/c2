import { API } from "../DAL/api"
import { authAC } from "./authReducer"
import { setProfileAC } from "./profileReducer"
import { progressAC } from "./progressReducer"

type ActionType = LoginActionType

const initialState = {
    _id: '',
    email: '',
    name: '',
    avatar: '',
    publicCardPacksCount: null,
    createdDate: null,
    updated: null,
    isAdmin: false,
    verified: false,
    rememberMe: false,
    error: '',
    created: null
}
export type initialStateType = {
    _id: string,
    email: string,
    name: string,
    avatar: string,
    publicCardPacksCount: number | null,
    createdDate: null | Date,
    updated: null | Date,
    isAdmin: boolean,
    verified: boolean,
    rememberMe: boolean,
    error: string | null,
    created: any
}

export const loginReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'LOGIN': {
            return { ...state, ...action.data }
        }

        default:
            return state
    }
}

type LoginActionType = ReturnType<typeof loaginAC>

export const loaginAC = (data: any) => ({ type: 'LOGIN', data } as const)

export const loginTC = (email: string, password: string, rememberMe: boolean): any => {
    return (dispatch: any) => {
        dispatch(progressAC('progress'))
        API.login(email, password, rememberMe)
            .then(res => {
                dispatch(authAC(true))
                dispatch(setProfileAC(res.data))
            })
            .finally(() => {
                dispatch(progressAC(null))
            })
    }
}
export const logoutTC = (): any => (dispatch: any) => {
    dispatch(progressAC('progress'))
    API.logout()
        .then(res => {
            dispatch(authAC(false))
        })
        .finally(() => {
            dispatch(progressAC(null))
        })
}