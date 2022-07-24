import React from 'react'
import s from './BasicModal.module.css'

type BasicModalPropstype = {
    children: React.ReactNode
    closeModal: () => void
}

export const BasicModal = ({ children, closeModal }: BasicModalPropstype) => {



    const onClickButtonCloseHandler = () => {
        closeModal()
    }
    const onClickModalCloseModal = (e: any) => {
        if (e.target.id === 'modal'){
            closeModal()
        }      
    }
    /* const onKeyPressHandler = (e:any)=>{
        if(e.charCode === '27'){
            closeModal()
        }
    } */

    return (
        <div id='modal' className={s.basicModalStyle} onClick={onClickModalCloseModal} /* onKeyPress={onKeyPressHandler} */>
            <div className={s.modalContentBlock}>
                <div className={s.modalHeader}>
                    <div className={s.closeModalBlock}>
                        <button className={s.closeModalButton} onClick={onClickButtonCloseHandler}>x</button>
                        <h3>Modal</h3>
                    </div>

                </div>

                <div className={s.modalContent}>
                    {children}
                </div>
            </div>
        </div>
    )
}