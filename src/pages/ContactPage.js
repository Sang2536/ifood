import { NavLink } from 'react-router-dom';

import '../scss/pages/contact.scss';
import '../scss/components/tags/custom-btn.scss';
import { SiteContentHeader } from '../components/pages';
import { FormInput, FormTextarea } from '../components/pages/form';
import { IconList } from '../components/pages/list';
import { Image } from '../components/tags';
import {
    BrandFacebookIcon,
    BrandInstagramIcon,
    BrandTelegramIcon,
    BrandTiktokIcon,
    BrandWhatsappIcon,
    BrandYoutubeIcon,
} from '../icons';

function ContactPage() {
    return (
        <div className="contact-page">
            <SiteContentHeader
                textFirst="Say hello to us"
                textSecond="love to hear you"
                sideNodeRight={
                    <Image
                        src="https://i.pinimg.com/564x/1b/9e/cb/1b9ecb506f3233667d426f73ccf73b0a.jpg"
                        className="header-image img-fluid"
                        alt=""
                    />
                }
            />

            <section className="contact section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <h2 className="mb-4">
                                Let's <span>begin</span>
                            </h2>

                            <form className="contact-form me-lg-5 pe-lg-3" role="form">
                                <FormInput
                                    className={{
                                        div: 'form-floating my-4',
                                        input: 'form-control',
                                    }}
                                    typeInput="text"
                                    nameInput="name"
                                    idInput="name"
                                    valueInput=""
                                    placeholderInput="Full name"
                                    requiredInput
                                    textLabel="Full name"
                                />

                                <FormInput
                                    className={{
                                        div: 'form-floating my-4',
                                        input: 'form-control',
                                    }}
                                    typeInput="email"
                                    nameInput="email"
                                    idInput="email"
                                    pattern="[^ @]*@[^ @]*"
                                    placeholderInput="Email address"
                                    requiredInput
                                    textLabel="Email address"
                                />

                                <FormInput
                                    className={{
                                        div: 'form-floating my-4',
                                        input: 'form-control',
                                    }}
                                    typeInput="subject"
                                    nameInput="subject"
                                    idInput="subject"
                                    placeholderInput="Subject"
                                    requiredInput
                                    textLabel="Subject"
                                />

                                <FormTextarea
                                    className={{
                                        div: 'form-floating my-4',
                                        input: 'form-control',
                                    }}
                                    nameInput="message"
                                    idInput="message"
                                    styleInput={{ height: '160px' }}
                                    placeholderInput="Leave a comment here"
                                    requiredInput
                                    textLabel="Tell us about the project"
                                />

                                <div className="col-lg-5 col-6">
                                    <button type="submit" className="form-control">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="col-lg-6 col-12 mt-5 ms-auto">
                            <div className="row">
                                <div className="col-6 border-end contact-info">
                                    <h6 className="mb-3">New Business</h6>

                                    <NavLink to="mailto:hello@company.com" className="custom-link">
                                        hello@company.com
                                        <i className="bi-arrow-right ms-2"></i>
                                    </NavLink>
                                </div>

                                <div className="col-6 contact-info">
                                    <h6 className="mb-3">Main Studio</h6>

                                    <NavLink to="mailto:studio@company.com" className="custom-link">
                                        studio@company.com
                                        <i className="bi-arrow-right ms-2"></i>
                                    </NavLink>
                                </div>

                                <div className="col-6 border-top border-end contact-info">
                                    <h6 className="mb-3">Our Office</h6>

                                    <p className="text-muted">Akershusstranda 20, 0150 Oslo, Norway</p>
                                </div>

                                <div className="col-6 border-top contact-info">
                                    <h6 className="mb-3">Our Socials</h6>

                                    <IconList
                                        dataIcon={[
                                            {
                                                linkTo: '/link-facebook',
                                                iconLeft: <BrandFacebookIcon />,
                                                className: {
                                                    link: 'me-3 social-icon-link bi-facebook',
                                                },
                                            },
                                            {
                                                linkTo: null,
                                                iconLeft: <BrandFacebookIcon />,
                                                className: {
                                                    li: 'text-red',
                                                    link: 'me-3 social-icon-link bi-facebook',
                                                },
                                            },
                                            {
                                                linkTo: '/link-telegram',
                                                iconLeft: <BrandTelegramIcon />,
                                                className: {
                                                    link: 'me-3 social-icon-link bi-telegram',
                                                },
                                            },
                                            {
                                                linkTo: '/link-youtube',
                                                iconLeft: <BrandYoutubeIcon />,
                                                className: {
                                                    link: 'me-3 social-icon-link bi-youtube',
                                                },
                                            },
                                            {
                                                linkTo: '/link-instagram',
                                                iconLeft: <BrandInstagramIcon />,
                                                className: {
                                                    link: 'me-3 social-icon-link bi-instagram',
                                                },
                                            },
                                            {
                                                linkTo: '/link-whatsapp',
                                                iconLeft: <BrandWhatsappIcon />,
                                                className: {
                                                    link: 'me-3 social-icon-link bi-whatsapp',
                                                },
                                            },
                                            {
                                                linkTo: '/link-tiktok',
                                                iconLeft: <BrandTiktokIcon />,
                                                className: {
                                                    link: 'me-3 social-icon-link bi-tiktok',
                                                },
                                            },
                                        ]}
                                    />
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
