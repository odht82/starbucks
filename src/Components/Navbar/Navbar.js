import React from 'react';
import user from "../../Assets/user.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsFillCaretDownFill } from "react-icons/bs";

const Navbar = () => {
    return (
        <div className="w-full bg-skin-white p-3 flex justify-between items-center z-10">
            {/* ===Logo section===  */}
            <div className="h-full flex items-center justify-start w-6/12
                md:w-1/12 md:mx-4
                lg:w-2/12 lg:mx-4">
                {/* ===Logo Label===  */}
                <p className="m-2 text-sm font-medium">Starbucks</p>
                {/* ===Logo mark===  */}
                <BsFillCaretDownFill className="md:m-2 lg:m-2" />
            </div>
            {/* ===Search Section===  */}
            <div className="h-full hidden
                md:w-5/12 md:flex md:item-center md:justify-center
                lg:w-6/12 lg:flex md:item-center lg:justify-start">
                <div className="outline-none h-10 rounded-lg border-none bg-skin-neutral-2
                    md:w-8/12 
                    lg:w-6/12">
                    <div className="w-full">
                        {/* ===Search bar===  */}
                        <label className="relative block">
                            {/* ===Search bar icon===  */}
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <IoSearchOutline className="h-5 w-5 text-neutral-8 focus:text-primary-2" />
                            </span>
                            {/* ===Search bar input===  */}
                            <input
                                className="shadow-sm focus:border-skin-primary-2 focus:outline-none block w-full rounded-lg border-none bg-skin-neutral-2 py-2 pl-9 pr-3 text-sm placeholder:text-neutral-8 focus:placeholder-transparent focus:ring-1 focus:ring-primary-2 sm:text-sm"
                                placeholder="Search"
                                type="text"
                                aria-label="search"
                            />
                        </label>
                    </div>
                </div>
            </div>
            {/* ===User Section===  */}
            <div className="h-full flex items-center justify-end w-6/12
                md:w-4/12 md:mx-3
                lg:w-4/12 lg:mx-3">
                {/* ===Notification button===  */}
                <button
                    aria-label="notification button"
                    className="h-6 w-6
                    md:mx-2
                    lg:mx-2">
                    <IoMdNotificationsOutline className="h-6 w-6" />
                </button>
                {/* ===User Image===  */}
                <div className="mx-2 rounded-full">
                    <img
                        src={user}
                        className="h-8 w-8 rounded-full object-cover"
                        alt="User profile"
                    />
                </div>
                {/* ===User Button===  */}
                <button
                    aria-label="Down arrow icon"
                    className="flex items-center justify-start
                    md:mr-4
                    lg:mr-4">
                    <p className="
                        md:m-2
                        lg:m-2 
                        text-xs font-medium"
                    >John Doe</p>
                    <BsFillCaretDownFill className="ml-2 md:m-2 lg:m-2" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;