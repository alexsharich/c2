import axios from "axios";

const instance = axios.create({
    /*  baseURL: 'https://neko-back.herokuapp.com/2.0', */
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true
})

export const API = {
    ping() {
        return instance.post('ping')
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', { email: "nya-admin@nya.nya", password: "1qazxcvBG", rememberMe: true })
    },
    logout() {
        return instance.delete('auth/me')
    },
    registration(email: string, password: string) {
        return instance.post('auth/register', { email: "nya-admin@nya.nya", password: "1qazxcvBG" })
    },
    authMe() {
        return instance.post('auth/me')
    },
    update(name: string, avatar: string) {
        return instance.put('auth/me')
    },
    forgotPassword(email: string) {
        return instance.post('auth/forgot', {
            email,
            from: 'test-front-admin<ai73@yandex.ru>',
            message: `<div style='background-color:lime;
        padding:15px;>
         password recover link:'
         <a href = 'http://localhost:3000/#/set-new-password/$token$'>link</a>
         </div>`
        })
    },
    sendNewPassword(password: string, resetPasswordToken: string) {
        return instance.post('auth/set-new-password', { password, resetPasswordToken })
    }
}
export const packsAPI = {
    getPacks(){
        return instance.get('cards/pack?page=2&pageCount=10')
    },
    getCurrentPage(value:number){
        return instance.get(`cards/pack?page=${value}&pageCount=10`)
    }
}