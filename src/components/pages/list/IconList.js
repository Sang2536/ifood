// import { Fragment } from 'react';
// import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function IconList({
    classNameUl = 'social-icon',
    dataIcon = [],
}) {
    return (
        <ul className={classNameUl}>
            {dataIcon.map((data) => {
                const TagNode = data.linkTo ? 'NavLink' : 'Fragment';

                return (
                    <li key={data.linkTo} className={data.className.li ? data.className.li : ''}>
                        <TagNode
                            to={data.linkTo}
                            className={data.className.link ? data.className.link : 'me-3 social-icon-link'}
                        >
                            {data.iconLeft ? data.iconLeft : null}
                            {data.textContent}
                            {data.iconRight ? data.iconRight : null}
                        </TagNode>
                    </li>
                );
            })}
        </ul>
    );
}

IconList.propTypes = {
    classNameUl: PropTypes.string,
    dataIcon: PropTypes.arrayOf(
        PropTypes.shape({
            linkTo: PropTypes.string.isRequired,
            iconLeft: PropTypes.node,
            iconRight: PropTypes.node,
            textContent: PropTypes.string,
            className: PropTypes.shape({
                li: PropTypes.string,
                link: PropTypes.string,
            }),
        }),
    ),
};

export default IconList;
