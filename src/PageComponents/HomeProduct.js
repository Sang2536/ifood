import { NavLink } from 'react-router-dom';

import '../scss/pages/product.scss';
import configs from '../configs';
import { Image } from '../SingleComponents';
import { HeartFilledIcon } from '../icons';

function HomeProductComponent() {
    return (
        <div className="home-product-component">
            <section className="featured-product section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="mb-5">Featured Products</h2>
                        </div>

                        <div className="col-lg-4 col-12 mb-3">
                            <div className="product-thumb">
                                <NavLink to={configs.routes.productDetail}>
                                    <img
                                        src="https://i.pinimg.com/564x/56/f9/62/56f962d9e08a521d551be872159651ed.jpg"
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

                                    <small className="product-price text-muted ms-auto mt-auto mb-5">$25</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12 mb-3">
                            <div className="product-thumb">
                                <NavLink to={configs.routes.productDetail}>
                                    <img
                                        src="https://i.pinimg.com/564x/3c/75/d9/3c75d96bd31b762788cab9ede0dbe245.jpg"
                                        className="img-fluid product-image"
                                        alt=""
                                    />
                                </NavLink>

                                <div className="product-top d-flex">
                                    <span className="product-alert">Low Price</span>

                                    <NavLink to="/favorite" className="bi-heart-fill product-icon ms-auto">
                                        <HeartFilledIcon />
                                    </NavLink>
                                </div>

                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">
                                            <NavLink to={configs.routes.productDetail} className="product-title-link">
                                                Fashion Set
                                            </NavLink>
                                        </h5>

                                        <p className="product-p">Costume Package</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto mt-auto mb-5">$35</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12">
                            <div className="product-thumb">
                                <NavLink to={configs.routes.productDetail}>
                                    <img
                                        src="https://i.pinimg.com/564x/34/9c/97/349c9742c4eb84193293e0308613f84c.jpg"
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

                                    <small className="product-price text-muted ms-auto mt-auto mb-5">$45</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 text-center">
                            <NavLink to={configs.routes.product} className="view-all">
                                View All Products
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomeProductComponent;
