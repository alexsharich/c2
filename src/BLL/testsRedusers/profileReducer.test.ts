import { InitialStateType, profileReducer } from "../profileReducer";

let startState: InitialStateType

beforeEach(() => {
    startState = {
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
})
test('set new profile tes', () => {

    const action = {
        type: 'SET_PROFILE',
        data: {
            _id: '10',
            email: 'google@gmail.com',
            name: 'gooooooogle',
            avatar: 'some img address',
            publicCardPacksCount: null,
            createdDate: null,
            updated: null,
            isAdmin: false,
            verifed: false,
            rememberMe: false,
            error: ''
        }
    } as const

    const endState = profileReducer(startState, action)

    expect(endState._id).toBe('10')
    expect(endState.email).toBe('google@gmail.com')
})