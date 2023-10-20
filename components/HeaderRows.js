//libraries
import dayjs from "dayjs";

//hooks
import { useContext } from 'react'

//context
import GlobalContext from "../context/GlobalContext";

//components
import Breadcrumbs from "./Breadcrumbs";
const HeaderRows = ({handlePrevMonth, handleNextMonth, handleReset}) => {
    const {primaryMonthIndex, setCalendarView} = useContext(GlobalContext)

    return (
        <header className="px-4 py-2 mb-2  flex justify-between items-center flex-wrap bg-white shadow-xl">
            <div className="flex items-center mb-2">
                <img src="sce-logo-dark-reflect1.png" alt="SCE Logo" className="mr-2 w-24 h-18"></img>

                <button
                    className="py-2 px-4 mx-5 rounded border"
                    onClick={handleReset}
                >Today</button>
                <button  className="py-2 px-4 mx-5 rounded border flex items-center"
                         onClick={handlePrevMonth}>
                    <span className="material-symbols-outlined cursor-pointer text-gray-600 ">
                        chevron_left
                    </span>
                </button>
                <button className="py-2 px-4 mx-2 rounded border flex items-center"
                        onClick={handleNextMonth}>
                    <span className="material-symbols-outlined cursor-pointer text-gray-600 mx-s">
                        chevron_right
                    </span>
                </button>


            </div>
            <div className="flex-grow ">
                <h2 className="text-xl text-gray-400 font-bold mx-6">
                    {dayjs(new Date(dayjs().year(), primaryMonthIndex)).format("MMMM YYYY")}
                </h2>
            </div>
            <div className="flex">
                <button
                    className="py-2 px-4 mx-2 rounded border flex items-center"
                    onClick={()=>setCalendarView("month")}
                >Month</button>
                <button
                    className="py-2 px-4 mx-2 rounded border flex items-center"
                    onClick={()=>setCalendarView("weekly")}
                >Week</button>
                <button
                    className="py-2 px-4 mx-2 rounded border flex items-center"
                    onClick={()=>setCalendarView("daily")}
                >Day</button>
                <button className="py-2 px-4 mx-2 rounded border flex items-center"
                        onClick={()=>setCalendarView("team")}
                >Team</button>
            </div>
            <div className="flex w-full mt-4">
                <div className="flex-grow m-2">
                    <Breadcrumbs />
                </div>
                <div className="flex-grow p-4 border border-gray-300 m-2">Row 2 Content</div>
                <div className="flex-grow p-4 border border-gray-300 m-2">Row 3 Content</div>
                <div className="flex-grow p-4 border border-gray-300 m-2">Row 4 Content</div>
            </div>
        </header>
    );

}

export default HeaderRows;