import { NavLink } from 'react-router-dom';

import '../scss/components/pages/side-header.scss';
import configs from '../configs';

function SignInPage() {
    return (
        <div className="sign-in-page">
            <section className="sign-in-form section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto col-12">
                            <h1 className="hero-title text-center mb-5">Sign In</h1>

                            <div className="row">
                                <div className="col-lg-8 col-11 mx-auto">
                                    <form role="form" method="post">
                                        <div className="form-floating mb-4 p-0">
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

                                        <div className="form-floating p-0">
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                className="form-control"
                                                placeholder="Password"
                                                required
                                            />
                                            <label for="password">Password</label>
                                        </div>

                                        <button type="submit" className="btn custom-btn form-control mt-4 mb-3">
                                            Sign in
                                        </button>

                                        <p className="text-center">
                                            Don’t have an account?{' '}
                                            <NavLink to={configs.routes.signUp}>Create New</NavLink>
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

export default SignInPage;
