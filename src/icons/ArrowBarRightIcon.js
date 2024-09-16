export default function ArrowBarRightIcon ({ width = '1.5rem', height = '1.5rem', className = '' })
{
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
            className={`${className} icon icon-tabler icons-tabler-outline icon-tabler-arrow-bar-right`}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20 12l-10 0" />
            <path d="M20 12l-4 4" />
            <path d="M20 12l-4 -4" />
            <path d="M4 4l0 16" />
        </svg>
    );
};
