import { changePasswordReducer, InitialStateType } from "../changePasswordReducer"

let startState: InitialStateType

beforeEach(() => {
    startState = {
        password: ''
    }
})

test('password should be change', () => {

    const newPassword = 'today it is your new password for this test'

    const endState = changePasswordReducer(startState, { type: 'CHANGE_PASSWORD', newPassword })

    expect(endState.password).not.toBe('')
    expect(endState.password).toBe('today it is your new password for this test')
})