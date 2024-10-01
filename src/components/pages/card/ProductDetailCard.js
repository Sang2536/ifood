import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FormSelect } from '../form';

function ProductDetailCard({ dataProductDetail = {} }) {
    return (
        <div className="row">
            <div className="col-lg-6 col-12">
                <div className="product-thumb">
                    <img
                        src={dataProductDetail.imgSrc}
                        className="img-fluid product-image"
                        alt={dataProductDetail.name}
                    />
                </div>
            </div>

            <div className="col-lg-6 col-12">
                <div className="product-info d-flex">
                    <div>
                        <h2 className="product-title mb-0">{dataProductDetail.name}</h2>

                        <p className="product-p">{dataProductDetail.shortDescription}</p>
                    </div>

                    <small className="product-price text-muted ms-auto mt-auto mb-5">$25</small>
                </div>

                <div className="product-description">
                    <strong className="d-block mt-4 mb-2">Description</strong>

                    <p className="lead mb-5">{dataProductDetail.detailDescription}</p>
                </div>

                <div className="product-cart-thumb row">
                    <div className="col-lg-6 col-12">
                        <FormSelect
                            className={{ input: 'form-select cart-form-select' }}
                            idInput="select-product-qty"
                            requiredInput={true}
                            textSelectDefault="Quantity"
                            isSelected={true}
                            optionSelect={[
                                { value: '1', text: '1', isSelected: false },
                                { value: '2', text: '2', isSelected: false },
                                { value: '3', text: '3', isSelected: false },
                                { value: '4', text: '4', isSelected: false },
                                { value: '5', text: '5', isSelected: false },
                            ]}
                        />
                    </div>

                    <div className="col-lg-6 col-12 mt-4 mt-lg-0">
                        <button
                            type="submit"
                            className="btn custom-btn cart-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#cart-modal"
                        >
                            Add to Cart
                        </button>
                    </div>

                    <p>
                        <NavLink to="#" className="product-additional-link">
                            Details
                        </NavLink>

                        <NavLink to={dataProductDetail.linkToPayment} className="product-additional-link">
                            Delivery and Payment
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
}

ProductDetailCard.propTypes = {
    dataProductDetail: PropTypes.shape({
        productId: PropTypes.string.isRequired,
        linkToPayment: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        detailDescription: PropTypes.string.isRequired,
        shortDescription: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductDetailCard;
