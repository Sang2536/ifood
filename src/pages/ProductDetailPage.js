import '../scss/layouts/product.scss';
import { CartModalComponent } from '../PageComponents';

function ProductDetailPage() {
    return (
        <div className="ProductDetailPage">
            <header className="site-header section-padding d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-12">
                            <h1>
                                <span className="d-block text-primary">We provide you</span>
                                <span className="d-block text-dark">Fashionable Stuffs</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>

            <section className="product-detail section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="product-thumb">
                                <img
                                    src="https://i.pinimg.com/564x/fc/56/53/fc5653691bf8805a1d5b227f4232389c.jpg"
                                    className="img-fluid product-image"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="product-info d-flex">
                                <div>
                                    <h2 className="product-title mb-0">Tree pot</h2>

                                    <p className="product-p">Original package design from house</p>
                                </div>

                                <small className="product-price text-muted ms-auto mt-auto mb-5">$25</small>
                            </div>

                            <div className="product-description">
                                <strong className="d-block mt-4 mb-2">Description</strong>

                                <p className="lead mb-5">
                                    Over three years in business, We’ve had the chance to work on a variety of projects,
                                    with companies
                                </p>
                            </div>

                            <div className="product-cart-thumb row">
                                <div className="col-lg-6 col-12">
                                    <select className="form-select cart-form-select" id="inputGroupSelect01">
                                        <option selected>Quantity</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
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
                                    <a href="#" className="product-additional-link">
                                        Details
                                    </a>

                                    <a href="#" className="product-additional-link">
                                        Delivery and Payment
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="related-product section-padding border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="mb-5">You might also like</h3>
                        </div>

                        <div className="col-lg-4 col-12 mb-3">
                            <div className="product-thumb">
                                <a href="product-detail.html">
                                    <img src="https://i.pinimg.com/564x/fd/73/fd/fd73fd73e03875ee55d15588c4deee74.jpg" className="img-fluid product-image" alt="" />
                                </a>

                                <div className="product-top d-flex">
                                    <span className="product-alert me-auto">New arrival</span>

                                    <a href="#" className="bi-heart-fill product-icon"></a>
                                </div>

                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">
                                            <a href="product-detail.html" className="product-title-link">Tree pot</a>
                                        </h5>

                                        <p className="product-p">Original package design from house</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto mt-auto mb-5">$25</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12 mb-3">
                            <div className="product-thumb">
                                <a href="product-detail.html">
                                    <img src="https://i.pinimg.com/564x/80/99/4f/80994f4d0f232f319ba15f5e5a1a907c.jpg" className="img-fluid product-image" alt="" />
                                </a>

                                <div className="product-top d-flex">
                                    <span className="product-alert">Low Price</span>

                                    <a href="#" className="bi-heart-fill product-icon ms-auto"></a>
                                </div>

                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">
                                            <a href="product-detail.html" className="product-title-link">Fashion set</a>
                                        </h5>

                                        <p className="product-p">Costume package</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto mt-auto mb-5">$35</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12">
                            <div className="product-thumb">
                                <a href="product-detail.html">
                                    <img src="https://i.pinimg.com/564x/46/15/51/4615516d8b34ce2621b44447cd767a72.jpg" className="img-fluid product-image" alt="" />
                                </a>

                                <div className="product-top d-flex">
                                    <a href="#" className="bi-heart-fill product-icon ms-auto"></a>
                                </div>

                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">
                                            <a href="product-detail.html" className="product-title-link">Juice Drinks</a>
                                        </h5>

                                        <p className="product-p">Nature made another world</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto mt-auto mb-5">$45</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CartModalComponent />
        </div>
    );
}

export default ProductDetailPage;
