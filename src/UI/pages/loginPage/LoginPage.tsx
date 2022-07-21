import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { loginTC } from "../../../BLL/loginReducer";
import { ProgressType } from "../../../BLL/progressReducer";
import { AppRootStateType } from "../../../BLL/store";
import { API } from "../../../DAL/api";
import { SendButton } from "../../components/button/SendButton";
import { Input } from "../../components/input/Input";
import { Progress } from "../../components/progress/Progress";
import s from './LoginPage.module.css'

export const LoginPage = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.auth)
    const progress = useSelector<AppRootStateType, ProgressType>(state => state.progress.progress)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: ''
        },
        onSubmit: values => {
            dispatch(loginTC(values.email, values.password, !!values.rememberMe))
        }
    })

    if (progress === 'progress') {
        return <Progress/>
    }

    if (isAuth) {
        return <Navigate to='/profile' />
    }


    return (
        <div className="loginPage">
            <div className="modalField">
                <div>
                    <h3 className={s.modalLoginText}>Sign in</h3>
                </div>

                <form onSubmit={formik.handleSubmit} className={s.form}>
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
                        <input type="checkbox"
                            name="rememberMe"
                            onChange={formik.handleChange}
                            value={formik.values.rememberMe} />
                        {/* <Input placeHolder={'Email'}
                         type={'text'}
                          name={'email'}
                          onChange={formik.handleChange}
                          value={formik.values.email}/>
                        <Input placeHolder={'Password'}
                         type={'password'}
                          name={'password'}
                          onChange={formik.handleChange}
                          value={formik.values.password}/> */}
                    </div>
                    <a href="/forgot" className={s.linkText}>Forgot Password</a>
                    <SendButton text={'Login'} />
                </form>
                <div className={s.signUpBlock}>
                    <p className={s.linkText}>Dont have an account ?</p>
                    <a href='/registration' className={s.signUpButton}>Sign Up</a>
                </div>
            </div>
        </div>
    )
}