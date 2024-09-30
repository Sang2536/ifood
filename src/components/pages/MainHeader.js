import PropTypes from 'prop-types';

function MainHeaderComponent({ textFirst, textSecond, sideRight }) {
    return (
        <div className="MainHeaderComponent">
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

                {sideRight}
            </header>
        </div>
    );
}

MainHeaderComponent.propTypes = {
    textFirst: PropTypes.string.isRequired,
    textSecond: PropTypes.string.isRequired,
    sideRight: PropTypes.node,
};

export default MainHeaderComponent;
