import { InitialStateType, modalReducer, setModal1AC } from "../modalReducer"

let startState: InitialStateType;

beforeEach(() => {
    startState = {
        isModal: false,
        isModal1: false,
        isModal2: false
    }
})

test('first modal shoul be active', () => {

    const endState = modalReducer(startState, setModal1AC())

    expect(endState.isModal1).toBeTruthy
    expect(endState.isModal).toBeFalsy
    expect(endState.isModal2).toBeFalsy
})