import { NavLink } from 'react-router-dom';

import '../../scss/pages/product.scss';
import configs from '../../configs';
import { ProductCard } from './card/index';

function HomeProductComponent() {
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
            linkTo: configs.routes.productDetail,
            imgSrc: 'https://i.pinimg.com/564x/3c/75/d9/3c75d96bd31b762788cab9ede0dbe245.jpg',
            name: 'Fashion Set',
            price: '$45',
            shortDescription: 'Nature made another world',
            alert: 'Low Price',
        },
        {
            productId: 'P03',
            linkTo: configs.routes.productDetail,
            imgSrc: 'https://i.pinimg.com/564x/34/9c/97/349c9742c4eb84193293e0308613f84c.jpg',
            name: 'Juice Drinks',
            price: '$35',
            shortDescription: 'Costume Package',
        },
    ];

    return (
        <div className="home-product-component">
            <section className="featured-product section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="mb-5">Featured Products</h2>
                        </div>

                        {
                            dataProductApi.map((data) => {
                                return (
                                    <div className="col-lg-4 col-12 mb-3">
                                        <ProductCard key={data.productId} dataProduct={data} />
                                    </div>
                                );
                            })
                        }


                        
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
