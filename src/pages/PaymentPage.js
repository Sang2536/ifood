import configs from '../configs';
import { Button } from '../components/tags';
import { BrandPaypalFilledIcon, CashBanknoteFilledIcon, CreditCardFilledIcon, ShoppingCartFilledIcon } from '../icons';
import { ProductPaymentCard } from '../components/pages/card';

function PaymentPage() {
    var totalPrice = 0;
    const dataProduct = [
        {
            productId: 'p01',
            linkToProductDetail: configs.routes.productDetail,
            imgSrc: 'https://i.pinimg.com/564x/5d/4d/40/5d4d400928622b5c7415201f3820ac56.jpg',
            name: 'Tree pot',
            originalPrice: 25,
            qtyPurchase: 3,
            shortDescription: 'Original package design from house',
        },
        {
            productId: 'p02',
            linkToProductDetail: configs.routes.productDetail,
            imgSrc: 'https://i.pinimg.com/564x/62/18/d5/6218d527b75512625cc6f77de13a38d8.jpg',
            name: 'Bottle',
            originalPrice: 100,
            lowPrice: 90,
            qtyPurchase: 1,
            shortDescription: 'Original package design from house',
        },
        {
            productId: 'p03',
            linkToProductDetail: configs.routes.productDetail,
            imgSrc: 'https://i.pinimg.com/564x/70/77/a8/7077a83e48a1ccf51c730ccd0964ec68.jpg',
            name: 'Juice Drinks',
            originalPrice: 40,
            lowPrice: 35,
            qtyPurchase: 2,
            shortDescription: 'Nature made another world',
        },
    ];

    return (
        <div className="payment-page">
            <div className="container">
                {/* PRODUCT */}
                {dataProduct.map((data) => {
                    data.lowPrice
                        ? (totalPrice += data.lowPrice * data.qtyPurchase)
                        : (totalPrice += data.originalPrice * data.qtyPurchase);

                    return (
                        <ProductPaymentCard key={data.productId} dataProduct={data} />
                    );
                })}

                {/* TOTAL PRICE */}
                <div className="row mt-4">
                    <div className="offset-lg-8 col-12 d-flex my-3 align-items-center text-center">
                        <h3>Total: ${totalPrice}</h3>
                    </div>
                </div>

                {/* HR */}
                <div className="row mt-4">
                    <div className="col-12 mx-auto">
                        <div className="div-separator w-50 m-auto my-5">
                            <span className="w-auto px-2" style={{ marginLeft: '-65px' }}>
                                payment with
                            </span>
                        </div>
                    </div>
                </div>

                {/* BUTTON PAYMENT */}
                <div className="row mt-4">
                    <div className="col-lg-4 col-12">
                        <Button to="#" className="btn custom-btn form-control my-3">
                            <CashBanknoteFilledIcon className="me-1" />
                            CASH
                        </Button>
                    </div>
                    <div className="col-lg-4 col-12">
                        <Button to="#" className="btn custom-btn form-control my-3">
                            <CreditCardFilledIcon className="me-1" />
                            CREDIT CARD
                        </Button>
                    </div>
                    <div className="col-lg-4 col-12">
                        <Button to="#" className="btn custom-btn form-control my-3">
                            <BrandPaypalFilledIcon className="me-1" />
                            PAYPAL
                        </Button>
                    </div>

                    <div className="col-12 mx-auto">
                        <div className="div-separator w-50 m-auto my-5">
                            <span>or</span>
                        </div>
                    </div>

                    <div className="col-12 mx-auto">
                        <Button
                            to={configs.routes.shoppingCart}
                            className="btn custom-btn form-control my-3"
                            leftIcon={<ShoppingCartFilledIcon className="me-1" />}
                        >
                            SHOPPING CART
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;
