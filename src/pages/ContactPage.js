import { NavLink } from 'react-router-dom';

import '../scss/custom-btn.scss';
import configs from '../configs';
import { BrandFacebookIcon, BrandInstagramIcon, BrandTelegramIcon, BrandTiktokIcon, BrandWhatsappIcon, BrandYoutubeIcon } from '../icons';

function ContactPage() {
    return (
        <div className="contact-page">
            <header className="site-header section-padding-img site-header-image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-12 header-info">
                            <h1>
                                <span className="d-block text-primary">Say hello to us</span>
                                <span className="d-block text-dark">love to hear you</span>
                            </h1>
                        </div>
                    </div>
                </div>

                <img
                    src="https://i.pinimg.com/564x/1b/9e/cb/1b9ecb506f3233667d426f73ccf73b0a.jpg"
                    className="header-image img-fluid"
                    alt=""
                />
            </header>

            <section class="contact section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-12">
                            <h2 class="mb-4">
                                Let's <span>begin</span>
                            </h2>

                            <form class="contact-form me-lg-5 pe-lg-3" role="form">
                                <div class="form-floating">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        class="form-control"
                                        placeholder="Full name"
                                        required
                                    />
                                    <label for="name">Full name</label>
                                </div>

                                <div class="form-floating my-4">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        pattern="[^ @]*@[^ @]*"
                                        class="form-control"
                                        placeholder="Email address"
                                        required
                                    />
                                    <label for="email">Email address</label>
                                </div>

                                <div class="form-floating my-4">
                                    <input
                                        type="subject"
                                        name="subject"
                                        id="subject"
                                        class="form-control"
                                        placeholder="Subject"
                                        required
                                    />
                                    <label for="subject">Subject</label>
                                </div>

                                <div class="form-floating mb-4">
                                    <textarea
                                        id="message"
                                        name="message"
                                        class="form-control"
                                        placeholder="Leave a comment here"
                                        required
                                        style={{ height: '160px' }}
                                    ></textarea>
                                    <label for="message">Tell us about the project</label>
                                </div>

                                <div class="col-lg-5 col-6">
                                    <button type="submit" class="form-control">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div class="col-lg-6 col-12 mt-5 ms-auto">
                            <div class="row">
                                <div class="col-6 border-end contact-info">
                                    <h6 class="mb-3">New Business</h6>

                                    <NavLink to="mailto:hello@company.com" class="custom-link">
                                        hello@company.com
                                        <i class="bi-arrow-right ms-2"></i>
                                    </NavLink>
                                </div>

                                <div class="col-6 contact-info">
                                    <h6 class="mb-3">Main Studio</h6>

                                    <NavLink to="mailto:studio@company.com" class="custom-link">
                                        studio@company.com
                                        <i class="bi-arrow-right ms-2"></i>
                                    </NavLink>
                                </div>

                                <div class="col-6 border-top border-end contact-info">
                                    <h6 class="mb-3">Our Office</h6>

                                    <p class="text-muted">Akershusstranda 20, 0150 Oslo, Norway</p>
                                </div>

                                <div class="col-6 border-top contact-info">
                                    <h6 class="mb-3">Our Socials</h6>

                                    <ul class="social-icon">
                                        <li>
                                            <NavLink to="/link-facebook" class="social-icon-link bi-facebook">
                                                <BrandFacebookIcon />
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/link-message" class="social-icon-link bi-messenger">
                                                <BrandTelegramIcon />
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink to="/link-youtube" class="social-icon-link bi-youtube">
                                                <BrandYoutubeIcon />
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink to="/link-instagram" class="social-icon-link bi-instagram">
                                                <BrandInstagramIcon />
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink to="/link-whatsapp" class="social-icon-link bi-whatsapp">
                                                <BrandWhatsappIcon />
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink to="/link-tiktok" class="social-icon-link bi-tiktok">
                                                <BrandTiktokIcon />
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactPage;
