import { useState } from "react";
import Input from "../../components/Input"
import Button from "../../components/Button";
import { TbBrandTelegram } from "react-icons/tb";

const TransferForm = () => {
    const [transferDetails, setTransferDetails] = useState({
        amount: "",
        receiver: "",
    });

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTransferDetails({
            ...transferDetails,
            amount: e.target.value,
        });
    };

    return (
        <div className="flex items-center">
            <label className="text-lightBlue">Write Amount</label>
            <div className="relative">
                <Input
                    placeholder="Amount"
                    value={transferDetails.amount.toString()}
                    onChange={handleAmountChange}
                    className="relative left-30 md:left-12 bg-lightBlue"
                />
                <Button
                    label={<div className="flex items-center gap-3">
                        Send
                        <TbBrandTelegram size={26} />
                    </div>}
                    onClick={() => { }}
                    variant="rounded"
                    className="absolute right-0 md:relative z-10 px-6 md:px-12 md:py-3"
                />
            </div>
        </div>
    )
}
export default TransferForm