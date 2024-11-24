interface InputProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    type?: "text" | "password" | "email";
}

const InputWithLabel = ({ label, value, onChange, name, type = "text" }: InputProps) => {
    return (
        <div className="w-full">
            <label className="block mb-2">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                className="w-full px-5 py-4 text-[15px] rounded-[15px] border border-borderGray text-lightBlue"
                onChange={onChange}
            />
        </div>
    )
}
export default InputWithLabel;