import React from "react";
import { useSelector } from "react-redux";
import { ProgressType } from "../../../BLL/progressReducer";
import { AppRootStateType } from "../../../BLL/store";
import { SendButton } from "../../components/button/SendButton";
import { Input } from "../../components/input/Input";
import { Progress } from "../../components/progress/Progress";
import s from './ForgotPasswordPage.module.css'

export const ForgotPasswordPage = () => {

const progress = useSelector<AppRootStateType,ProgressType>(state=>state.progress.progress)

    if (progress === 'progress') {
        return <Progress/>
    }

    return (
        <div className="modalField">
            <div>
                <h3 className={s.modalLoginText}>Forgot your password ?</h3>
            </div>
            <form className={s.form}>
                <div className="inputsBlock">
                    <Input placeHolder={'Email'} type={'text'} name={'email'} />
                </div>
                <p className={s.linkText}>Enter your email address and we will send you further instructions</p>
                <div >
                    <SendButton text={'Send'} />
                </div>
                <div className={s.signUpBlock}>
                    <p className={s.linkText}>Did you remember your password ?</p>
                    <a href="/login" className={s.signUpButton}>Sign In</a>
                </div>
            </form>
        </div>
    )
}