import Card from "../../components/Card";
import TransactionCard from "../../components/TransactionCard";
import creditCardsIcon from "../../assets/credit-cards.svg";
import paypalIcon from "../../assets/paypal.svg";
import usdIcon from "../../assets/usd.svg";

const RecentTransactions = () => {
    const transactions = [
        {
            icon: { element: creditCardsIcon, bgColor: "bg-yellow-100" },
            title: "Deposit from my Card",
            date: "28 January 2021",
            amount: "$850",
            isPositive: false,
        },
        {
            icon: { element: paypalIcon, bgColor: "bg-blue-100" },
            title: "Deposit Paypal",
            date: "25 January 2021",
            amount: "$2,500",
            isPositive: true,
        },
        {
            icon: { element: usdIcon, bgColor: "bg-teal-100" },
            title: "Jemi Wilson",
            date: "21 January 2021",
            amount: "$5,400",
            isPositive: true,
        },
    ];

    return (
        <Card title="Recent Transactions">
            {transactions.map((transaction, index) => (
                <TransactionCard key={index} {...transaction} />
            ))}
        </Card>
    )
}
export default RecentTransactions;