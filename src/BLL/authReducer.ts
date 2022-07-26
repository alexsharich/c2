
const initialState = {
    auth: false
}
export type InitialStateType = {
    auth: boolean
}
type ActionType = AuthActiontype

export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'AUTH':
            return { ...state, auth: action.isAuth }
        default:
            return state
    }
}

type AuthActiontype = ReturnType<typeof authAC>
export const authAC = (isAuth: boolean) => ({ type: 'AUTH', isAuth } as const)

