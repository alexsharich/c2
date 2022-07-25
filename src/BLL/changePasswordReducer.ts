
type ActionType = ChangePasswordActionType

export const InitialState = {
    password: 'hiden password'
}

export type InitialStateType = {
    password: string
}

export const changePasswordReducer = (state: InitialStateType, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'CHANGE_PASSWORD':
            return { ...state, password: action.newPassword }
        default:
            return state
    }
}

type ChangePasswordActionType = ReturnType<typeof changePasswordAC>

export const changePasswordAC = (newPassword: string) => ({ type: 'CHANGE_PASSWORD', newPassword } as const)