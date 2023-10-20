import React, {useContext, useEffect} from 'react'
import Day from "./Day";
import {getMonth} from "../utils/util";
import GlobalContext from "../context/GlobalContext";
const Month = ({month}) => {
    const {
        minionMonthIndex
    } = useContext(GlobalContext);

    useEffect(() => {
       month =  getMonth(minionMonthIndex)
    }, [minionMonthIndex]);

    return (
        <div className="flex-1 grid grid-cols-7 grid-rows-5">
            {month.map((row, i)=> (
                <React.Fragment key={i}>
                    {row.map((day, j)=> (
                        <Day
                            key={j}
                            day = {day}
                            rowIndex={i}

                        />
                    ))}
                </React.Fragment>
            ))}
        </div>
    )
}

export default Month;