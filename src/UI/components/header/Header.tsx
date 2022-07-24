import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppRootStateType } from "../../../BLL/store";


export const Header = () => {

    const auth = useSelector<AppRootStateType, boolean>(state => state.auth.auth)

    return (
        <div className='headerLink'>
            {auth ? <Link to={'/logout'}>LOGOUT</Link> : <Link to={'/login'}>LOGIN</Link>}
            <Link to={'/forgot'}>forgot</Link>
            <Link to={'/newPassword'}>newPassword</Link>
            <Link to={'/profile'}>profile</Link>
            <Link to={'/registration'}>registration</Link>
            <Link to={'/404'}>404</Link>
            <Link to={'/modals'}>Modals</Link>
        </div>
    )
}