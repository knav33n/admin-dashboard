import { ReactNode, useState } from 'react';

interface Tab {
    label: string;
    content: ReactNode;
}

interface TabInterfaceProps {
    tabs: Tab[];
}

const TabInterface = ({ tabs }: TabInterfaceProps) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white p-[30px] rounded-[25px]">
            <div className="flex border-b border-gray-300 gap-1 md:gap-6">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`text-[13px] md:text-[16px] py-2 px-4 font-semibold ${activeTab === index
                            ? 'text-dark border-b-2 border-dark'
                            : 'text-lightBlue'
                            }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="mt-4 md:p-[30px]">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default TabInterface;
