import { authAC, authReducer, InitialStateType } from "../authReducer";

let startState: InitialStateType;

beforeEach(() => {
    startState = {
        auth: false
    }
})

test('authReducer test', () => {

    const endState = authReducer(startState, authAC(true))

    expect(startState.auth).toBe(false)
    expect(endState.auth).toBe(true)
})