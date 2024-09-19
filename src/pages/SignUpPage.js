import { NavLink } from "react-router-dom";

function SignUpPage() {
    return (
        <div className="sign-up-page">
            <section className="sign-in-form section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto col-12">
                            <h1 className="hero-title text-center mb-5">Sign Up</h1>

                            <div className="social-login d-flex flex-column w-50 m-auto">
                                <NavLink to="#" className="btn custom-btn social-btn mb-4">
                                    <i className="bi bi-google me-3"></i>
                                    Continue with Google
                                </NavLink>

                                <NavLink to="#" className="btn custom-btn social-btn">
                                    <i className="bi bi-facebook me-3"></i>
                                    Continue with Facebook
                                </NavLink>
                            </div>

                            <div className="div-separator w-50 m-auto my-5">
                                <span>or</span>
                            </div>

                            <div className="row">
                                <div className="col-lg-8 col-11 mx-auto">
                                    <form role="form" method="post">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                pattern="[^ @]*@[^ @]*"
                                                className="form-control"
                                                placeholder="Email address"
                                                required
                                            />
                                            <label for="email">Email address</label>
                                        </div>

                                        <div className="form-floating my-4">
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                pattern="[0-9a-zA-Z]{4,10}"
                                                className="form-control"
                                                placeholder="Password"
                                                required
                                            />
                                            <label for="password">Password</label>

                                            <p className="text-center">
                                                * shall include 0-9 a-z A-Z in 4 to 10 characters
                                            </p>
                                        </div>

                                        <div className="form-floating">
                                            <input
                                                type="password"
                                                name="confirm_password"
                                                id="confirm_password"
                                                pattern="[0-9a-zA-Z]{4,10}"
                                                className="form-control"
                                                placeholder="Password"
                                                required
                                            />
                                            <label for="confirm_password">Password Confirmation</label>
                                        </div>

                                        <button type="submit" className="btn custom-btn form-control mt-4 mb-3">
                                            Create account
                                        </button>

                                        <p className="text-center">
                                            Already have an account? Please <NavLink to="/sign-in">Sign In</NavLink>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SignUpPage;
