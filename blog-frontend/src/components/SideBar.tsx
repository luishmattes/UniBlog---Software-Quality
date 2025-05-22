import React from "react";
import { RiHomeHeartLine, RiCameraAiLine } from "react-icons/ri";
import { BiSearchAlt, BiHappyBeaming } from "react-icons/bi";

export const SideBar: React.FC = () => {
    return (
        <div className="fixed bottom-2 left-1/2 -translate-x-1/2 bg-neutral-600 rounded-t-2xl px-6 py-3 w-[100%] max-w-md flex justify-between items-center border-t border-black shadow-md">
            <RiHomeHeartLine className="text-black text-2xl" />
            <BiSearchAlt className="text-black text-2xl" />
            <RiCameraAiLine className="text-black text-2xl" />
            <BiHappyBeaming className="text-black text-2xl" />
        </div>
    );
};

export default SideBar;
