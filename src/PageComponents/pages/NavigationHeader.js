import { NavLink } from 'react-router-dom';

import '../../scss/components/pages/navigation-header.scss';
import configs from '../../configs';
import { UserIcon, ShoppingBagIcon } from '../../icons';

function NavigationHeaderComponent() {
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

                    <NavLink to={configs.routes.home} className="navbar-brand">
                        <strong>
                            <span>iFood</span> Shop
                        </strong>
                    </NavLink>

                    <div className="d-lg-none">
                        <NavLink to={configs.routes.signIn} className="bi-person custom-icon me-3">
                            <UserIcon />
                        </NavLink>

                        <NavLink to={configs.routes.shoppingCart} className="bi-bag custom-icon">
                            <ShoppingBagIcon />
                        </NavLink>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <NavLink to={configs.routes.home} className="nav-link" activeClassName="active">
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to={configs.routes.story} className="nav-link" activeClassName="active">
                                    Story
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to={configs.routes.product} className="nav-link" activeClassName="active">
                                    Product
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to={configs.routes.faq} className="nav-link" activeClassName="active">
                                    FAQs
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to={configs.routes.contact} className="nav-link" activeClassName="active">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>

                        <div className="d-flex">
                            <NavLink to={configs.routes.signIn} className="bi-person custom-icon me-3">
                                <UserIcon />
                            </NavLink>

                            <NavLink to={configs.routes.shoppingCart} className="bi-bag custom-icon">
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
