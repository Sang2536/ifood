
function Indicator () {
    return (
        <div className="IndicatorComponent">
            <span className="flex w-3 h-3 me-3 bg-gray-900 rounded-full dark:bg-gray-700"></span>
            <span className="flex w-3 h-3 me-3 bg-blue-600 rounded-full"></span>
            <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3">
                <span className="flex w-2.5 h-2.5 bg-purple-500 rounded-full me-1.5 flex-shrink-0"></span>
                Sessions
            </span>
        </div>
    );
}

export default Indicator;