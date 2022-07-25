import { getPacksAC, InitialStateType, packsReducer } from "../packsReducer"

let startState: InitialStateType;

beforeEach(() => {
    startState = {
        cardPacks: null,
        cardPacksTotalCount: 1,
        maxCardsCount: 1,
        minCardsCount: 1,
        page: 1,
        pageCount: 20,
    }
})

test('packsList should be changed', () => {

    const action = {
      type:"GET_PACKS",
        data: {
            cardPacks: null,
            cardPacksTotalCount: 100,
            maxCardsCount: 200,
            minCardsCount: 300,
            page: 4,
            pageCount: 10,
        }
    } as const

    const endState = packsReducer(startState, action)

    expect(endState.page).toBe(4)
})