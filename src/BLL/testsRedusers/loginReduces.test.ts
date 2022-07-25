import { initialStateType, loginReducer } from "../loginReducer"

let startState: initialStateType;

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
        verified: false,
        rememberMe: false,
        error: '',
        created: null
    }
})

test('login test', () => {

    const action = {
        type:'LOGIN',
        data:{
            _id: '1',
            email: 'yo@gmail.com',
            name: 'Paul',
            avatar: '',
            publicCardPacksCount: null,
            createdDate: null,
            updated: null,
            isAdmin: false,
            verified: false,
            rememberMe: false,
            error: '',
            created: null
        }
    } as const

    const endState = loginReducer(startState, action)

    expect(endState._id).toBe('1')
    expect(endState.email).toBe('yo@gmail.com')
    expect(endState.name).toBe('Paul')    
})