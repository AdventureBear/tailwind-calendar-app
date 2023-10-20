import {getWeek, getHours} from "../utils/util"
import React, {useContext} from "react";
import GlobalContext from "../context/GlobalContext";
import Day from "./Day";
import range from '../utils/util'

const Week = ({week: currentWeek}) => {
    const {
        minionSelectedDay
    } = useContext(GlobalContext)

    const week = getWeek(minionSelectedDay)
    const hours = getHours()
    console.log(hours)
    console.log(week)

    return (
        <div className="flex-1 flex bg-gray-100 p-4">

        {/*<div className="flex-1 flex">*/}

            <div className="flex flex-col">
                <div className="grid grid-cols-1 grid-rows-24">
                    {Array.from({ length: 24 }).map((_, hourIndex) => (
                        <div key={hourIndex} className="flex-1">
                            {hourIndex}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-1 grid grid-cols-7 grid-rows-1">
            {week.map((day, i) => (
                <header key={i} className="flex flex-col items-center">
                    <p className="text-sm mt-1">{day.format('ddd').toUpperCase()}</p>
                    <p className={`text-sm p-1 my-1 text-center`}>{day.format('DD')}</p>
                </header>
            ))}
        </div>

            <div className="flex-1 grid grid-cols-7 grid-rows-1">
                {week.map((day, i) => (
                    <Day
                        hourly={true}
                        key={i}
                        day={day}
                        rowIndex={i}
                    />
                ))}
            </div>
            {/*<div className="flex-1 grid grid-cols-7 grid-rows-1">*/}
            {/*    {week.map((day,i) => (*/}
            {/*<header key={i} className="flex flex-col items-center">*/}
            {/*        <p className="text-sm mt-1">{day.format('ddd').toUpperCase()}</p>*/}
            {/*    <p className={`text-sm p-1 my-1 text-center`}>{day.format('DD')}</p>*/}

            {/*</header>*/}
            {/*    ))}*/}
            {/*</div>*/}


            {/*<div className="flex-1 grid grid-cols-7 grid-rows-1">*/}
            {/*    {week.map((day,i) => (*/}

            {/*                    <Day*/}
            {/*                        hourly={true}*/}
            {/*                        key={i}*/}
            {/*                        day = {day}*/}
            {/*                        rowIndex={i}*/}
            {/*                    />*/}
            {/*        ))}*/}
            {/*</div>*/}
        {/*</div>*/}
        </div>
    )
}

export default Week;