interface IconProps {
    element: string;
    bgColor: string;
};

interface TransactionCardProps {
    icon: IconProps;
    title: string;
    date: string;
    amount: string;
    isPositive: boolean;
};

const TransactionCard = ({ icon, title, date, amount, isPositive }: TransactionCardProps) => {
    return (
        <div className="flex items-center justify-between mb-4 gap-6">
            <div className="flex items-center space-x-4">
                <div className={`w-[55px] h-[55px] rounded-full flex items-center justify-center ${icon.bgColor}`}>
                    <img src={icon.element} alt={title} />
                </div>
                <div>
                    <div className="font-semibold">{title}</div>
                    <div className="text-[15px] text-lightBlue">{date}</div>
                </div>
            </div>
            <div className={`font-semibold ${isPositive ? "text-successGreen" : "text-errorRed"}`}>
                {isPositive ? `+${amount}` : `-${amount}`}
            </div>
        </div>
    );
};

export default TransactionCard;