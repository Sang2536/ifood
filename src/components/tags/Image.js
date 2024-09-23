import PropTypes from "prop-types";

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

Image.propTypes = {
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
};

export default Image;