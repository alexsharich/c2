import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { logoutTC } from "../../../BLL/loginReducer";
import { ProgressType } from "../../../BLL/progressReducer";
import { AppRootStateType } from "../../../BLL/store";
import { SendButton } from "../../components/button/SendButton";
import { Progress } from "../../components/progress/Progress";
import s from './LogOutPage.module.css'

export const LogoutPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = useSelector<AppRootStateType, boolean>(state => state.auth.auth)
    const progress = useSelector<AppRootStateType,ProgressType>(state=>state.progress.progress)

    const logout = () => {
        dispatch(logoutTC())
    }
    const redirect = () => {
        navigate('/profile')
    }

    if (progress === 'progress') {
        return <Progress />
    }

    if (!auth) {
        return <Navigate to='/login' />
    }


    return (

        <div className="modalField">
            <div className={s.logoutInfo}>
                <h3><b>Are you sure ?</b> </h3>
                <div style={{ margin: '30px' }} className={s.logout}>
                    <SendButton text={'Yes,log Out'} callBack={logout} />
                    <SendButton text={'No'} callBack={redirect} />
                </div>
            </div>
        </div>

    )
}