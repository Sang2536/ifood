import { NavLink } from 'react-router-dom';

import '../scss/pages/product.scss';
import configs from '../configs';
import { SiteContentHeader } from '../components/pages';
import { FormInput } from '../components/pages/form';
import { ProductCard } from '../components/pages/card';

function ProductPage() {
    const dataNewProductApi = [
        {
            productId: 'P01',
            linkToProductDetail: configs.routes.productDetail,
            imgSrc: 'https://i.pinimg.com/564x/56/f9/62/56f962d9e08a521d551be872159651ed.jpg',
            name: 'Tree pot',
            price: '$25',
            shortDescription: 'Original package design from house',
            alert: 'New Arrival',
        },
        {
            productId: 'P02',
            linkToProductDetail: configs.routes.productDetail,
            imgSrc: 'https://i.pinimg.com/564x/00/3a/16/003a163cb1d3bf99c3b0994a0622fba9.jpg',
            name: 'Fashion Set',
            price: '$35',
            shortDescription: 'Nature made another world',
            alert: 'Discounted Price',
        },
        {
            productId: 'P03',
            linkToProductDetail: configs.routes.productDetail,
            imgSrc: 'https://i.pinimg.com/564x/70/77/a8/7077a83e48a1ccf51c730ccd0964ec68.jpg',
            name: 'Juice Drinks',
            price: '$35',
            shortDescription: 'Nature made another world',
        },
    ];

    const dataPopularProductApi = [
        {
            productId: 'P04',
            linkToProductDetail: configs.routes.productDetail,
            imgSrc: 'https://i.pinimg.com/564x/52/d0/22/52d022282cdf17a5ef4ae4559204eaaa.jpg',
            name: 'Package',
            price: '$50',
            shortDescription: 'Original package design from house',
            alert: 'Trending',
        },
        {
            productId: 'P05',
            linkToProductDetail: configs.routes.productDetail,
            imgSrc: 'https://i.pinimg.com/564x/62/18/d5/6218d527b75512625cc6f77de13a38d8.jpg',
            name: 'Bottle',
            price: '$100',
            shortDescription: 'Package design',
            alert: 'Discounted Price',
        },
        {
            productId: 'P06',
            linkToProductDetail: configs.routes.productDetail,
            imgSrc: 'https://i.pinimg.com/564x/47/ca/69/47ca69d328cb0338f4d1280e6e949bdc.jpg',
            name: 'Medicine',
            price: '$200',
            shortDescription: 'Original design from house',
        },
    ];

    return (
        <div className="ProductPage">
            <SiteContentHeader textFirst="Choose your" textSecond="favorite stuffs" />

            <section className="section-padding pb-0">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-lg-8 mx-auto col-12">
                            <form role="form" method="post">
                                <FormInput
                                    className={{
                                        div: 'form-floating my-4',
                                        input: 'form-control',
                                    }}
                                    typeInput="text"
                                    nameInput="search"
                                    idInput="search"
                                    patternInput="[0-9a-zA-Z]"
                                    valueInput=""
                                    placeholderInput="Search Product"
                                    textLabel="Search Product"
                                />

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

                        {dataNewProductApi.map((data) => {
                            return (
                                <div className="col-lg-4 col-12 mb-3">
                                    <ProductCard key={data.productId} dataProduct={data} />
                                </div>
                            );
                        })}

                        <div className="col-12 text-center">
                            <NavLink to="products.html" className="view-all">
                                View All Products
                            </NavLink>
                        </div>

                        <div className="mt-5 col-12">
                            <h2 className="mb-5">Popular</h2>
                        </div>

                        {dataPopularProductApi.map((data) => {
                            return (
                                <div className="col-lg-4 col-12 mb-3">
                                    <ProductCard key={data.productId} dataProduct={data} />
                                </div>
                            );
                        })}

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
