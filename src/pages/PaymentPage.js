import { NavLink } from 'react-router-dom';

import configs from '../configs';
import { BrandPaypalFilledIcon, CashBanknoteFilledIcon, CreditCardFilledIcon, ShoppingCartFilledIcon } from '../icons';

function PaymentPage() {
    return (
        <div className="payment-page">
            <div className="container">
                <div className="row mt-4">
                    <div className="col-12 d-flex my-3">
                        <div className="w-100 d-flex">
                            <div className="w-25">
                                <NavLink to={configs.routes.productDetail} className="product-title-link">
                                    <img
                                        src="https://i.pinimg.com/564x/5d/4d/40/5d4d400928622b5c7415201f3820ac56.jpg"
                                        className="img-fluid product-image"
                                        alt=""
                                    />
                                </NavLink>
                            </div>
                            <div className="w-75">
                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">
                                            <NavLink to={configs.routes.productDetail} className="product-title-link">
                                                Tree pot
                                            </NavLink>
                                        </h5>

                                        <p className="product-p">Original package design from house</p>
                                    </div>
                                    <h5 className="product-price text-muted ms-auto">$25</h5>
                                    <h5 className="product-price text-muted ms-auto">x3</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex my-3">
                        <div className="w-100 d-flex">
                            <div className="w-25">
                                <NavLink to={configs.routes.productDetail} className="product-title-link">
                                    <img
                                        src="https://i.pinimg.com/564x/62/18/d5/6218d527b75512625cc6f77de13a38d8.jpg"
                                        className="img-fluid product-image"
                                        alt=""
                                    />
                                </NavLink>
                            </div>
                            <div className="w-75">
                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">
                                            <NavLink to={configs.routes.productDetail} className="product-title-link">
                                                Bottle
                                            </NavLink>
                                        </h5>

                                        <p className="product-p">Original package design from house</p>
                                    </div>
                                    <div className="product-price ms-auto">
                                        <h5 className="text-decoration-line-through text-muted">$100</h5>
                                        <h5 className="text-muted">$90</h5>
                                    </div>
                                    <h5 className="product-price text-muted ms-auto">x2</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offset-lg-8 col-12 d-flex my-3 align-items-center text-center">
                        <h3>Total: $255</h3>
                    </div>
                </div>

                <div className="col-12 mx-auto">
                    <div className="div-separator w-50 m-auto my-5">
                        <span className="w-auto px-2" style={{ marginLeft: '-65px' }}>
                            payment with
                        </span>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-4 col-12">
                        <NavLink to="#" className="btn custom-btn form-control my-3">
                            <CashBanknoteFilledIcon className="me-1" />
                            CASH
                        </NavLink>
                    </div>
                    <div className="col-lg-4 col-12">
                        <NavLink to="#" className="btn custom-btn form-control my-3">
                            <CreditCardFilledIcon className="me-1" />
                            CREDIT CARD
                        </NavLink>
                    </div>
                    <div className="col-lg-4 col-12">
                        <NavLink to="#" className="btn custom-btn form-control my-3">
                            <BrandPaypalFilledIcon className="me-1" />
                            PAYPAL
                        </NavLink>
                    </div>

                    <div className="col-12 mx-auto">
                        <div className="div-separator w-50 m-auto my-5">
                            <span>or</span>
                        </div>
                    </div>

                    <div className="col-12 mx-auto">
                        <NavLink to={configs.routes.shoppingCart} className="btn custom-btn form-control my-3">
                            <ShoppingCartFilledIcon className="me-1" />
                            SHOPPING CART
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;
