const Card = ({ title, children }: { title: string, children: React.ReactNode }) => {
    return (
        <div className="flex flex-col">
            <h2 className="text-primary font-bold text-2.5xl mb-4">{title}</h2>
            <div className="md:bg-white rounded-2xl py-6 md:p-6 flex-grow">
                {children}
            </div>
        </div>
    )
}

export default Card