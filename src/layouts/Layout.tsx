import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <div className="flex h-screen">
            <Sidebar showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />
            <section className="flex-1 flex flex-col md:ml-64">
                <Header toggleMobileMenu={toggleMobileMenu} />
                <main className="flex-1 p-[25px] md:p-[30px]">
                    {children}
                </main>
            </section>
        </div>
    )
}

export default Layout