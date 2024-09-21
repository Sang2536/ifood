import { NavLink } from 'react-router-dom';

import '../scss/pages/product.scss';
import configs from '../configs';
import { HeartFilledIcon } from '../icons';

function ProductPage() {
    return (
        <div className="ProductPage">
            <header className="site-header section-padding d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-12">
                            <h1>
                                <span className="d-block text-primary">Choose your</span>
                                <span className="d-block text-dark">favorite stuffs</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>

            <section className="section-padding pb-0">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-lg-8 mx-auto col-12">
                            <form role="form" method="post">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        name="search"
                                        id="search"
                                        pattern="[0-9a-zA-Z]"
                                        className="form-control"
                                        placeholder="Search Product"
                                    />
                                    <label for="search">Search Product</label>
                                </div>
                                <button type="submit" className="btn custom-btn form-control w-50 m-auto mt-4 mb-3">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="products section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mb-5">New Arrivals</h2>
                        </div>

                        <div className="col-lg-4 col-12 mb-3">
                            <div className="product-thumb">
                                <NavLink to={configs.routes.productDetail}>
                                    <img
                                        src="https://i.pinimg.com/564x/5d/4d/40/5d4d400928622b5c7415201f3820ac56.jpg"
                                        className="img-fluid product-image"
                                        alt=""
                                    />
                                </NavLink>

                                <div className="product-top d-flex">
                                    <span className="product-alert me-auto">New Arrival</span>

                                    <NavLink to="/favorite" className="bi-heart-fill product-icon">
                                        <HeartFilledIcon />
                                    </NavLink>
                                </div>

                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">
                                            <NavLink to={configs.routes.productDetail} className="product-title-link">
                                                Tree pot
                                            </NavLink>
                                        </h5>

                                        <p className="product-p">Original package design from house</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto">$25</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12 mb-3">
                            <div className="product-thumb">
                                <NavLink to={configs.routes.productDetail}>
                                    <img
                                        src="https://i.pinimg.com/564x/00/3a/16/003a163cb1d3bf99c3b0994a0622fba9.jpg"
                                        className="img-fluid product-image"
                                        alt=""
                                    />
                                </NavLink>

                                <div className="product-top d-flex">
                                    <span className="product-alert">Discounted Price</span>

                                    <NavLink to="/favorite" className="bi-heart-fill product-icon ms-auto">
                                        <HeartFilledIcon />
                                    </NavLink>
                                </div>

                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">
                                            <NavLink to={configs.routes.productDetail} className="product-title-link">
                                                Fashion set
                                            </NavLink>
                                        </h5>

                                        <p className="product-p">Costume package</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto">$35</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12">
                            <div className="product-thumb">
                                <NavLink to={configs.routes.productDetail}>
                                    <img
                                        src="https://i.pinimg.com/564x/70/77/a8/7077a83e48a1ccf51c730ccd0964ec68.jpg"
                                        className="img-fluid product-image"
                                        alt=""
                                    />
                                </NavLink>

                                <div className="product-top d-flex">
                                    <NavLink to="/favorite" className="bi-heart-fill product-icon ms-auto">
                                        <HeartFilledIcon />
                                    </NavLink>
                                </div>

                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">
                                            <NavLink to={configs.routes.productDetail} className="product-title-link">
                                                Juice Drinks
                                            </NavLink>
                                        </h5>

                                        <p className="product-p">Nature made another world</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto">$45</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 text-center">
                            <NavLink to="products.html" className="view-all">
                                View All Products
                            </NavLink>
                        </div>

                        <div className="mt-5 col-12">
                            <h2 className="mb-5">Popular</h2>
                        </div>

                        <div className="col-lg-4 col-12 mb-3">
                            <div className="product-thumb">
                                <NavLink to={configs.routes.productDetail}>
                                    <img
                                        src="https://i.pinimg.com/564x/52/d0/22/52d022282cdf17a5ef4ae4559204eaaa.jpg"
                                        className="img-fluid product-image"
                                        alt=""
                                    />
                                </NavLink>

                                <div className="product-top d-flex">
                                    <span className="product-alert">Trending</span>

                                    <NavLink to="/favorite" className="bi-heart-fill product-icon ms-auto">
                                        <HeartFilledIcon />
                                    </NavLink>
                                </div>

                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">
                                            <NavLink to={configs.routes.productDetail} className="product-title-link">
                                                Package
                                            </NavLink>
                                        </h5>

                                        <p className="product-p">Original package design from house</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto">$50</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12 mb-3">
                            <div className="product-thumb">
                                <NavLink to={configs.routes.productDetail}>
                                    <img
                                        src="https://i.pinimg.com/564x/62/18/d5/6218d527b75512625cc6f77de13a38d8.jpg"
                                        className="img-fluid product-image"
                                        alt=""
                                    />
                                </NavLink>

                                <div className="product-top d-flex">
                                    <NavLink to="/favorite" className="bi-heart-fill product-icon ms-auto">
                                        <HeartFilledIcon />
                                    </NavLink>
                                </div>

                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">
                                            <NavLink to={configs.routes.productDetail} className="product-title-link">
                                                Bottle
                                            </NavLink>
                                        </h5>

                                        <p className="product-p">Package design</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto">$100</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12 mb-3">
                            <div className="product-thumb">
                                <NavLink to={configs.routes.productDetail}>
                                    <img
                                        src="https://i.pinimg.com/564x/47/ca/69/47ca69d328cb0338f4d1280e6e949bdc.jpg"
                                        className="img-fluid product-image"
                                        alt=""
                                    />
                                </NavLink>

                                <div className="product-top d-flex">
                                    <NavLink to="/favorite" className="bi-heart-fill product-icon ms-auto">
                                        <HeartFilledIcon />
                                    </NavLink>
                                </div>

                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">
                                            <NavLink to={configs.routes.productDetail} className="product-title-link">
                                                Medicine
                                            </NavLink>
                                        </h5>

                                        <p className="product-p">Original design from house</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto">$200</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 text-center">
                            <NavLink to="products.html" className="view-all">
                                View All Products
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductPage;
