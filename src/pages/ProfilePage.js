import '../scss/pages/profile.scss';
import { SiteContentHeader } from '../components/pages';
import { IconList } from '../components/pages/list';
import { Image } from '../components/tags';
import { BrandFacebookIcon, BrandGmailIcon, BrandInstagramIcon, BrandTelegramIcon, BrandTwitterIcon } from '../icons';

function ProfilePage() {
    return (
        <div className="profile-page">
            <SiteContentHeader
                textFirst="Mini profile,"
                textSecond="@username"
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
                        <div className="col-lg-8 col-12 text-center">
                            <h2>About @username</h2>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-5 col-12">
                            <h5>Contact</h5>
                            <ul className="info">
                                <li>
                                    <span className="first-block">Full Name:</span>
                                    <span className="second-block">Louie Jie Mahusay</span>
                                </li>
                                <li>
                                    <span className="first-block">Phone:</span>
                                    <span className="second-block">+ 1235 2355 98</span>
                                </li>
                                <li>
                                    <span className="first-block">Email:</span>
                                    <span className="second-block">info@yoursite.com</span>
                                </li>
                                <li>
                                    <span className="first-block">Website:</span>
                                    <span className="second-block">www.yoursite.com</span>
                                </li>
                                <li>
                                    <span className="first-block">Address:</span>
                                    <span className="second-block">
                                        198 West 21th Street, Suite 721 New York NY 10016
                                    </span>
                                </li>
                                <li>
                                    <span className="first-block">Social:</span>
                                    <span className="second-block">Social</span>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-7 col-12">
                            <h5>Hello There!</h5>
                            <p>
                                There live the blind texts far from the countries Vokalia and Consonantia, there live
                                the blind texts. Separated they live in bookmarksgrove there live the blind texts far
                                from the countries.
                            </p>
                            <p>
                                Far far away, behind the word mountains, Quos quia provident consequuntur culpa facere
                                ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus
                                itaque adipisci there live the blind texts from the countries Vokalia and Consonantia,
                                there live the blind texts. Quos quia provident consequuntur culpa facere ratione maxime
                                commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque
                                adipisci.
                            </p>

                            <h5>Social</h5>
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
                                        linkTo: '/link-gmail',
                                        iconLeft: <BrandGmailIcon />,
                                        className: {
                                            link: 'me-3 social-icon-link bi-gmail',
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
                                        linkTo: '/link-instagram',
                                        iconLeft: <BrandInstagramIcon />,
                                        className: {
                                            link: 'me-3 social-icon-link bi-instagram',
                                        },
                                    },
                                    {
                                        linkTo: '/link-twitter',
                                        iconLeft: <BrandTwitterIcon />,
                                        className: {
                                            link: 'me-3 social-icon-link bi-twitter',
                                        },
                                    },
                                ]}
                            />
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-5 col-12">
                            <h5>Setting</h5>
                        </div>

                        <div className="col-lg-7 col-12">
                            <h5>Content Setting</h5>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProfilePage;
