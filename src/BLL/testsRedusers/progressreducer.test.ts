import { InitialStateType, progressAC, progressReducer } from "../progressReducer"

let startState: InitialStateType;

beforeEach(() => {
    startState = {
        progress: null
    }
})

test('status should be changed', () => {

    const endState = progressReducer(startState, progressAC('error'))

    expect(endState.progress).toBe('error')
    expect(endState.progress).not.toBe('progress')
    expect(endState.progress).not.toBe(null)
})