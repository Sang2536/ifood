import PropTypes from "prop-types";

function Badge({ 
    type = 'primary', 
    className = '', 
    textContent = 'badge', 
    children 
}) {
    const typeCheck = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'custom'];
    className = 'badge text-bg-' + type;
    
    return (
        <span className={className}>
            {textContent}
            {children}
        </span>
    );
}

Badge.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    textContent: PropTypes.string,
    children: PropTypes.node,
};

export default Badge;