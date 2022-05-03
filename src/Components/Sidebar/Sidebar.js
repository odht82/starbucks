import React from 'react';
import { RiHome2Line } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import { VscFileSubmodule } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
    return (
        <div
            className="w-full p-6 z-10 items-center flex bg-white h-20 absolute bottom-0
        md:overflow-hidden md:border-r-2 md:bg-skin-neutral-2 md:flex md:flex-col md:w-24 md:static md:p-6 md:h-full
        lg:overflow-hidden lg:border-r-2 lg:bg-skin-neutral-2 lg:flex lg:flex-col lg:w-1/6 lg:static lg:p-6 lg:h-full"
        >
            <div
                className="w-full h-full flex bg-white justify-between items-center
          md:bg-skin-neutral-2 md:flex md:flex-col md:justify-start md:static md:w-24
          lg:w-full"
            >
                <button
                    className="my-2 flex h-10 items-center rounded text-left text-sm font-medium text-neutral hover:bg-white hover:text-primary 
            w-8 p-0 drop-shadow-none
            md:w-10 md:p-2 md:hover:shadow-btn
            lg:w-full lg:p-2 lg:hover:shadow-btn
            "
                    aria-label="Dashboard navigation button"
                >
                    <span className="py-[2px]">
                        <RiHome2Line className="h-6 w-6
              lg:mx-1
              " />
                    </span>
                    <p className="mx-1 hidden md:hidden lg:inline ">Dashboard</p>
                </button>
                <button
                    className="my-2 flex h-10 items-center rounded text-left text-sm font-medium bg-white text-primary 
            w-8 p-0 drop-shadow-none
            md:w-10 md:p-2 md:shadow-btn
            lg:w-full lg:p-2 lg:shadow-btn
            "
                    aria-label="Inventory navigation button"
                >
                    <span className="py-[2px]">
                        <IoDocumentTextOutline className=" h-6 w-6
              lg:mx-1" />
                    </span>
                    <p className="mx-1 hidden md:hidden lg:inline">Inventory</p>
                </button>
                <button
                    className="my-2 flex h-10 items-center rounded text-left text-sm font-medium text-neutral hover:bg-white hover:text-primary 
            w-8 p-0 drop-shadow-none
            md:w-10 md:p-2 md:hover:shadow-btn
            lg:w-full lg:p-2 lg:hover:shadow-btn
            "
                    aria-label="Documents navigation button"
                >
                    <span className="py-[2px]">
                        <VscFileSubmodule className="h-6 w-6
              lg:mx-1" />
                    </span>
                    <p className="mx-1 hidden md:hidden lg:inline">Documents</p>
                </button>
                <button
                    className="my-2 flex h-10 items-center rounded text-left text-sm font-medium text-neutral hover:bg-white hover:text-primary 
            w-8 p-0 drop-shadow-none
            md:w-10 md:p-2 md:hover:shadow-btn
            lg:w-full lg:p-2 lg:hover:shadow-btn
            "
                    aria-label="Settings navigation button"
                >
                    <span className="py-[2px]">
                        <IoSettingsOutline className="h-6 w-6
              lg:mx-1" />
                    </span>
                    <p className="mx-1 hidden md:hidden lg:inline">Settings</p>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;