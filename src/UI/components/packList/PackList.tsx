import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPacksTC, PackType } from "../../../BLL/packsReducer";
import { AppRootStateType } from "../../../BLL/store";
import s from './PackList.module.css'

export const PackList = () => {

    const dispatch = useDispatch()
    const packs = useSelector<AppRootStateType, Array<PackType> | null>(state => state.packs.cardPacks)

    const getPacks = () => {
        dispatch(getPacksTC())
    }

    return (
        <div>
            <button onClick={getPacks}>Get Packs</button>
            <h3>Packs List</h3>
            <div className={s.searchPackInput}><input type="text" /> <button>Search</button></div>
            {packs && <table className={s.packList}>
                <tr>
                    <th className={s.tableHeader}> Name</th>
                    <th className={s.tableHeader}> Cards</th>
                    <th className={s.tableHeader}> Updated</th>
                    <th className={s.tableHeader}> Created </th>
                    <th className={s.tableHeader}> Action</th>
                </tr>
                {packs.map(pack => {
                    return <tr >
                        <td className={s.cell}>{pack.name}</td>
                        <td className={s.cell}>{pack.cardsCount}</td>
                        <td className={s.cell}>{pack.updated}</td>
                        <td className={s.cell}>{pack.rating}</td>
                        <td className={s.cell}>some button </td>
                    </tr>
                })}


            </table>}

        </div>
    )
}