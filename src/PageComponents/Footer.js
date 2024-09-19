import { NavLink } from 'react-router-dom';

import { publicRoutes } from '../routes';
import '../scss/PageComponents/footer.scss';
import {
    BrandFacebookIcon,
    BrandGmailIcon,
    BrandInstagramIcon,
    BrandSkypeIcon,
    BrandTelegramIcon,
    BrandTiktokIcon,
    BrandTwitterIcon,
    BrandYoutubeIcon,
    BrandWhatsappIcon,
} from '../icons';

function FooterComponent() {
    return (
        <footer className="footer-component site-footer" style={{ backgroundColor: '#000000' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-10 me-auto mb-4">
                        <h4 className="text-white mb-3">
                            <NavLink to="/" className="">
                                iFood
                            </NavLink>
                        </h4>
                        <p className="copyright-text text-muted mt-lg-5 mb-4 mb-lg-0">
                            Copyright © 2022 <strong>iFood</strong>
                        </p>
                        <br />
                        <p className="copyright-text">
                            Designed by{' '}
                            <NavLink to="/" className="" target="_blank">
                                iFood
                            </NavLink>
                        </p>
                    </div>

                    <div className="col-lg-5 col-8">
                        <h5 className="text-white mb-3">Sitemap</h5>
                        <ul className="footer-menu d-flex flex-wrap">
                            <li className="footer-menu-item">
                                <NavLink to="/story" className="footer-menu-link">
                                    Story
                                </NavLink>
                            </li>
                            <li className="footer-menu-item">
                                <NavLink to="/product" className="footer-menu-link">
                                    Product
                                </NavLink>
                            </li>
                            <li className="footer-menu-item">
                                <NavLink to="/privacy-policy" className="footer-menu-link">
                                    Privacy policy
                                </NavLink>
                            </li>
                            <li className="footer-menu-item">
                                <NavLink to="/faq" className="footer-menu-link">
                                    FAQs
                                </NavLink>
                            </li>
                            <li className="footer-menu-item">
                                <NavLink to="/contact" className="footer-menu-link">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-4">
                        <h5 className="text-white mb-3">Social</h5>
                        <ul className="social-icon">
                            <li>
                                <NavLink to="/link-youtube" className="social-icon-link bi-youtube">
                                    <BrandYoutubeIcon />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/link-facebook" className="social-icon-link bi-facebook">
                                    <BrandFacebookIcon />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/link-twitter" className="social-icon-link bi-twitter">
                                    <BrandTwitterIcon />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/link-instagram" className="social-icon-link bi-instagram">
                                    <BrandInstagramIcon />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/link-tiktok" className="social-icon-link bi-tiktok">
                                    <BrandTiktokIcon />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/link-gmail" className="social-icon-link bi-gmail">
                                    <BrandGmailIcon />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/link-telegram" className="social-icon-link bi-telegram">
                                    <BrandTelegramIcon />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/link-whatsapp" className="social-icon-link bi-whatsapp">
                                    <BrandWhatsappIcon />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/link-skype" className="social-icon-link bi-skype">
                                    <BrandSkypeIcon />
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterComponent;
