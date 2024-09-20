import { NavLink } from "react-router-dom";

import configs from '../configs';
import { ArrowLeftIcon } from "../icons";

function ErrorPage() {
    return (
        <div className="error-page">
            <section className="section-padding">
                <div className="container p-0">
                    <div className="row align-items-center text-center">
                        <div className="col-lg-8 col-12 error-content">
                            <h3>We Are Sorry</h3>
                            <h1>
                                <span className="d-block text-primary">Error</span>
                                <span className="d-block text-dark">404</span>
                            </h1>
                            <p>
                                Unfortunately, the page you were looking for could not be found.
                                <br /> It may be temporarily unavailable, moved or no longer exists
                            </p>
                            <span></span>
                            <NavLink to={ configs.routes.home } className="btn custom-btn">
                                <ArrowLeftIcon />
                                Go to home page
                            </NavLink>
                        </div>

                        <div className="col-lg-4 col-12 error-img">
                            <img
                                src="https://i.pinimg.com/564x/2c/da/ed/2cdaed982da2ba2cf88fe0bbe73a602f.jpg"
                                className="d-block w-100 img-fluid object-fit-cover"
                                alt="..."
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ErrorPage;
