const initialState = {
    progress: null
}
type InitialStateType = {
    progress: ProgressType
}
export type ProgressType = 'load' | 'progress' | 'error' | null
type ActionType = ProgressActionType

export const progressReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET_PROGRESS':
            return { ...state,progress:action.progress }
        default:
            return { ...state }
    }

}

type ProgressActionType = ReturnType<typeof progressAC>

export const progressAC = (progress: ProgressType) => ({ type: 'SET_PROGRESS',progress } as const)

