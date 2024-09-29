import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function Button({
    to,
    href,
    leftIcon,
    rightIcon,
    className,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = NavLink;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp {...props} className={className}>
            {leftIcon}
            {children}
            {rightIcon}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default Button;
