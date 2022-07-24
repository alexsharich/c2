import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ForgotPasswordPage } from "../pages/forgotPage/ForgotPasswordPage";
import { LoginPage } from "../pages/loginPage/LoginPage";
import { LogoutPage } from "../pages/logoutPage/LogOutPage";
import { ModalsPage } from "../pages/modalsPage/ModalsPage";
import { NewPasswordPage } from "../pages/newPasswordPage/NewPasswordPage";
import { NotFound404 } from "../pages/notFound404/NotFound404";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { RegistrationPage } from "../pages/registrationPage/RegistrationPage";

export const PATH = {
    LOGIN_PAGE: '/login',
    LOGOUT_PAGE:'/logout',
    FORGOT_PAGE: '/forgot',
    NEW_PASSWORD_PAGE: '/newPassword',
    PROFILE_PAGE: '/profile',
    REGISTRATION_PAGE: '/registration',
    NOT_FOUND: '/404',
    NEW_WAY: '*',
    MODALS:'/modals'
}

export const Routing = () => {
    return (
        <div className='routingPage'>
            <Routes>
                <Route path={PATH.LOGIN_PAGE} element={<LoginPage />} />
                <Route path={PATH.LOGOUT_PAGE} element={<LogoutPage />} />
                <Route path={PATH.FORGOT_PAGE} element={<ForgotPasswordPage />} />
                <Route path={PATH.NEW_PASSWORD_PAGE} element={<NewPasswordPage />} />
                <Route path={PATH.REGISTRATION_PAGE} element={<RegistrationPage />} />
                <Route path={PATH.PROFILE_PAGE} element={<ProfilePage />} />
                <Route path={PATH.NOT_FOUND} element={<NotFound404 />} />
                <Route path={PATH.NEW_WAY} element={<Navigate to='/404' />} />
                <Route path={PATH.MODALS} element={<ModalsPage/>} />
            </Routes>
        </div>
    )
}