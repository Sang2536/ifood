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

function FooterComponent () {
    return (
        <div className="footer-component">
            <footer className="site-footer" style={{ backgroundColor: '#000000' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-10 me-auto mb-4">
                            <h4 className="text-white mb-3">
                                <a href="link-home">iFood</a>
                            </h4>
                            <p className="copyright-text text-muted mt-lg-5 mb-4 mb-lg-0">
                                Copyright © 2022 <strong>iFood</strong>
                            </p>
                            <br />
                            <p className="copyright-text">
                                Designed by{' '}
                                <a href="link-home" target="_blank">
                                    iFood
                                </a>
                            </p>
                        </div>

                        <div className="col-lg-5 col-8">
                            <h5 className="text-white mb-3">Sitemap</h5>
                            <ul className="footer-menu d-flex flex-wrap">
                                <li className="footer-menu-item">
                                    <a href="link-about" className="footer-menu-link">
                                        Story
                                    </a>
                                </li>
                                <li className="footer-menu-item">
                                    <a href="link-product" className="footer-menu-link">
                                        Products
                                    </a>
                                </li>
                                <li className="footer-menu-item">
                                    <a href="link-privacy-policy" className="footer-menu-link">
                                        Privacy policy
                                    </a>
                                </li>
                                <li className="footer-menu-item">
                                    <a href="link-faq" className="footer-menu-link">
                                        FAQs
                                    </a>
                                </li>
                                <li className="footer-menu-item">
                                    <a href="link-contact" className="footer-menu-link">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-4">
                            <h5 className="text-white mb-3">Social</h5>
                            <ul className="social-icon">
                                <li>
                                    <a href="link-youtube" className="social-icon-link bi-youtube">
                                        <BrandYoutubeIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="link-facebook" className="social-icon-link bi-facebook">
                                        <BrandFacebookIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="link-twitter" className="social-icon-link bi-twitter">
                                        <BrandTwitterIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="link-instagram" className="social-icon-link bi-instagram">
                                        <BrandInstagramIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="link-tiktok" className="social-icon-link bi-tiktok">
                                        <BrandTiktokIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="link-gmail" className="social-icon-link bi-gmail">
                                        <BrandGmailIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="link-telegram" className="social-icon-link bi-telegram">
                                        <BrandTelegramIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="link-whatsapp" className="social-icon-link bi-whatsapp">
                                        <BrandWhatsappIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="link-skype" className="social-icon-link bi-skype">
                                        <BrandSkypeIcon />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default FooterComponent;