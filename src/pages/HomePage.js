import { NavLink } from 'react-router-dom';

import '../scss/pages/product.scss';
import configs from '../configs';
import { CarouselComponent, HomeAboutComponent, HomeProductComponent } from '../components/pages';
import { ArrowRightIcon } from '../icons';

function HomePage() {
    return (
        <div className="HomePage">
            <CarouselComponent />

            <HomeAboutComponent />

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

            <HomeProductComponent />

            {/* <ContentComponent /> */}
        </div>
    );
}

export default HomePage;
