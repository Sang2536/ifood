export default function ActivityIcon({ width = '1.5rem', height = '1.5rem', className = '' }) {
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
            className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-activity`}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12h4l3 8l4 -16l3 8h4" />
        </svg>
    );
}
