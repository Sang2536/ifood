export default function BrandGmailIcon({ width = '1.5rem', height = '1.5rem', className = '' }) {
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
            className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-brand-gmail`}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z" />
            <path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z" />
            <path d="M16 4l-4 4l-4 -4" />
            <path d="M4 6.5l8 7.5l8 -7.5" />
        </svg>
    );
}
