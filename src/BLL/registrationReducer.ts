
type ActionType = RegisterActionType

type InitialStateType = {

}

export const registrationReducer = (state: InitialStateType, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'REGISTER':
            return { ...state }
        default:
            return state
    }
}

type RegisterActionType = ReturnType<typeof registerAC>

export const registerAC = (data: any) => ({ type: 'REGISTER', data } as const)