import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoNotificationsOutline } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router';
import { TiThMenu } from "react-icons/ti";
import Input from './Input';

const PAGE_TITLES = {
    "/": "Overview",
    "/settings": "Settings",
}

const Header = ({ toggleMobileMenu }: { toggleMobileMenu: () => void }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState("");

    const navigateToSettings = () => {
        navigate("/settings");
    };

    return (
        <header className="flex items-center bg-white justify-between px-[30px] py-4 w-100 border-b border-borderGray">
            <button className="md:hidden" onClick={toggleMobileMenu}><TiThMenu size={20} /></button>
            <div>
                <h2 className="text-primary font-bold text-[20px] md:text-[28px]">{PAGE_TITLES[location.pathname]}</h2>
            </div>
            <div className="flex items-center gap-8">
                <div className="relative hidden md:block">
                    <div className="flex items-center bg-secondary rounded-full">
                        <IoSearchOutline size={"1.4rem"} className="ml-2 text-accentBlue relative left-2" />
                        <Input
                            type="search"
                            placeholder="Search for something"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <button className="w-[50px] bg-secondary h-[50px] rounded-full hidden md:flex items-center justify-center" onClick={navigateToSettings}>
                    <IoSettingsOutline size={"1.5rem"} className="text-lightBlue" />
                </button>
                <button className="w-[50px] bg-secondary h-[50px] rounded-full hidden md:flex items-center justify-center">
                    <IoNotificationsOutline size={"1.5rem"} className="text-brightBlue" />
                </button>
                <div className="w-[35px] h-[35px] md:w-[60px] md:h-[60px] rounded-full cursor-pointer overflow-hidden">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/57d3/d250/790e98129931897251abd3915a931233?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TVOtMm8iXreO6hUmcrhrjjFLZQ3qCNa0K9scyh95epsKOOEIw1Mnb-9ShGMvgUoNI7wQu1SqMcTeMTfdtC4ckNdzMNO8nSfHyUY2Hosjf78bmICouEr3W5PiYc094VxOR-s~nn0QAEFXrrsuQC0MGMrthiZBPzx3CTP74EtLxwfnXT2WAH-tyCweL5F3Rj9jtJCSuJ3yJl0l5sFmUiYxE4F9E5n60uy1F6j7EMyd65SWS60HUvke6dThWL-1MDF6cho6-~KgFrqW6hc-tkQF6oxjtsFh3ZaYMk4h0WthmF0qXivjB~H2hbhJs-lgq6XN4c6QakRHYThUWJAOWkJ7Lg__"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </header>
    )
}
export default Header