'use client'

import  GlobalContext  from "./GlobalContext";
import { useReducer, useState, useEffect} from "react";
import dayjs from "dayjs";
import {useFetch} from "../hooks/useFetch";



const ContextWrapper = ({children}) => {
    function savedEventsReducer(state, {type, payload}) {
        switch (type) {
            case 'push':
                console.log("State: ", [...state,payload])
                return [...state, payload]
            case 'update':
                return state.map(evt => evt.id === payload.id ? payload : evt)
            case 'delete':
                return state.filter(evt => evt.id !== payload.id)
            case 'init' :
                return payload //initialize state with parsed events
            default:
                throw new Error()
        }
    }

    const { data: events , isPending, error} = useFetch('http://localhost:3000/events')


    const initEvents =  () => {
        const parsedEvents = events
        // console.log("Parsed Events", parsedEvents)
        dispatchCalEvent({ type: 'init', payload: parsedEvents });
    }


    const [testDay, setTestDay] = useState(dayjs().format("MM DD YY"));
    const [savedEvents, dispatchCalEvent] = useReducer(savedEventsReducer, events)


    //Day of Week start Sunday = 0, Monday = 1
    const [dowStart, setDowStart] = useState(0)
    const [minionMonthIndex, setMinionMonthIndex] = useState(dayjs().month())
    const [minionSelectedDay, setMinionSelectedDay] = useState(dayjs());
    const [showEventModal, setShowEventModal] = useState(false)
    const [daySelected, setDaySelected] = useState(dayjs())
    const [selectedEvent, setSelectedEvent] = useState(null)
    const [labels, setLabels] = useState([]);
    const [calendarView, setCalendarView] = useState("month")
    console.log("Selected Week:", minionSelectedDay.week())

    const [primaryMonthIndex, setPrimaryMonthIndex] = useState(dayjs().month())


    useEffect(() => {
        if (savedEvents) {
            const uniqueLabels = [...new Set(savedEvents.map(evt=> evt.label))]
            setLabels((prev)=> {
               return uniqueLabels.map(
                   (label)=> {
                        const currentLabel = prev.find(
                            (lbl) => lbl.label === label
                        )
                       return  {
                            label,
                            checked : currentLabel ? currentLabel.checked : true,
                        }
                   }
               )
            })
    } }, [savedEvents]);


    const  updateLabel= (label) => {
        setLabels(
            labels.map((lbl) => (lbl.label === label.label ? label : lbl))
        );
    }

    useEffect(() => {
        if (!showEventModal) {
            setSelectedEvent(null);
        }
    }, [showEventModal]);


    return (
        <GlobalContext.Provider
            value={{
                dowStart,
                setDowStart,
                minionMonthIndex,
                setMinionMonthIndex,
                minionSelectedDay,
                setMinionSelectedDay,
                showEventModal,
                setShowEventModal,
                daySelected,
                setDaySelected,
                selectedEvent,
                setSelectedEvent,
                savedEvents,
                dispatchCalEvent,
                savedEventsReducer,
                initEvents,
                events,
                isPending,
                error,
                primaryMonthIndex,
                setPrimaryMonthIndex,
                setLabels,
                updateLabel,
                labels,
                calendarView,
                setCalendarView
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default ContextWrapper;
