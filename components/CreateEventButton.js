

const CreateEventButton= ({ showEventModal, setShowEventModal}) => {
    return (
        <button
            className="border p-3 pe-4 rounded-full flex items-center shadow-md hover:shadow-2xl mx-2"
            onClick={()=> {setShowEventModal(true)}}>
            <span className="material-symbols-outlined cursor-pointer text-gray-600 mx-s">
                    add
                </span>
       <span className="px-3"> Create</span>

        </button>
    );
};

export default CreateEventButton;
