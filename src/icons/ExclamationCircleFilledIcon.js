export default function ExclamationCircleFilledIcon({ width = '1.5rem', height = '1.5rem', className = '' }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`${className} icon icon-tabler icons-tabler-filled icon-tabler-exclamation-circle`}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1" />
        </svg>
    );
}
