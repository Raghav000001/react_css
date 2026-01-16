

 function Shimmer() {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {Array.from({length: 12}).map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-4 m-2 animate-pulse">
                    <div className="w-full h-32 bg-gray-300 rounded-md mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded mb-2 w-3/4"></div>
                    <div className="h-3 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                </div>
            ))}
        </div>
    )
}

export default Shimmer