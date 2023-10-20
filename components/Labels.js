
import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";


const labelsClasses = {
    "indigo": "accent-indigo-400",
    "green": "accent-green-400",
    "yellow": "accent-yellow-400",
    "orange": "accent-orange-400",
    "red": "accent-red-400",
    "violet": "accent-violet-400"
}

const Labels = () => {

    const getLabelsClass = (label) => {
        return labelsClasses[label]
    }
    const {labels, updateLabel} = useContext(GlobalContext)
    return (
        <React.Fragment>

                    <p className="text-gray-500 font-bold mt-10">Labels: </p>

                {labels.map(({label: lbl, checked}, i)=> (

                    // <label key={i} className="items-center mt-3 block">
                    //     <input
                    //         type="checkbox"
                    //         checked={checked}
                    //         onChange={() =>
                    //             updateLabel({ label: label, checked: !checked })
                    //         }
                    //         className={`form-checkbox h-5 w-5 ${getLabelsClass(label)} rounded focus:ring-0 cursor-pointer`}
                    //     />
                    //     <span className="ml-2 text-gray-700 capitalize">{label}</span>
                    // </label>



                    <label key={i}
                           className="items-center mt-3 block">
                        <input
                            onChange={() => updateLabel({label: lbl, checked: !checked})}
                            className={`form-checkbox h-5 w-5 ${getLabelsClass(lbl)} rounded focus:ring-0 cursor-pointer`}
                            checked={checked}
                            type="checkbox"
                        />

                        <span className={`ml-2 text-gray-700 capitalize`}>
{lbl}</span>
                    </label>
                ))}


        </React.Fragment>
    )
}

export default Labels;