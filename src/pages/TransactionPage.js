import { NavLink } from 'react-router-dom';

import configs from '../configs';
import { TrashIcon } from '../icons';

function TransactionPage() {
    return (
        <div className="transaction-page">
            <header className="site-header section-padding d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-12">
                            <h1>
                                <span className="d-block text-primary">Thank you</span>
                                <span className="d-block text-dark">for your support</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>

            <section className="section-padding pb-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-12">
                            <h4>Total amount</h4>
                            <h4>$390</h4>
                        </div>
                        <div className="col-lg-4 col-12">
                            <h4>Total transaction</h4>
                            <h4>3</h4>
                        </div>
                        <div className="col-lg-4 col-12">
                            <h4>Transaction point</h4>
                            <h4>120/390</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <table className="table table-hover">
                                <thead className="align-items-center text-center">
                                    <tr>
                                        <th>CODE - TIME</th>
                                        <th>PRODUCT</th>
                                        <th>TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-2 align-items-center">
                                            <b>CODE</b>: TS0924UG6R54 <br />
                                            ((TS-M(2)-Y(2)-RAND(6))) <br />
                                            <b>TIME</b>: 2024-09-15 12:08:26
                                        </td>
                                        <td className="px-4 w-75">
                                            <div className="row pb-2">
                                                <div className="col-lg-6 col-12">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-12">
                                                            <NavLink to={configs.routes.productDetail}>
                                                                <img
                                                                    src="https://i.pinimg.com/564x/5d/4d/40/5d4d400928622b5c7415201f3820ac56.jpg"
                                                                    className="img-fluid product-image"
                                                                    alt=""
                                                                />
                                                            </NavLink>
                                                        </div>
                                                        <div className="col-lg-8 col-12">
                                                            <h6 className="product-title mb-0">
                                                                <NavLink
                                                                    to={configs.routes.productDetail}
                                                                    className="product-title-link"
                                                                >
                                                                    Fashion set
                                                                </NavLink>
                                                            </h6>

                                                            <div className="d-flex w-100 float-start align-items-center item-center">
                                                                <small className="w-50 product-price text-muted ms-auto">
                                                                    $35
                                                                </small>
                                                                <small className="w-50 product-price text-muted ms-auto">
                                                                    x2
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-12">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-12">
                                                            <NavLink to={configs.routes.productDetail}>
                                                                <img
                                                                    src="https://i.pinimg.com/564x/52/d0/22/52d022282cdf17a5ef4ae4559204eaaa.jpg"
                                                                    className="img-fluid product-image"
                                                                    alt=""
                                                                />
                                                            </NavLink>
                                                        </div>
                                                        <div className="col-lg-8 col-12">
                                                            <h6 className="product-title mb-0">
                                                                <NavLink
                                                                    to={configs.routes.productDetail}
                                                                    className="product-title-link"
                                                                >
                                                                    Package
                                                                </NavLink>
                                                            </h6>

                                                            <div className="d-flex w-100 float-start align-items-center item-center">
                                                                <small className="w-50 product-price text-muted ms-auto">
                                                                    $50
                                                                </small>
                                                                <small className="w-50 product-price text-muted ms-auto">
                                                                    x1
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-12">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-12">
                                                            <NavLink to={configs.routes.productDetail}>
                                                                <img
                                                                    src="https://i.pinimg.com/564x/70/77/a8/7077a83e48a1ccf51c730ccd0964ec68.jpg"
                                                                    className="img-fluid product-image"
                                                                    alt=""
                                                                />
                                                            </NavLink>
                                                        </div>
                                                        <div className="col-lg-8 col-12">
                                                            <h6 className="product-title mb-0">
                                                                <NavLink
                                                                    to={configs.routes.productDetail}
                                                                    className="product-title-link"
                                                                >
                                                                    Juice Drinks
                                                                </NavLink>
                                                            </h6>

                                                            <div className="d-flex w-100 float-start align-items-center item-center">
                                                                <small className="w-50 product-price text-muted ms-auto">
                                                                    $45
                                                                </small>
                                                                <small className="w-50 product-price text-muted ms-auto">
                                                                    x1
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-2 align-items-center text-center">$165</td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 align-items-center">
                                            <b>CODE</b>: TS0924UG6R54 <br />
                                            <b>TIME</b>: 2024-09-17 08:35:17
                                        </td>
                                        <td className="px-4 w-75">
                                            <div className="row">
                                                <div className="col-lg-6 col-12">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-12">
                                                            <NavLink to={configs.routes.productDetail}>
                                                                <img
                                                                    src="https://i.pinimg.com/564x/70/77/a8/7077a83e48a1ccf51c730ccd0964ec68.jpg"
                                                                    className="img-fluid product-image"
                                                                    alt=""
                                                                />
                                                            </NavLink>
                                                        </div>
                                                        <div className="col-lg-8 col-12">
                                                            <h6 className="product-title mb-0">
                                                                <NavLink
                                                                    to={configs.routes.productDetail}
                                                                    className="product-title-link"
                                                                >
                                                                    Juice Drinks
                                                                </NavLink>
                                                            </h6>

                                                            <div className="d-flex w-100 float-start align-items-center item-center">
                                                                <small className="w-50 product-price text-muted ms-auto">
                                                                    $45
                                                                </small>
                                                                <small className="w-50 product-price text-muted ms-auto">
                                                                    x1
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-2 align-items-center text-center">$45</td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 align-items-center">
                                            <b>CODE</b>: CTS0924Y7US53 <br />
                                            <b>TIME</b>: 2024-09-19 20:57:09
                                        </td>
                                        <td className="px-4 w-75">
                                            <div className="row">
                                                <div className="col-lg-6 col-12">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-12">
                                                            <NavLink to={configs.routes.productDetail}>
                                                                <img
                                                                    src="https://i.pinimg.com/564x/62/18/d5/6218d527b75512625cc6f77de13a38d8.jpg"
                                                                    className="img-fluid product-image"
                                                                    alt=""
                                                                />
                                                            </NavLink>
                                                        </div>
                                                        <div className="col-lg-8 col-12">
                                                            <h6 className="product-title mb-0">
                                                                <NavLink
                                                                    to={configs.routes.productDetail}
                                                                    className="product-title-link"
                                                                >
                                                                    Bottle
                                                                </NavLink>
                                                            </h6>

                                                            <div className="d-flex w-100 float-start align-items-center item-center">
                                                                <div className="w-50 product-price ms-auto">
                                                                    <small className="text-decoration-line-through text-muted me-2">
                                                                        $100
                                                                    </small>
                                                                    <small className="text-muted">$90</small>
                                                                </div>
                                                                <small className="w-50 product-price text-muted ms-auto">
                                                                    x2
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-2 align-items-center text-center">$180</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TransactionPage;
