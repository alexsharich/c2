import React from "react";
import { packsAPI } from "../DAL/api";
import { authAC } from "./authReducer";
import { progressAC } from "./progressReducer";


const initialState = {
    cardPacks: null,
    cardPacksTotalCount: 14,
    maxCardsCount: 10,
    minCardsCount: 0,
    page: 1,
    pageCount: 10,
}
export type PackType = {
    _id: string,
    user_id: string,
    name: string,
    path: string,
    cardsCount: number,
    grade: number,
    shots: number,
    rating: number,
    type: string,
    created: string,
    updated: string,
    __v: number,
}
type InitialStateType = {
    cardPacks: Array<PackType> | null,
    cardPacksTotalCount: number,
    maxCardsCount: number,
    minCardsCount: number,
    page: number,
    pageCount: number,
}
type ActionType = GetPacksActionType | ChangePageActionType

export const packsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "GET_PACKS":
            return { ...state, ...action.data }
        case "CHANGE_PAGE_VALUE":
            return {...state,pageCount:action.value}
            default:
            return { ...state }
    }
}

type GetPacksActionType = {
    type: "GET_PACKS"
    data: InitialStateType
}

export const getPacksAC = (data: InitialStateType) => ({ type: "GET_PACKS", data })

export const getPacksTC = (): any => (dispatch: any) => {
    dispatch(progressAC('progress'))
    packsAPI.getPacks()
        .then(res => {
            dispatch(getPacksAC(res.data))
        })
        .finally(() => {
            dispatch(progressAC(null))
        })
}
type ChangePageActionType = ReturnType<typeof changePageAC>
export const changePageAC = (value: number) => ({ type: "CHANGE_PAGE_VALUE", value } as const)

export const changePageTC = (value: number): any => (dispatch: any) => {
    packsAPI.getCurrentPage(value)
    .then(res=>{
        dispatch(getPacksAC(res.data))
    })

}