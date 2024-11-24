import { useState } from "react";
import CreditCard from "../../components/CreditCard";

const Cards = () => {
    const [showAllCards, setShowAllCards] = useState(false);
    const creditCards = [
        {
            balance: "$5,756",
            cardHolder: "Eddy Cusuma",
            validThru: "12/22",
            cardNumber: "3778 **** **** 1234"
        },
        {

            balance: "$5,756",
            cardHolder: "Eddy Cusuma",
            validThru: "12/22",
            cardNumber: "3778 **** **** 1234"
        },
        {

            balance: "$5,756",
            cardHolder: "Eddy Cusuma",
            validThru: "12/22",
            cardNumber: "3778 **** **** 1234"
        },
        {

            balance: "$5,756",
            cardHolder: "Eddy Cusuma",
            validThru: "12/22",
            cardNumber: "3778 **** **** 1234"
        }
    ];

    const toggleShowAllCards = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setShowAllCards(!showAllCards);
    }

    return (
        <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-primary font-bold text-2.5xl">My Cards</h2>
                <a href="/" className="text-primary font-bold text-[17px]" onClick={toggleShowAllCards}>{showAllCards ? "See Less" : "See All"}</a>
            </div>
            <div className={`flex gap-7 w-full ${showAllCards ? "":"h-[235px]"} overflow-hidden flex-wrap`}>
                {creditCards.map((card, index) => (
                    <CreditCard key={index} variant={index === 0 || index === 2 ? "black" : "white"} details={card} />
                ))}
            </div>
        </div>
    )
}
export default Cards