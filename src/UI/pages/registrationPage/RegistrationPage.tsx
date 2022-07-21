import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ProgressType } from "../../../BLL/progressReducer";
import { registerTC } from "../../../BLL/registrationReducer";
import { AppRootStateType } from "../../../BLL/store";
import { SendButton } from "../../components/button/SendButton";
import { Input } from "../../components/input/Input";
import { Progress } from "../../components/progress/Progress";
import s from './RegistrationPage.module.css'

export const RegistrationPage = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.auth)
    const progress = useSelector<AppRootStateType, ProgressType>(state => state.progress.progress)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            dispatch(registerTC(values.email, values.password))
        }
    })

    if (progress === 'progress') {
        return <Progress />
    }

    if (isAuth) {
        return <Navigate to='/login' />
    }


    return (
        <div className="modalField">
            <div>
                <h3 className={s.modalLoginText}>Sign Up</h3>
            </div>
            <form className={s.form}>
                <div className="inputsBlock">
                    <input type="text"
                        name="email"
                        placeholder="email"
                        onChange={formik.handleChange}
                        value={formik.values.email} />
                    <input type="password"
                        name="password"
                        placeholder="password"
                        onChange={formik.handleChange}
                        value={formik.values.password} />
                </div>
                <div style={{ margin: '100px' }}>
                    <SendButton text={'Register'} callBack={() => { }} />
                </div>
            </form>
        </div>
    )
}