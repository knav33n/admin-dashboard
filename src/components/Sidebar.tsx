import { IoMdClose, IoMdSettings } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import logo from "../assets/logo.svg";
import SidebarLink from './SidebarLink';


interface SidebarProps {
    showMobileMenu: boolean;
    toggleMobileMenu: () => void;
}

const Sidebar = ({ showMobileMenu, toggleMobileMenu }: SidebarProps) => {
    const sidebarLinks = [
        { path: "/", title: "Dashboard", icon: <IoHomeSharp /> },
        { path: "/transactions", title: "Transactions", icon: <GrTransaction /> },
        { path: "/accounts", title: "Accounts", icon: <FaUser /> },
        { path: "/investments", title: "Investments", icon: <IoLogoUsd /> },
        { path: "/credit-cards", title: "Credit Cards", icon: <FaCreditCard /> },
        { path: "/loans", title: "Loans", icon: <FaHandHoldingUsd /> },
        { path: "/services", title: "Services", icon: <IoMdSettings /> },
        { path: "/my-privileges", title: "My Privileges", icon: <IoMdSettings /> },
        { path: "/settings", title: "Settings", icon: <IoMdSettings /> },
    ]

    return (
        <aside
            className={`${showMobileMenu ? "w-full" : "hidden"} md:w-64 bg-white h-full transition-all duration-300 border-r border-borderGray md:block fixed top-0 left-0 z-20`}
        >
            <div className="flex items-center justify-center p-4 relative">
                <img src={logo} alt="logo" />
                <span className={`ml-2 text-[20px] md:text-[25px] text-primary font-bold`}>
                    Soar Task
                </span>
                <button className="md:hidden absolute top-2 right-1 p-2 rounded-full" onClick={toggleMobileMenu}>
                    <IoMdClose size={20} />
                </button>
            </div>
            <nav>
                <ul className="mt-8">
                    {sidebarLinks.map((link) => (
                        <SidebarLink
                            key={link.title}
                            link={link.path}
                            title={link.title}
                            icon={link.icon}
                        />
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
