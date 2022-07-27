import React from "react";

export type InitialStateType = {
    isModal: boolean,
    isModal1: boolean,
    isModal2: boolean
}
const initialState = {
    isModal: false,
    isModal1: false,
    isModal2: false
}
type ActionType = SetModalActionType | SetModal1ActionType | SetModal2ActionType

export const modalReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET_MODAL':
            return {
                ...state,
                isModal: action.isModal,
                isModal1: action.isModal,
                isModal2: action.isModal,
            }
        case "SET_MODAL1":
            return { ...state, isModal1: true }
        case "SET_MODAL2":
            return { ...state, isModal2: true }
        default:
            return state
    }
}
type SetModalActionType = ReturnType<typeof setModalAC>
type SetModal1ActionType = ReturnType<typeof setModal1AC>
type SetModal2ActionType = ReturnType<typeof setModal2AC>

export const setModalAC = (isModal: boolean) => ({ type: "SET_MODAL", isModal } as const)
export const setModal1AC = () => ({ type: "SET_MODAL1" } as const)
export const setModal2AC = () => ({ type: "SET_MODAL2" } as const)