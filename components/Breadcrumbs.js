import styles from './Breadcrumbs.module.css'


function Breadcrumbs(props) {
    return (
        <nav className={`overflow-hidden list-none ${styles.breadcrumb}`}>
            <div className="mx-auto px-2 h-11">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        {/*Primary Navbar items */}

                        <div className="hidden md:flex items-center space-x-1">
                            <ul className="flex">
                                <li>

                                    <a href="#" className="text-white no-underline px-2 py-2 relative inline-block rounded-tl-xl rounded-bl-2xl">
                                    <span className="material-symbols-outlined">
                                        home
                                    </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="py-2 px-2 text-gray-900 bg-gray-200 relative inline-block"
                                    >Home</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="py-2 px-2 text-gray-900 bg-gray-200 relative inline-block"
                                    >Training Calendar</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="py-2 px-2 text-gray-900 bg-gray-200 relative inline-block"
                                    >View, Add, Edit Workouts</a
                                    >
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Breadcrumbs;