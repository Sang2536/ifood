function CartModalComponent () {
    return (
        <div className="cart-modal-component">
            {/* CART MODAL */}
            <div
                className="modal fade"
                id="cart-modal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content border-0">
                        <div className="modal-header flex-column">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-6 col-12 mt-4 mt-lg-0">
                                    <img
                                        src="https://i.pinimg.com/564x/94/27/63/942763eba5fba69c85a7ee05d9756fc4.jpg"
                                        className="img-fluid product-image"
                                        alt=""
                                    />
                                </div>

                                <div className="col-lg-6 col-12 mt-3 mt-lg-0">
                                    <h3 className="modal-title" id="exampleModalLabel">
                                        Tree pot
                                    </h3>

                                    <p className="product-price text-muted mt-3">$25</p>

                                    <p className="product-p">
                                        Quatity: <span className="ms-1">4</span>
                                    </p>

                                    <p className="product-p">
                                        Colour: <span className="ms-1">Black</span>
                                    </p>

                                    <p className="product-p pb-3">
                                        Size: <span className="ms-1">S/S</span>
                                    </p>

                                    <div className="border-top mt-4 pt-3">
                                        <p className="product-p">
                                            <strong>
                                                Total: <span className="ms-1">$100</span>
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <div className="row w-50">
                                <button type="button" className="btn custom-btn cart-btn ms-lg-4">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartModalComponent;