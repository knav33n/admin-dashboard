import Card from '../../components/Card';
import UsersCarousel from '../../components/UsersCarousel';
import TransferForm from "./TransferForm";

const QuickTransfer = () => {
  return (
    <Card title="Quick Transfer">
      <div className="py-4 flex flex-col gap-4 h-full justify-between">
        <UsersCarousel />
        <TransferForm />
      </div>
    </Card>
  )
}

export default QuickTransfer;