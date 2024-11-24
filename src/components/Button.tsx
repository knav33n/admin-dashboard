import { ReactNode } from "react";

interface ButtonProps {
    label: ReactNode;
    onClick: () => void;
    variant?: "default" | "rounded";
    className?: string;
}

const Button = ({ label, onClick, variant = "default", className }: ButtonProps) => {
    const borderRadius = variant === "rounded" ? "rounded-[25px]" : "rounded-[15px]";

    return (
        <button
            onClick={onClick}
            className={`px-12 py-3 bg-dark text-white text-[18px] font-medium hover:bg-gray-800 transition-colors ${borderRadius} ${className}`}>
            {label}
        </button>
    )
}
export default Button