import { NavLink } from 'react-router-dom';

import configs from '../configs';
import { TrashIcon } from '../icons';

function ShoppingCartPage() {
    return (
        <div className="shopping-cart-page">
            <header className="site-header section-padding d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-12">
                            <h1>
                                <span className="d-block text-primary">One more step</span>
                                <span className="d-block text-dark">to enjoy</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>

            <section className="section-padding pb-0">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="offset-lg-9 col-lg-3 col-12">
                            <NavLink to={configs.routes.transaction} className="btn custom-btn form-control mt-4 mb-3">
                                ALL TRANSACTIONS
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <table className="table table-hover">
                                <thead className="align-items-center text-center" style={{ height: '100px' }}>
                                    <tr>
                                        <th>
                                            <input
                                                type="checkbox"
                                                name="check-product-all"
                                                id="check-product-all"
                                                className=""
                                            />
                                        </th>
                                        <th>PRODUCT</th>
                                        <th>CANCEL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-2 w-25 align-items-center text-center">
                                            <input
                                                type="checkbox"
                                                name="check-product-1"
                                                id="check-product-1"
                                                className="check-product"
                                            />
                                        </td>
                                        <td className="px-2 w-50">
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

                                                    <div className="d-flex float-start align-items-center item-center">
                                                        <small className="w-25 product-price text-muted ms-auto">
                                                            $35
                                                        </small>

                                                        <div className="w-75 form-floating p-0">
                                                            <input
                                                                type="number"
                                                                name="quantity-1"
                                                                id="qty-product-1"
                                                                className="qty-product form-control"
                                                                placeholder="Quantity"
                                                                min="1"
                                                                required
                                                            />
                                                            <label for="qty-product-1">Quantity</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-2 w-25 align-items-center text-center">
                                            <button type="submit" className="btn custom-btn form-control my-3">
                                                <TrashIcon />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 w-25 align-items-center text-center">
                                            <input
                                                type="checkbox"
                                                name="check-product-2"
                                                id="check-product-2"
                                                className="check-product"
                                            />
                                        </td>
                                        <td className="px-2 w-50">
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

                                                    <div className="d-flex float-start align-items-center item-center">
                                                        <small className="w-25 product-price text-muted ms-auto">
                                                            $45
                                                        </small>

                                                        <div className="w-75 form-floating p-0">
                                                            <input
                                                                type="number"
                                                                name="quantity-2"
                                                                id="qty-product-2"
                                                                className="qty-product form-control"
                                                                placeholder="Quantity"
                                                                min="1"
                                                                required
                                                            />
                                                            <label for="qty-product-2">Quantity</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-2 w-25 align-items-center text-center">
                                            <button type="submit" className="btn custom-btn form-control my-3">
                                                <TrashIcon />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 w-25 align-items-center text-center">
                                            <input
                                                type="checkbox"
                                                name="check-product-3"
                                                id="check-product-3"
                                                className="check-product"
                                            />
                                        </td>
                                        <td className="px-2 w-50">
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

                                                    <div className="d-flex float-start align-items-center item-center">
                                                        <small className="w-25 product-price text-muted ms-auto">
                                                            $100
                                                        </small>

                                                        <div className="w-75 form-floating p-0">
                                                            <input
                                                                type="number"
                                                                name="quantity-3"
                                                                id="qty-product-3"
                                                                className="qty-product form-control"
                                                                placeholder="Quantity"
                                                                min="1"
                                                                required
                                                            />
                                                            <label for="qty-product-3">Quantity</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-2 w-25 align-items-center text-center">
                                            <button type="submit" className="btn custom-btn form-control my-3">
                                                <TrashIcon />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 w-25 align-items-center text-center">
                                            <input
                                                type="checkbox"
                                                name="check-product-4"
                                                id="check-product-4"
                                                className="check-product"
                                            />
                                        </td>
                                        <td className="px-2 w-50">
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

                                                    <div className="d-flex float-start align-items-center item-center">
                                                        <small className="w-25 product-price text-muted ms-auto">
                                                            $50
                                                        </small>

                                                        <div className="w-75 form-floating p-0">
                                                            <input
                                                                type="number"
                                                                name="quantity-4"
                                                                id="qty-product-4"
                                                                className="qty-product form-control"
                                                                placeholder="Quantity"
                                                                min="1"
                                                                required
                                                            />
                                                            <label for="qty-product-4">Quantity</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-2 w-25 align-items-center text-center">
                                            <button type="submit" className="btn custom-btn form-control my-3">
                                                <TrashIcon />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 w-25 align-items-center text-center">
                                            <input
                                                type="checkbox"
                                                name="check-product-5"
                                                id="check-product-5"
                                                className="check-product"
                                            />
                                        </td>
                                        <td className="px-2 w-50">
                                            <div className="row">
                                                <div className="col-lg-4 col-12">
                                                    <NavLink to={configs.routes.productDetail}>
                                                        <img
                                                            src="https://i.pinimg.com/564x/47/ca/69/47ca69d328cb0338f4d1280e6e949bdc.jpg"
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
                                                            Medicine
                                                        </NavLink>
                                                    </h6>

                                                    <div className="d-flex float-start align-items-center item-center">
                                                        <small className="w-25 product-price text-muted ms-auto">
                                                            $200
                                                        </small>

                                                        <div className="w-75 form-floating p-0">
                                                            <input
                                                                type="number"
                                                                name="quantity-5"
                                                                id="qty-product-5"
                                                                className="qty-product form-control"
                                                                placeholder="Quantity"
                                                                min="1"
                                                                required
                                                            />
                                                            <label for="qty-product-5">Quantity</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-2 w-25 align-items-center text-center">
                                            <button type="submit" className="btn custom-btn form-control my-3">
                                                <TrashIcon />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-lg-3 col-12">
                            <h3>Total</h3>
                        </div>
                        <div className="col-lg-6 col-12">
                            <h3>$280</h3>
                        </div>
                        <div className="col-lg-3 col-12">
                            {/* <button type="submit" className="btn custom-btn form-control mt-4 mb-3">
                                Payment
                            </button> */}
                            <NavLink to={configs.routes.payment} className="btn custom-btn form-control mt-4 mb-3">
                                PAYMENT
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ShoppingCartPage;
