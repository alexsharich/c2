import React from "react";
import { SendButton } from "../../components/button/SendButton";
import { Input } from "../../components/input/Input";
import s from './RegistrationPage.module.css'

export const RegistrationPage = () => {
    return (
        <div className="modalField">
            <div>
                <h3 className={s.modalLoginText}>Sign Up</h3>
            </div>
            <form className={s.form}>
                <div className="inputsBlock">
                    <Input placeHolder={'Email'} type={'text'} name={'email'} />
                    <Input placeHolder={'Password'} type={'password'} name={'password'} />
                    <Input placeHolder={'ConfirmPassword'} type={'password'} name={'confirmPassword'} />
                </div>
                <div style={{ margin: '100px' }}>
                    <SendButton text={'Register'} callBack={() => { }} />

                </div>
            </form>
        </div>
    )
}