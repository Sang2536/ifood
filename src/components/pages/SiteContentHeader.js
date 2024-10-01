import PropTypes from 'prop-types';

function SiteContentHeader({ textFirst, textSecond, sideNodeRight }) {
    return (
        <div className="site-content-header">
            <header className="site-header section-padding-img site-header-image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-12 header-info">
                            <h1>
                                <span className="d-block text-primary">{textFirst}</span>
                                <span className="d-block text-dark">{textSecond}</span>
                            </h1>
                        </div>
                    </div>
                </div>

                {sideNodeRight}
            </header>
        </div>
    );
}

SiteContentHeader.propTypes = {
    textFirst: PropTypes.string.isRequired,
    textSecond: PropTypes.string.isRequired,
    sideNodeRight: PropTypes.node,
};

export default SiteContentHeader;
