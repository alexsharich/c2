import React from "react";
import s from './SendButton.module.css'

type SendButtonPropsType = {
    text: string
    callBack?:()=>void
}

export const SendButton = ({text,callBack}: SendButtonPropsType) => {
    return (
        <button type="submit" onClick ={callBack} className={s.sendButton}>{text}</button>
    )
}