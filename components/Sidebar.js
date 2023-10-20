import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import {useContext} from "react";
import GlobalContext from "../context/GlobalContext";
import Labels from "./Labels";
const Sidebar = () => {

    const {
        showEventModal,
        setShowEventModal,
        primaryMonthIndex,
        minionMonthIndex,
        setMinionMonthIndex,
        dowStart,
        setMinionSelectedDay,
        minionSelectedDay,
        setDaySelected
    } = useContext(GlobalContext)


    return (
        <aside className="border p-5 w-64">
            <CreateEventButton
                showEventModal={showEventModal}
                setShowEventModal={setShowEventModal}
            />
            <SmallCalendar
                primaryMonthIndex = {primaryMonthIndex}
                minionMonthIndex = {minionMonthIndex}
                setMinionMonthIndex = {setMinionMonthIndex}
                dowStart={dowStart}
                setDaySelected={setDaySelected}
            />
            <Labels />
        </aside>
    );
};

export default Sidebar;
