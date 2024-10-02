import { NavLink } from 'react-router-dom';

import '../scss/pages/product.scss';
import configs from '../configs';
import { CarouselComponent, HomeAboutComponent } from '../components/pages';
import { ProductCard } from '../components/pages/card';
import { ArrowRightIcon } from '../icons';

function HomePage() {
    const dataProductApi = [
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
            imgSrc: 'https://i.pinimg.com/564x/3c/75/d9/3c75d96bd31b762788cab9ede0dbe245.jpg',
            name: 'Fashion Set',
            price: '$45',
            shortDescription: 'Nature made another world',
            alert: 'Low Price',
        },
        {
            productId: 'P03',
            linkToProductDetail: configs.routes.productDetail,
            imgSrc: 'https://i.pinimg.com/564x/34/9c/97/349c9742c4eb84193293e0308613f84c.jpg',
            name: 'Juice Drinks',
            price: '$35',
            shortDescription: 'Costume Package',
        },
    ];

    return (
        <div className="HomePage">
            <CarouselComponent />

            <HomeAboutComponent />

            {/* Site: Intro Product */}
            <section className="front-product">
                <div className="container-fluid p-0">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <img
                                src="https://i.pinimg.com/564x/75/df/c4/75dfc452c7d3f9dd2c8a4076273ac7ae.jpg"
                                className="img-fluid object-fit-cover"
                                alt=""
                            />
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="px-5 py-5 py-lg-0">
                                <h2 className="mb-4">
                                    <span>Retail</span> shop owners
                                </h2>

                                <p className="lead mb-4">
                                    Credits go to Unsplash and FreePik websites for images used in this Little Fashion
                                    by Tooplate.
                                </p>

                                <NavLink to={configs.routes.product} className="custom-link">
                                    Explore Products
                                    <i className="bi-arrow-right ms-2">
                                        <ArrowRightIcon />
                                    </i>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Site: Feature Product */}
            <section className="featured-product section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="mb-5">Featured Products</h2>
                        </div>

                        {dataProductApi.map((data) => {
                            return (
                                <div className="col-lg-4 col-12 mb-3">
                                    <ProductCard key={data.productId} dataProduct={data} />
                                </div>
                            );
                        })}

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

export default HomePage;
