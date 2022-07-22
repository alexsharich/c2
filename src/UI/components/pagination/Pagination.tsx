import React from "react";
import s from './Pagination.module.css'


type PaginationPropsType = {
    pageCount: number
    getPage: (pageCount: number) => void
}

export const Pagination = ({ pageCount, getPage }: PaginationPropsType) => {

const getP =(pageCount:number)=>{
    getPage(pageCount)
}

    const elementsOnPage = pageCount
    let paginationOfPages: Array<number> = []
    for (let i = 0; i <= elementsOnPage; i++) {
        paginationOfPages.push(i)
    }
   


    return (
        <div className={s.pagination}>
            {paginationOfPages.map(el => {
                 
                return <span onClick={()=>getP(el)}>{el}</span>
            })}
        </div>
    )
}