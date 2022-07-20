import React, { useState } from "react";
import { API } from "../../../DAL/api";

export const Footer = () => {

    const [ping, checkPing] = useState('0')

    const onClickPing = () => {
        API.ping()
            .then(res => {
                const valuePingFromBack = JSON.stringify(res.data.backTime)
               checkPing(valuePingFromBack)
            })
    }

    return (
        <div className="footer">
            Alexander Sharych 2020
            <button onClick={onClickPing}>PING</button>
            <p>{ping}</p>
        </div>
    )
}