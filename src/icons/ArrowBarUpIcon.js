export default function ArrowBarUpIcon({ width = '1.5rem', height = '1.5rem', className = '' }) {
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
            className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-arrow-bar-up`}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 4l0 10" />
            <path d="M12 4l4 4" />
            <path d="M12 4l-4 4" />
            <path d="M4 20l16 0" />
        </svg>
    );
}
