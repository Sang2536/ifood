import { NavLink } from 'react-router-dom';

import '../scss/pages/product.scss';
import configs from '../configs';
import { SiteContentHeader } from '../components/pages';
import { CartModal } from '../components/pages/modal';
import { ProductCard, ProductDetailCard } from '../components/pages/card';

function ProductDetailPage() {
    const dataProductRecommendApi = [
        {
            productId: 'P01',
            linkToProductDetail: configs.routes.productDetail,
            imgSrc: 'https://i.pinimg.com/564x/fd/73/fd/fd73fd73e03875ee55d15588c4deee74.jpg',
            name: 'Tree pot',
            price: '$25',
            shortDescription: 'Original package design from house',
            alert: 'New Arrival',
        },
        {
            productId: 'P02',
            linkToProductDetail: configs.routes.productDetail,
            imgSrc: 'https://i.pinimg.com/564x/80/99/4f/80994f4d0f232f319ba15f5e5a1a907c.jpg',
            name: 'Fashion Set',
            price: '$35',
            shortDescription: 'Nature made another world',
            alert: 'Discounted Price',
        },
        {
            productId: 'P03',
            linkToProductDetail: configs.routes.productDetail,
            imgSrc: 'https://i.pinimg.com/564x/46/15/51/4615516d8b34ce2621b44447cd767a72.jpg',
            name: 'Juice Drinks',
            price: '$35',
            shortDescription: 'Nature made another world',
        },
    ];

    return (
        <div className="ProductDetailPage">
            <SiteContentHeader textFirst="We provide you" textSecond="Fashionable stuffs" />

            <section className="product-detail section-padding">
                <div className="container">

                    {/* 1 ProductDetailCard = 1 row */}
                    <ProductDetailCard
                        dataProductDetail={{
                            productId: 'p01',
                            linkToPayment: configs.routes.payment,
                            imgSrc: 'https://i.pinimg.com/564x/fc/56/53/fc5653691bf8805a1d5b227f4232389c.jpg',
                            name: 'Tree pot',
                            price: '$25',
                            detailDescription:
                                'Over three years in business, We’ve had the chance to work on a variety of projects, with companies',
                            shortDescription: 'Original package design from house',
                        }}
                    />
                </div>
            </section>

            <section className="related-product section-padding border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="mb-5">You might also like</h3>
                        </div>

                        {dataProductRecommendApi.map((data) => {
                            return (
                                <div className="col-lg-4 col-12 mb-3">
                                    <ProductCard key={data.productId} dataProduct={data} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CartModal />
        </div>
    );
}

export default ProductDetailPage;
