import React, { ChangeEvent } from "react";

type SelectPropsType = {
    getPacksValue: (packsValue: number) => void
    packsValueFromState: number
}

export const Select = React.memo(({ getPacksValue, packsValueFromState }: SelectPropsType) => {

    let packsValueForSelect = []

    for (let i = 0; i <= packsValueFromState; i++) {
        packsValueForSelect.push(i)
    }

    const changeSelectValue = (e: ChangeEvent<HTMLSelectElement>) => {
        getPacksValue(Number(e.currentTarget.value))
    }

    return (
        <div>
            <select onChange={changeSelectValue}>
                {packsValueFromState && packsValueForSelect.map(el => {
                    return <option > { el }</option>
                })}
        </select>
        </div >
    )
})