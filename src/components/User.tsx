export interface UserData {
    img: string;
    name: string;
    title: string
}

const User = ({ data, isActive }: { data: UserData, isActive: boolean }) => {
    const { img, name, title } = data;

    return (
        <div className="flex flex-col items-center cursor-pointer">
            <img
                src={img}
                alt={name}
                className="w-[70px] h-[70px] object-cover rounded-full"
            />
            <div className={`text-center mt-2 ${isActive ? "font-bold" : "font-normal"}`}>
                <p>{name}</p>
                <span className="text-[15px] text-lightBlue">{title}</span>
            </div>
        </div>
    )
}
export default User