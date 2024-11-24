import { cloneElement, ReactNode } from "react";
import { NavLink, useLocation } from "react-router";

interface SidebarLinkProps {
    link: string;
    title: string;
    icon: ReactNode;
}

const SidebarLink = ({ link, title, icon }: SidebarLinkProps) => {
    const location = useLocation();
    const isActive = location.pathname === link;
    const alteredIcon = cloneElement(
        icon as React.ReactElement,
        {
            color: isActive ? "232323" : "#B1B1B1",
            size: "1.5rem"
        }
    );

    return <li>
        <NavLink
            to={link}
            className={({ isActive }) => isActive ?
                "flex gap-4 py-4 px-10 border-l-4 border-black text-[18px] cursor-pointer"
                : "flex gap-2 py-4 px-10 hover:border-l-4 hover:border-black text-[18px] cursor-pointer text-gray"}
            end
        >
            {alteredIcon}
            <span>{title}</span>
        </NavLink>
    </li>
}

export default SidebarLink;