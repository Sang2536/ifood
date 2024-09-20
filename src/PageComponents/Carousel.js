import { NavLink } from 'react-router-dom';

import '../scss/PageComponents/carousel.scss';
import '../scss/custom-btn.scss';
import configs from '../configs';
import { Image } from '../SingleComponents';

function CarouselComponent() {
    return (
        <div className="CarouselComponent">
            {/* Carousel 1 */}
            {/* <section className="slick-slideshow">
                <div className="slick-custom">
                    <Image src="" className="img-fluid" alt="" />

                    <div className="slick-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-10">
                                    <h1 className="slick-title">Cool Fashion</h1>

                                    <p className="lead text-white mt-lg-3 mb-lg-5">Little fashion template comes with total 8 HTML pages provided by Tooplate website.</p>

                                    <a href="about.html" className="btn custom-btn">Learn more about us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slick-custom">
                    <Image src="images/slideshow/team-meeting-renewable-energy-project.jpeg" className="img-fluid" alt="" />

                    <div className="slick-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-10">
                                    <h1 className="slick-title">New Design</h1>

                                    <p className="lead text-white mt-lg-3 mb-lg-5">Please share this Little Fashion template to your friends. Thank you for supporting us.</p>

                                    <a href="product.html" className="btn custom-btn">Explore products</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slick-custom">
                    <Image src="images/slideshow/two-business-partners-working-together-office-computer.jpeg" className="img-fluid" alt="" />

                    <div className="slick-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-10">
                                    <h1 className="slick-title">Talk to us</h1>

                                    <p className="lead text-white mt-lg-3 mb-lg-5">Tooplate is one of the best HTML CSS template websites for everyone.</p>

                                    <a href="contact.html" className="btn custom-btn">Work with us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Carousel 2 */}
            <div
                id="carouselIntroduceAutoPlaying"
                className="carousel slide slick-slideshow"
                style={{ height: '500px' }}
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item position-relative text-center active" style={{ height: '500px' }}>
                        <img
                            src="https://i.pinimg.com/564x/3d/2c/41/3d2c415a336f8ebf7b71fc2c50311e8a.jpg"
                            className="d-block w-100 img-fluid object-fit-cover"
                            alt="..."
                        />
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-10">
                                        <h1 className="slick-title">Cool Fashion</h1>

                                        <p className="lead text-white mt-lg-3 mb-lg-5">
                                            Little fashion template comes with total 8 HTML pages provided by Tooplate
                                            website.
                                        </p>

                                        <NavLink to={ configs.routes.story } className="btn custom-btn">
                                            Learn more about us
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item position-relative text-center" style={{ maxHeight: '500px' }}>
                        <img
                            src="https://i.pinimg.com/564x/6c/71/ec/6c71ecc0dce17cc8f059d4b8335fbf2f.jpg"
                            className="d-block w-100 img-fluid"
                            alt="..."
                        />
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-10">
                                        <h1 className="slick-title">Cool Fashion</h1>

                                        <p className="lead text-white mt-lg-3 mb-lg-5">
                                            Little fashion template comes with total 8 HTML pages provided by Tooplate
                                            website.
                                        </p>

                                        <NavLink to={ configs.routes.story } className="btn custom-btn">
                                            Learn more about us
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item position-relative text-center" style={{ maxHeight: '500px' }}>
                        <img
                            src="https://i.pinimg.com/564x/c4/58/7a/c4587a2b71c24c60e6644433d11d3191.jpg"
                            className="d-block w-100 img-fluid"
                            alt="..."
                        />
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-10">
                                        <h1 className="slick-title">Talk to us</h1>

                                        <p className="lead text-white mt-lg-3 mb-lg-5">
                                            Tooplate is one of the best HTML CSS template websites for everyone.
                                        </p>

                                        <NavLink to={ configs.routes.contact } className="btn custom-btn">
                                            Work with us
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselIntroduceAutoPlaying"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselIntroduceAutoPlaying"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default CarouselComponent;
