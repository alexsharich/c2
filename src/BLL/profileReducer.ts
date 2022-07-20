
type ActionType = SetProfileActionType

const initialState = {
    _id: '',
    email: '',
    name: '',
    avatar: '',
    publicCardPacksCount: null,
    createdDate: null,
    updated: null,
    isAdmin: false,
    verifed: false,
    rememberMe: false,
    error: ''
}
export type ProfileType ={
    _id: string,
    email: string,
    name: string,
    avatar?: string,
    publicCardPacksCount: number | null,
    createdDate: null | Date,
    updated: null | Date,
    isAdmin: boolean,
    verifed: boolean,
    rememberMe: boolean,
    error: string | null
}
type initialStateType = {
    _id: string,
    email: string,
    name: string,
    avatar?: string,
    publicCardPacksCount: number | null,
    createdDate: null | Date,
    updated: null | Date,
    isAdmin: boolean,
    verifed: boolean,
    rememberMe: boolean,
    error: string | null
}

export const profileReducer = (state: initialStateType, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'SET_PROFILE':
            return { ...state,
                ...action.data}
        default:
            return {...state}
    }
}

type SetProfileActionType = ReturnType<typeof setProfileAC>

export const setProfileAC = (data: any) => ({ type: 'SET_PROFILE', data } as const)