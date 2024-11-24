import BalanceHistory from "./BalanceHistory"
import CreditCards from "./CreditCards"
import ExpenseStatistics from "./ExpenseStatistics"
import QuickTransfer from "./QuickTransfer"
import RecentTransactions from "./RecentTransactions"
import WeeklyActivity from "./WeeklyActivity"
import Layout from "../../layouts/Layout"

const Home = () => {
    return (
        <Layout>
            <div className="flex md:flex-row flex-col gap-5 mb-5">
                <CreditCards />
                <div>
                    <RecentTransactions />
                </div>
            </div>
            <div className="flex md:flex-row flex-col gap-5 mb-5">
                <div className="flex-1">
                    <WeeklyActivity />
                </div>
                <ExpenseStatistics />
            </div>
            <div className="flex md:flex-row flex-col gap-5">
                <QuickTransfer />
                <div className="flex-1">
                    <BalanceHistory />
                </div>
            </div>
        </Layout>
    )
}
export default Home