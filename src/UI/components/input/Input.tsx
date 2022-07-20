import React from "react";

type InputPropsType = {
    placeHolder: string
    type: string
    name: string
}

export const Input = ({ placeHolder, type, name }: InputPropsType) => {
    return (
        <div>
            <input placeholder={placeHolder} type={type} name={name} />
        </div>
    )
}