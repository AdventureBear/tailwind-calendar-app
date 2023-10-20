//libraries
import dayjs from "dayjs";

//hooks
import { useContext } from 'react'

//context
import GlobalContext from "../context/GlobalContext";

//components
import Breadcrumbs from "./Breadcrumbs";


const CalendarHeader = ({handlePrevMonth, handleNextMonth, handleReset}) => {
    const {primaryMonthIndex} = useContext(GlobalContext)

    return (
         <header className="px-4 py-2 mb-2 flex items-start flex-col justify-start bg-white shadow-xl ">
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
                <h2 className="text-xl text-gray-400 font-bold mx-6">
                    {dayjs(new Date(dayjs().year(), primaryMonthIndex)).format("MMMM YYYY")}
                </h2>
            </div>


            <div>
                <Breadcrumbs />
            </div>


        </header>


    );
};

export default CalendarHeader;


// https://www.section.io/engineering-education/creating-a-responsive-navigation-bar-using-tailwind-css-and-javascript/