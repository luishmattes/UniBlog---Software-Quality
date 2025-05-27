import React from "react";
import { RiHomeHeartLine } from "react-icons/ri";
import { BiHappyBeaming } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

interface SideBarProps {
    onNavigate: (page: 'feed' | 'profile') => void;
    onLogout: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({ onNavigate, onLogout }) => {
    return (
        <div className="fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white p-4">
            <nav className="space-y-4">
                <button
                    onClick={() => onNavigate('feed')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-800 rounded flex items-center gap-2"
                >
                    <RiHomeHeartLine />
                    Feed
                </button>
                <button
                    onClick={() => onNavigate('profile')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-800 rounded flex items-center gap-2"
                >
                    <BiHappyBeaming />
                    Perfil
                </button>
                <button
                    onClick={onLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-800 rounded flex items-center gap-2 text-red-400 hover:text-red-300"
                >
                    <FiLogOut />
                    Sair
                </button>
            </nav>
        </div>
    );
};

export default SideBar;
