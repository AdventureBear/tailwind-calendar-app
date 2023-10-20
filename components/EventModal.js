import {useState, useEffect} from "react";
import { useFetch } from '../hooks/useFetch'
import {useContext} from "react";
import GlobalContext from "../context/GlobalContext";

const labelsClasses = {
    "indigo": "bg-indigo-400",
    "green": "bg-green-400",
    "yellow": "bg-yellow-400",
    "orange": "bg-orange-400",
    "red": "bg-red-400",
    "violet": "bg-violet-400"
}


const EventModal = () => {

    const {
        showEventModal,
        setShowEventModal,
        daySelected,
        dispatchCalEvent,
        selectedEvent,
        setSelectedEvent
    } = useContext(GlobalContext)



    const [title, setTitle] = useState(
        selectedEvent  ? selectedEvent.title : ""
    );
    const [description, setDescription] = useState(
        selectedEvent   ? selectedEvent.description : ""
    );
    const [selectedLabel, setSelectedLabel] = useState(
        selectedEvent
            ? Object.keys(labelsClasses).find((lbl) => lbl === selectedEvent.label)
            : Object.keys(labelsClasses)[0]
    );


    useEffect(() => {
        if (selectedEvent === null) {
            setTitle("");
            setDescription("");
            setSelectedLabel(Object.keys(labelsClasses)[0]);
        } else if (selectedEvent) {
            setTitle(selectedEvent.title);
            setDescription(selectedEvent.description);
            setSelectedLabel(selectedEvent.label);
        }
    }, [selectedEvent]);


    const {postData, putData, deleteData, data, error } = useFetch('http://localhost:3000/events', 'POST')


        const handleDelete = async () => {
            if (selectedEvent) {
                const id = selectedEvent.id
                try {
                    console.log("trying delete")
                    await deleteData(`http://localhost:3000/events/${selectedEvent.id}`);
                    dispatchCalEvent({type: 'delete', payload: selectedEvent});
                    setShowEventModal(false);
                } catch (error) {
                    console.error('Error:', error);
                }
            }
        }


    const handleSubmit = (e) => {
        e.preventDefault()

        const calendarEvent = {
            title,
            description,
            label: selectedLabel,
            day: daySelected.valueOf(),
            id: selectedEvent? selectedEvent.id : Date.now()
        }

        // postData(calendarEvent)

        if (selectedEvent) {
            putData(`http://localhost:3000/events/${selectedEvent.id}`, calendarEvent)
                .then(updatedEvent => {
                    console.log("successfully updated")
                    dispatchCalEvent({type: 'update', payload: updatedEvent});
                })
                .catch(error => console.error('Error:', error));
        } else {
            postData(calendarEvent)
                .then(newEvent => {
                    dispatchCalEvent({type: 'push', payload: calendarEvent})

                })
        }


        setShowEventModal(false)
        setTitle('')
        setDescription('')
        setSelectedLabel('indigo')
    }

    return (
        <>
            {showEventModal &&
                <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
                    <form  onSubmit={ handleSubmit} className="bg-white rounded-lg shadow-2xl w-1/4">
                        <header className="bg-gray-100 px-4 py-2 flex justify-between">
                            <span className="material-symbols-outlined text-gray-400">
                                drag_handle
                            </span>
                            <div>
                                <span
                                    className="material-symbols-outlined text-gray-400 cursor-pointer"
                                    onClick={()=>{
                                        handleDelete()
                                        setShowEventModal(false)
                                    }}
                                >
                                    delete
                                </span>
                            <button
                                onClick={()=>{
                                    setSelectedEvent(null)
                                    setShowEventModal(false)
                                }}>
                                <span className="material-symbols-outlined text-gray-400">
                                    close
                                </span>
                            </button>
                            </div>
                        </header>
                        <div className="p-3">
                            <div className="grid grid-cols-1/5 items-end gap-y-7">
                                <div>
                                </div>
                                <input
                                    className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                                    type="text"
                                    placeholder="Add title"
                                    value={title}
                                    required
                                    onChange={ (e) => setTitle(e.target.value)}
                                />
                                <span className="material-symbols-outlined text-gray-400">
                                    schedule
                                </span>

                                <p>{daySelected.format("dddd, MMMM DD")}</p>
                                <span className="material-symbols-outlined text-gray-400">
                                    segment
                                </span>
                                <input
                                    className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                                    type="text"
                                    placeholder="Add Description"
                                    value={description}
                                    required
                                    onChange={ (e) => setDescription(e.target.value)}
                                />
                                <span className="material-symbols-outlined text-gray-400">
                                    bookmark_border
                                </span>
                                <div className="flex gap-x-2">
                                    {Object.keys(labelsClasses).map((key, i) => {
                                        const labelClassName= labelsClasses[key] + ' w-6 h-6 rounded-md flex items-center justify-center cursor-pointer'
                                        return (
                                            <span key={i} className={labelClassName}
                                            onClick={()=> setSelectedLabel(key)}>
                                                {selectedLabel===key &&
                                                <span className="material-symbols-outlined text-white">
                                                     check
                                                </span>
                                                }
                                            </span>
                                    )})
                                    }
                                </div>
                            </div>
                        </div>
                        <footer className="flex justify-end w-100 border-t p-3 mt-5">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white">
                                Submit
                            </button>
                        </footer>
                    </form>

                </div>
            }
        </>

    );
};

export default EventModal;
