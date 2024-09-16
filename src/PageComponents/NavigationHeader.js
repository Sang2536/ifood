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

                    <a className="navbar-brand" href="link-home">
                        <strong>
                            <span>iFood</span> Shop
                        </strong>
                    </a>

                    <div className="d-lg-none">
                        <a href="link-sign-in" className="bi-person custom-icon me-3">
                            <UserIcon />
                        </a>

                        <a href="link-product-detail" className="bi-bag custom-icon">
                            <ShoppingBagIcon />{' '}
                        </a>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="link-home">
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="link-about">
                                    Story
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="link-product">
                                    Products
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="link-faq">
                                    FAQs
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="link-contact">
                                    Contact
                                </a>
                            </li>
                        </ul>

                        <div className="d-flex">
                            <a href="link-sign-in" className="bi-person custom-icon me-3">
                                <UserIcon />
                            </a>

                            <a href="nk-product-detail" className="bi-bag custom-icon">
                                <ShoppingBagIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavigationHeaderComponent;