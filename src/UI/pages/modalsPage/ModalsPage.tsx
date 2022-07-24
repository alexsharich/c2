import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setModal1AC, setModal2AC, setModalAC } from '../../../BLL/modalReducer'
import { AppRootStateType } from '../../../BLL/store'
import { BasicModal } from '../../components/modals/basicModal/BasicModal'
import { Modal1 } from '../../components/modals/modal1/Modal1'
import { Modal2 } from '../../components/modals/modal2/Modal2'
import s from './ModalsPage.module.css'

export const ModalsPage = () => {

    const modal1 = useSelector<AppRootStateType, boolean>(state => state.modal.isModal1)
    const modal2 = useSelector<AppRootStateType, boolean>(state => state.modal.isModal2)
    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch(setModalAC(false))
    }
    const onClickModal1 = ()=>{
        dispatch(setModal1AC())
    }
    const onClickModal2 = ()=>{
        dispatch(setModal2AC())
    }

    return (
        <div className={s.modalPage}>
            {modal1 && <BasicModal closeModal={closeModal} children={<Modal1 />} />}
            {modal2 && <BasicModal closeModal={closeModal} children={<Modal2 />} />}
            <button className={s.buttonStyle} onClick={onClickModal1}> first</button>
            <button className={s.buttonStyle} onClick={onClickModal2}>second</button>

        </div>
    )
}