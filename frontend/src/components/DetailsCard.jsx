export const DetailCard = ({ item }) => {
    return (
        <div className="flex flex-col bg-slate-100/80 p-6 rounded-lg shadow-sm">
            <div className="flex gap-2 items-center">
                <div className="w-12 h-12 rounded-full bg-slate-200/80 flex items-center justify-center">
                    <item.icon size={25} className={item.color} />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <div className="mt-4">
                <p className="text-gray-600">{item.description}</p>
            </div>
        </div>
    );
};