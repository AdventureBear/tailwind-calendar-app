import React, {useState} from 'react'
import dayjs from "dayjs";


const GlobalContext = React.createContext({
    dowStart: 0,
    setDowStart: ()=> {},
    minionMonthIndex: 0,
    setMinionMonthIndex: () => {},
    minionSelectedDay: (day) => {},
    setMinionSelectedDay: () => {},
    showEventModal: false,
    setShowEventModal: () => {},
    daySelected: (day) => {},
    setDaySelected: () => {},
    selectedEvent: null,
    setSelectedEvent: () => {},
    dispatchCalEvent: ({ type, payload }) => {},
    savedEvents: [],
    savedEventsReducer: () => {},
    initEvents: () => {},
    events: [],
    isPending: false,
    error: null,
    primaryMonthIndex: 0,
    setPrimaryMonthIndex: ()=>{},
    setLabels: ()=>{},
    updateLabel: () => {},
    labels: [],
    calendarView: null,
    setCalendarView: ()=> {}

})

export default GlobalContext