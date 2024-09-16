export const BuildingsIcon = ({ width = '1.5rem', height = '1.5rem', className = '' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            classname={`${className} icon icon-tabler icons-tabler-outline icon-tabler-buildings`}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 21v-15c0 -1 1 -2 2 -2h5c1 0 2 1 2 2v15" />
            <path d="M16 8h2c1 0 2 1 2 2v11" />
            <path d="M3 21h18" />
            <path d="M10 12v0" />
            <path d="M10 16v0" />
            <path d="M10 8v0" />
            <path d="M7 12v0" />
            <path d="M7 16v0" />
            <path d="M7 8v0" />
            <path d="M17 12v0" />
            <path d="M17 16v0" />
        </svg>
    );
};
