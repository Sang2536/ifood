import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Image } from '../../tags';

function ProductPaymentCard({ dataProduct = {} }) {
    return (
        <div className="row mt-4">
            <div className="col-lg-3 col-12">
                <div className="product-thumb">
                    <Image src={dataProduct.imgSrc} className="img-fluid product-image" alt={dataProduct.name} />
                </div>
            </div>
            
            <div className="col-lg-9 col-12">
                <div className="w-100 product-info d-flex">
                    <div className="w-50 ms-auto">
                        <h5 className="product-title mb-0">
                            <NavLink to={dataProduct.linkToProductDetail} className="product-title-link">
                                {dataProduct.name}
                            </NavLink>
                        </h5>

                        <p className="product-p">{dataProduct.shortDescription}</p>
                    </div>

                    <div className="w-25 product-price ms-auto">
                        {dataProduct.lowPrice ? (
                            <Fragment>
                                <h5 className="text-decoration-line-through text-muted">
                                    ${dataProduct.originalPrice}
                                </h5>
                                <h5 className="text-muted">${dataProduct.lowPrice}</h5>
                            </Fragment>
                        ) : (
                            <h5 className="text-muted">${dataProduct.originalPrice}</h5>
                        )}
                    </div>

                    <h5 className="w-25 product-price text-muted ms-auto">x{dataProduct.qtyPurchase}</h5>
                </div>
            </div>
        </div>
    );
}

ProductPaymentCard.propTypes = {
    dataProduct: PropTypes.shape({
        productId: PropTypes.string.isRequired,
        linkToProductDetail: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        originalPrice: PropTypes.number.isRequired,
        lowPrice: PropTypes.number,
        qtyPurchase: PropTypes.number.isRequired,
        shortDescription: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductPaymentCard;
