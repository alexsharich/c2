import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { changePageAC, changePageTC, getPacksTC, PackType } from "../../../BLL/packsReducer";
import { ProfileType } from "../../../BLL/profileReducer";
import { ProgressType } from "../../../BLL/progressReducer";
import { AppRootStateType } from "../../../BLL/store";
import { PackList } from "../../components/packList/PackList";
import { Pagination } from "../../components/pagination/Pagination";
import { Progress } from "../../components/progress/Progress";
import s from './Profile.module.css'

export const ProfilePage = () => {

    const profile = useSelector<AppRootStateType, ProfileType>(state => state.profile)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.auth)
    const progress = useSelector<AppRootStateType, ProgressType>(state => state.progress.progress)
    const pageCount = useSelector<AppRootStateType, number>(state => state.packs.pageCount)
    const dispatch = useDispatch()

    const getPage = (value: number) => {
        dispatch(changePageTC(value))
    }

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
            </div>
            <div>

            </div>
        </div>
    )
}