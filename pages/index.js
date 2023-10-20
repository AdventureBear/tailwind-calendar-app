
import React, {useState, useEffect, useReducer, useContext} from 'react'
import {getMonth} from "../utils/util";
import dayjs from "dayjs";
import Month from "../components/Month";
import Sidebar from "../components/Sidebar";
import EventModal from "../components/EventModal";
import GlobalContext from "../context/GlobalContext";
import HeaderRows from "../components/HeaderRows";
import Week from "../components/Week";
import Daily from "../components/Daily";
import Team from "../components/Team"
import Week2 from "../components/Week2";



const HomePage = () => {

    const {
        dowStart,
        setDowStart,
        minionMonthIndex,
        initEvents,
        events,
        error,
        isPending,
        primaryMonthIndex,
        setPrimaryMonthIndex,
        calendarView
    } = useContext(GlobalContext);


    //Local State
    const [currentMonth, setCurrentMonth] = useState(getMonth(primaryMonthIndex))
    const [currentWeek, setCurrentWeek] = useState(dayjs().week())
    const handlePrevMonth = () => {
       const newMonth = primaryMonthIndex -1
        setPrimaryMonthIndex(newMonth)
    }

    const handleNextMonth = () => {
        const newMonth = primaryMonthIndex + 1
        setPrimaryMonthIndex(newMonth)
    }

    const handleReset = () =>{
        const currentMonth = dayjs().month()
        setPrimaryMonthIndex(
            currentMonth === dayjs().month()
                ? currentMonth + Math.random()
                : dayjs().month()
        )
    }

    useEffect(() => {
        if (events) initEvents()
    }, [events]);

    // console.log(events)

    useEffect(() => {
        setCurrentMonth(getMonth(primaryMonthIndex, dowStart))
    }, [primaryMonthIndex]);

    useEffect(() => {
        setPrimaryMonthIndex(minionMonthIndex)
    }, [minionMonthIndex]);



  return (
      <>
          {error && <div>Error</div>}
          {isPending && <div>Loading...</div>}
          {events && <>
          <EventModal />
          <div className="h-screen flex flex-col">
              <HeaderRows
                  handlePrevMonth = {handlePrevMonth}
                  handleNextMonth = {handleNextMonth}
                  handleReset = {handleReset}
              />
              <div className="flex flex-1 pb-6">
                  <Sidebar />
                  {calendarView==="month" &&
                  <Month
                       month={currentMonth}
                  />
                  }
                  {calendarView==="weekly" &&
                      <div className="flex-1">
                          <div className="h-[680px] overflow-y-auto" >
                              <Week week={currentWeek} />
                          </div>
                      </div>
                  }
                  {calendarView==="daily" &&
                      <Daily />
                  }
                  {calendarView==="team" &&
                      <Team />
                  }
              </div>
          </div>
          </>}
      </>

  )
}

export default HomePage