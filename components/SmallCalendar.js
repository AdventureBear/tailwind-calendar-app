import React, {useContext, useEffect, useState} from "react";
import dayjs from "dayjs";
import {getMonth} from "../utils/util";
import GlobalContext from "../context/GlobalContext";


const SmallCalendar = ( {primaryMonthIndex, minionMonthIndex, setMinionMonthIndex, dowStart, setDaySelected}) => {
    const {minionSelectedDay, setMinionSelectedDay} = useContext(GlobalContext)


    const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month())
    const [currentMonth, setCurrentMonth] = useState(getMonth())

    // console.log("minionSelectedDay:", minionSelectedDay);

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIndex, dowStart))
    }, [currentMonthIndex, dowStart]);

    useEffect(() => {
        setCurrentMonthIndex(primaryMonthIndex)
    }, [primaryMonthIndex]);

    const handlePrevMonth = () => {
        let newIndex = currentMonthIndex -1
        setCurrentMonthIndex(newIndex)
    }

    const handleNextMonth = () => {
        let newIndex = currentMonthIndex + 1
        setCurrentMonthIndex(newIndex)
    }

    const handleMinionDaySelect = (day) => {
        setMinionSelectedDay(day)
        setMinionMonthIndex(currentMonthIndex)
        setDaySelected(day)
    }

    const getDayClass = (day, minionSelectedDay) => {
        const format = "DD-MM-YY"
        const nowDay = dayjs().format(format)
        const renderDay = day.format(format)

        if (nowDay === renderDay ) {
            return 'bg-blue-500 rounded-full text-white'
        } else if (renderDay === minionSelectedDay.format(format)) {
            return 'bg-blue-100 text-black rounded-full'
        } else {
            return  'hover:bg-gray-100 '
        }
    }


    return (
        <div className="mt-9">
            <header className="flex justify-between">
                <p className="text-gray-500 font-bold">
                    {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
                        "MMMM YYYY"
                    )}
                </p>

                <div>
                    <button onClick={handlePrevMonth}>
                        <span className="material-symbols-outlined cursor-pointer text-gray-600 mx-2">
                            chevron_left
                        </span>
                    </button>
                    <button onClick={handleNextMonth}>
                        <span className="material-symbols-outlined cursor-pointer text-gray-600 mx-2">
                            chevron_right
                        </span>
                    </button>
                </div>


            </header>
            <div className="grid grid-cols-7 grid-rows-6">
                {currentMonth[0].map((day, i) => (
                    <span key={i} className = "text-sm py-1 text-center">
                         {day.format('dd').charAt(0)}
                        </span>
                ))}
                {currentMonth.map((row, i) => (
                    <React.Fragment key={i}>
                        {row.map((day, j) => (
                            <button
                                key={j}
                                className={`py-1 w-full ${getDayClass(day, minionSelectedDay)}`}
                                onClick={()=> { handleMinionDaySelect(day)} }
                            >
                                <span className="text-sm">{day.format("D")}</span>
                            </button>
                        ))}
                    </React.Fragment>
                ))}
            </div>
            
        </div>
    );
};

export default SmallCalendar;
