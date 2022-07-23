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
type ActionType = GetPacksActionType 

export const packsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "GET_PACKS":
            return { ...state, ...action.data }
            default:
            return { ...state }
    }
}

type GetPacksActionType = {
    type: "GET_PACKS"
    data: InitialStateType
}

export const getPacksAC = (data: InitialStateType) => ({ type: "GET_PACKS", data })

export const getPacksTC = (pageCount:number,packsCount:number): any => (dispatch: any) => {
    dispatch(progressAC('progress'))
    packsAPI.getPacks(pageCount,packsCount)
        .then(res => {
            dispatch(getPacksAC(res.data))
        })
        .finally(() => {
            dispatch(progressAC(null))
        })
}


