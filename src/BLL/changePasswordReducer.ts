
type ActionType = ChangePasswordActionType

type InitialStateType = {

}

export const changePasswordReducer = (state: InitialStateType, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'CHANGE_PASSWORD':
            return { ...state }
        default:
            return state
    }
}

type ChangePasswordActionType = ReturnType<typeof changePasswordAC>

export const changePasswordAC = (data: any) => ({ type: 'CHANGE_PASSWORD', data } as const)