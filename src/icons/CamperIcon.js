export const CamperIcon = ({ width = '1.5rem', height = '1.5rem', className = '' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-camper`}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path d="M15 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path d="M5 18h-1a1 1 0 0 1 -1 -1v-11a2 2 0 0 1 2 -2h12a4 4 0 0 1 4 4h-18" />
            <path d="M9 18h6" />
            <path d="M19 18h1a1 1 0 0 0 1 -1v-4l-3 -5" />
            <path d="M21 13h-7" />
            <path d="M14 8v10" />
        </svg>
    );
};
