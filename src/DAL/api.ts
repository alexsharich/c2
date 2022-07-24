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
    getPacks(pageCount: number = 10, packCount: number = 10) {
        return instance.get(`cards/pack?page=${pageCount}&pageCount=${packCount}`)
    },
    getCurrentPage(value: number) {
        return instance.get(`cards/pack?page=${value}`)
    },
    getCurentPacksValue(packsValue: number) {
        return instance.get(`cards/pack?pageCount=${packsValue}`)
    },
    createPack() {
        return instance.post('cards/pack', { name: 'new pack', deckCover: '' })
    },
    deletePack(id: string) {
        return instance.delete(`cards/pack?id=${id}`)
    },
    updatePack(id: string, name: string) {
        return instance.put('cards/pack', { _id: id, name: name })
    },
    getCard() {
        return instance.get('cards/card')
    },
    createCard() {
        return instance.post('cards/card')
    },
    deleteCard(id: string) {
        return instance.delete(`cards/card?id=${id}`)
    },
    updateCard(id: string) {
        return instance.put('cards/card', { id })
    }
}