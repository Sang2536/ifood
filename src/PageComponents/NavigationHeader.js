import { NavLink } from 'react-router-dom';

import { publicRoutes } from '../routes';
import '../scss/PageComponents/navigation-header.scss';
import { UserIcon, ShoppingBagIcon } from '../icons';

function NavigationHeaderComponent () {
    return (
        <div className="NavigationHeaderComponent">
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#f0f8ff' }}>
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <NavLink to="/" className="navbar-brand">
                        <strong>
                            <span>iFood</span> Shop
                        </strong>
                    </NavLink>

                    <div className="d-lg-none">
                        <NavLink to="/sign-in" className="bi-person custom-icon me-3">
                            <UserIcon />
                        </NavLink>

                        <NavLink to="/product-detail" className="bi-bag custom-icon">
                            <ShoppingBagIcon />
                        </NavLink>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" activeClassName="active">
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/story" className="nav-link" activeClassName="active">
                                    Story
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/product" className="nav-link" activeClassName="active">
                                    Product
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/faq" className="nav-link" activeClassName="active">
                                    FAQs
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link" activeClassName="active">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>

                        <div className="d-flex">
                            <NavLink to="/sign-in" className="bi-person custom-icon me-3">
                                <UserIcon />
                            </NavLink>

                            <NavLink to="/product-detail" className="bi-bag custom-icon">
                                <ShoppingBagIcon />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavigationHeaderComponent;