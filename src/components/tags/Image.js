
function Image ({ src = '', width = 'auto', height = 'auto', alt = 'Img Error', className = '' }) {
    return (
        <div className="ImageComponent">
            <img 
                width={width}
                height={height}
                className={className}
                src={src}
                alt={alt}
            />
        </div>
    );
}

export default Image;