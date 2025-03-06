export const LoadingSkeleton = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full px-4 py-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(index => (
                <div key={index} className="animate-pulse text-neutral-900 flex flex-col items-start justify-between w-[50%] h-fit px-3 py-3 gap-5 bg-gray-300 backdrop-blur-sm rounded-xl border border-neutral-200 mb-6">
                    <div className="flex items-start justify-between w-full">
                        <div className="flex items-start gap-2 w-full">
                            <span className="bg-gray-500 rounded-full p-6"></span>
                            <div className="flex flex-col w-full gap-2">
                                <div className="h-5 bg-gray-500 rounded w-3/5"></div>
                                <div className="h-3 bg-gray-500 rounded w-1/3"></div>
                            </div>
                            <div className="h-7 bg-gray-500 rounded w-1/5"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <div className="w-full h-4 bg-gray-500 rounded"></div>
                        <div className="w-full h-4 bg-gray-500 rounded"></div>
                        <div className="w-[80%] h-4 bg-gray-500 rounded"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};
