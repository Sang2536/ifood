import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { HeartFilledIcon } from '../../../icons';

function ProductCard({ dataProduct = {} }) {
    return (
        <div className="product-thumb">
            <NavLink to={dataProduct.linkToProductDetail}>
                <img src={dataProduct.imgSrc} className="img-fluid product-image" alt={dataProduct.name} />
            </NavLink>

            <div className="product-top d-flex">
                {
                    dataProduct.alert 
                    ? (<span className="product-alert me-auto">{dataProduct.alert}</span>) 
                    : null
                }

                <NavLink to="/favorite" className="bi-heart-fill product-icon ms-auto">
                    <HeartFilledIcon />
                </NavLink>
            </div>

            <div className="product-info d-flex">
                <div>
                    <h5 className="product-title mb-0">
                        <NavLink to={dataProduct.linkToProductDetail} className="product-title-link">
                            {dataProduct.name}
                        </NavLink>
                    </h5>

                    <p className="product-p">{dataProduct.shortDescription}</p>
                </div>

                <small className="product-price text-muted ms-auto mt-auto mb-5">{dataProduct.price}</small>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    dataProduct: PropTypes.shape({
        productId: PropTypes.string.isRequired,
        linkToProductDetail: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        shortDescription: PropTypes.string.isRequired,
        alert: PropTypes.string,
    }).isRequired,
};

export default ProductCard;
