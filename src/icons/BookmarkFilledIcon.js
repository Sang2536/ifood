export const BookmarkFilledIcon = ({ width = '1.5rem', height = '1.5rem', className = '' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`${className} icon icon-tabler icons-tabler-filled icon-tabler-bookmark`}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 2a5 5 0 0 1 5 5v14a1 1 0 0 1 -1.555 .832l-5.445 -3.63l-5.444 3.63a1 1 0 0 1 -1.55 -.72l-.006 -.112v-14a5 5 0 0 1 5 -5h4z" />
        </svg>
    );
};
