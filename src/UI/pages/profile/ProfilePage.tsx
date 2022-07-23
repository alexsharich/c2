import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getPacksTC } from "../../../BLL/packsReducer";
import { ProfileType } from "../../../BLL/profileReducer";
import { ProgressType } from "../../../BLL/progressReducer";
import { AppRootStateType } from "../../../BLL/store";
import { PackList } from "../../components/packList/PackList";
import { Pagination } from "../../components/pagination/Pagination";
import { Progress } from "../../components/progress/Progress";
import { Select } from "../../components/select/Select";
import s from './Profile.module.css'

export const ProfilePage = () => {

    const profile = useSelector<AppRootStateType, ProfileType>(state => state.profile)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.auth)
    const progress = useSelector<AppRootStateType, ProgressType>(state => state.progress.progress)
    const pageCount = useSelector<AppRootStateType, number>(state => state.packs.pageCount)
    const dispatch = useDispatch()
    const packsValueFromState = useSelector<AppRootStateType, number>(state => state.packs.pageCount)

    const [count, setPageCount] = useState(pageCount)
    const [valuePack, setValuePack] = useState(packsValueFromState)

    const getPage = useCallback((value: number) => {
        setPageCount(value)
    }, [count])
    const getPacksValue = useCallback((value: number) => {
        setValuePack(value)
    }, [valuePack])
    useEffect(() => {
        dispatch(getPacksTC(count, valuePack))
    }, [count, valuePack])



    if (progress === 'progress') {
        return <Progress />
    }

    if (!isAuth) {
        return <Navigate to={'/login'} />
    }

    return (
        <div className={s.profile}>
            <div className={s.profileInfo}>
                <div>
                    <img style={{ width: '100px', height: '100px' }} src={profile.avatar} alt="" />
                </div>
                <div>
                    <h3><b>{profile.name}</b></h3>
                </div>
            </div>
            <div className={s.profilePackLists}>
                <PackList />
                <Pagination pageCount={pageCount} getPage={getPage} />
                <Select getPacksValue={getPacksValue} packsValueFromState={packsValueFromState} />

            </div>
            <div>

            </div>
        </div>
    )
}