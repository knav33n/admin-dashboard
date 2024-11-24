interface InputProps {
    type?: "search" | "text";
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const Input = ({ type = "text", placeholder, value, onChange, className }: InputProps) => {
    return (
        <input
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            className={`bg-paleBlue md:bg-secondary rounded-full px-[20px] py-[13px] ml-2 outline-none text-primary placeholder-accentBlue ${className}`}
        />
    )
}
export default Input