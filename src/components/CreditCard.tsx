import CCChip from "../assets/cc-chip.png";
import CCDarkChip from "../assets/cc-dark-chip.png";
import CCLogo from "../assets/cc-logo.png";
import CCDarkLogo from "../assets/cc-logo-dark.png";

interface CreditCardProps {
    variant?: "white" | "black";
    details?: {
        balance: string;
        cardHolder: string;
        validThru: string;
        cardNumber: string;
    };
}

const CreditCard = ({ variant = "black", details }: CreditCardProps) => {
    const { balance, cardHolder, validThru, cardNumber } = details || {};
    const chipImg = variant === "black" ? CCChip : CCDarkChip;
    const bgColor = variant === "black" ? "bg-gradient-to-br from-[#5B5A6F] to-[#000000]" : "bg-white border border-borderGray";
    const textColor = variant === "black" ? "text-white" : "text-primary";
    const border = variant === "black" ? "bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.15)_0%,_rgba(255,_255,_255,_0)_100%)]" : "border-t border-borderGray";
    const ccLogo = variant === "white" ? CCDarkLogo : CCLogo;

    return (
        <div className={`h-[235px] w-[350px] rounded-[25px] ${bgColor} pt-5 ${textColor} flex flex-col justify-between`}>
            <div className="flex justify-between items-center px-5">
                <div>
                    <div className="text-xs text-gray-300">Balance</div>
                    <div className="text-xl font-bold">{balance}</div>
                </div>
                <div className="text-3xl">
                    <img src={chipImg} className="w-[35px] h-[35px]" />
                </div>
            </div>
            <div className="flex gap-[50px] mt-4 px-5">
                <div>
                    <div className="text-xs text-gray-400">CARD HOLDER</div>
                    <div className="text-[15px] font-semibold mt-1">{cardHolder}</div>
                </div>
                <div>
                    <div className="text-xs text-gray-400">VALID THRU</div>
                    <div className="text-[15px] font-semibold mt-1">{validThru}</div>
                </div>
            </div>
            <div className={`flex justify-between items-center mt-4 ${border} p-[17px]`}>
                <div className="text-[22px]">{cardNumber}</div>
                <div className="text-xl">
                    <img src={ccLogo} alt="cc-logo" className="w-[44px] h-[30px]" />
                </div>
            </div>
        </div>
    );
};

export default CreditCard;
