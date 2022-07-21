import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { ProfileType } from "../../../BLL/profileReducer";
import { ProgressType } from "../../../BLL/progressReducer";
import { AppRootStateType } from "../../../BLL/store";
import { Progress } from "../../components/progress/Progress";
import s from './Profile.module.css'

export const ProfilePage = () => {

    const profile = useSelector<AppRootStateType, ProfileType>(state => state.profile)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.auth)
    const progress = useSelector<AppRootStateType, ProgressType>(state => state.progress.progress)

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
                <h3>Packs List</h3>
                <div className={s.searchPackInput}><input type="text" /></div>

            </div>
            <div>

            </div>
        </div>
    )
}